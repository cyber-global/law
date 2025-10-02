import type { ContactFormData } from './validators';

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

/**
 * Send notification to Slack when contact form is submitted
 */
export async function sendSlackNotification(data: ContactFormData) {
  if (!SLACK_WEBHOOK_URL) {
    console.log('Slack webhook not configured, skipping notification');
    return { success: true, skipped: true };
  }

  const topicEmoji: Record<ContactFormData['topic'], string> = {
    incident: '🚨',
    compliance: '✓',
    contracts: '📄',
    disputes: '⚖️',
    forensics: '🔍',
    readiness: '🛡️',
    partnership: '🤝',
    other: '💬',
  };

  const topicLabels: Record<ContactFormData['topic'], string> = {
    incident: 'Incident Response',
    compliance: 'Compliance',
    contracts: 'Contracts',
    disputes: 'Disputes',
    forensics: 'Forensics',
    readiness: 'Readiness Assessment',
    partnership: 'Partnership',
    other: 'General Inquiry',
  };

  const priority = data.topic === 'incident' ? '🔴 HIGH PRIORITY' : '🟢 Normal';

  const message = {
    blocks: [
      {
        type: 'header',
        text: {
          type: 'plain_text',
          text: `${topicEmoji[data.topic]} New Contact Form Submission`,
          emoji: true,
        },
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Topic:*\n${topicLabels[data.topic]}`,
          },
          {
            type: 'mrkdwn',
            text: `*Priority:*\n${priority}`,
          },
        ],
      },
      {
        type: 'divider',
      },
      {
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Name:*\n${data.name}`,
          },
          {
            type: 'mrkdwn',
            text: `*Email:*\n<mailto:${data.email}|${data.email}>`,
          },
          ...(data.company
            ? [
                {
                  type: 'mrkdwn',
                  text: `*Company:*\n${data.company}`,
                },
              ]
            : []),
          ...(data.role
            ? [
                {
                  type: 'mrkdwn',
                  text: `*Role:*\n${data.role}`,
                },
              ]
            : []),
          ...(data.phone
            ? [
                {
                  type: 'mrkdwn',
                  text: `*Phone:*\n<tel:${data.phone}|${data.phone}>`,
                },
              ]
            : []),
          ...(data.jurisdiction
            ? [
                {
                  type: 'mrkdwn',
                  text: `*Jurisdiction:*\n${data.jurisdiction}`,
                },
              ]
            : []),
        ],
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Message:*\n${data.message.substring(0, 500)}${data.message.length > 500 ? '...' : ''}`,
        },
      },
      {
        type: 'context',
        elements: [
          {
            type: 'mrkdwn',
            text: `Submitted: <!date^${Math.floor(Date.now() / 1000)}^{date_long_pretty} at {time}|${new Date().toISOString()}>`,
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error(`Slack API returned ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send Slack notification:', error);
    // Don't throw - Slack notification is optional
    return { success: false, error: String(error) };
  }
}

