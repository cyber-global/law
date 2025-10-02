import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

// Service document type
export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: 'services/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    bullets: { type: 'list', of: { type: 'string' }, required: true },
    outcomes: { type: 'list', of: { type: 'string' }, required: true },
    order: { type: 'number', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/services#${doc.slug}`,
    },
  },
}));

// Section document type (for homepage and other page sections)
export const Section = defineDocumentType(() => ({
  name: 'Section',
  filePathPattern: 'sections/**/*.mdx',
  contentType: 'mdx',
  fields: {
    page: { type: 'string', required: true },
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    order: { type: 'number', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc.page}#${doc.slug}`,
    },
  },
}));

// Partner document type
export const Partner = defineDocumentType(() => ({
  name: 'Partner',
  filePathPattern: 'partners/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    logo: { type: 'string', required: false },
    regions: { type: 'list', of: { type: 'string' }, required: true },
    capabilities: { type: 'list', of: { type: 'string' }, required: true },
    url: { type: 'string', required: false },
    order: { type: 'number', required: true },
  },
}));

// FAQ document type
export const FAQ = defineDocumentType(() => ({
  name: 'FAQ',
  filePathPattern: 'faqs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    question: { type: 'string', required: true },
    order: { type: 'number', required: true },
  },
}));

// Team document type
export const Team = defineDocumentType(() => ({
  name: 'Team',
  filePathPattern: 'team/**/*.mdx',
  contentType: 'mdx',
  fields: {
    name: { type: 'string', required: true },
    role: { type: 'string', required: true },
    bar: { type: 'list', of: { type: 'string' }, required: false },
    languages: { type: 'list', of: { type: 'string' }, required: false },
    photo: { type: 'string', required: false },
    order: { type: 'number', required: true },
  },
}));

// Legal document type
export const Legal = defineDocumentType(() => ({
  name: 'Legal',
  filePathPattern: 'legal/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    lastUpdated: { type: 'date', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/legal/${doc.slug}`,
    },
  },
}));

// Page document type
export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    slug: { type: 'string', required: true },
    description: { type: 'string', required: false },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Service, Section, Partner, FAQ, Team, Legal, Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node: any) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted');
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});


