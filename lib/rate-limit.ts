/**
 * Simple in-memory rate limiter for contact form
 * For production, consider using Upstash Redis or similar
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Cleanup old entries every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of rateLimitStore.entries()) {
      if (now > entry.resetAt) {
        rateLimitStore.delete(key);
      }
    }
  }, 5 * 60 * 1000);
}

/**
 * Check if a request should be rate limited
 * 
 * @param identifier - Unique identifier (e.g., IP address or email)
 * @param limit - Maximum number of requests allowed
 * @param windowMs - Time window in milliseconds
 * @returns Object with success status and remaining requests
 */
export function checkRateLimit(
  identifier: string,
  limit: number = 5,
  windowMs: number = 60 * 60 * 1000 // 1 hour by default
): { success: boolean; limit: number; remaining: number; reset: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // No previous entry or window has reset
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    });

    return {
      success: true,
      limit,
      remaining: limit - 1,
      reset: now + windowMs,
    };
  }

  // Within the window
  if (entry.count < limit) {
    entry.count++;
    rateLimitStore.set(identifier, entry);

    return {
      success: true,
      limit,
      remaining: limit - entry.count,
      reset: entry.resetAt,
    };
  }

  // Rate limit exceeded
  return {
    success: false,
    limit,
    remaining: 0,
    reset: entry.resetAt,
  };
}

/**
 * Get rate limit status for an identifier
 */
export function getRateLimitStatus(identifier: string, limit: number = 5): {
  remaining: number;
  reset: number;
} {
  const entry = rateLimitStore.get(identifier);
  
  if (!entry || Date.now() > entry.resetAt) {
    return {
      remaining: limit,
      reset: Date.now(),
    };
  }

  return {
    remaining: Math.max(0, limit - entry.count),
    reset: entry.resetAt,
  };
}

/**
 * Reset rate limit for an identifier (admin use)
 */
export function resetRateLimit(identifier: string): void {
  rateLimitStore.delete(identifier);
}

