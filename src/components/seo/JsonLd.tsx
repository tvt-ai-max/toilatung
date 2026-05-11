/**
 * JsonLd — Server Component
 * Renders JSON-LD structured data as a <script> tag.
 * Usage: <JsonLd data={schemaObject} />
 */

interface JsonLdProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any> | Record<string, any>[];
}

export default function JsonLd({ data }: JsonLdProps) {
  const json = Array.isArray(data)
    ? data.map((d) => JSON.stringify(d))
    : [JSON.stringify(data)];

  return (
    <>
      {json.map((str, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: str }}
        />
      ))}
    </>
  );
}

// ─── Schema builder helpers ────────────────────────────────────────────────────

const BASE_URL = 'https://toilatung.com';
const AUTHOR_NAME = 'Nguyễn Thanh Tùng';
const SITE_NAME = 'Tôi Là Tùng';
const LOGO_URL = `${BASE_URL}/images/home-og.webp`;

export interface ArticleSchemaProps {
  title: string;
  description: string;
  slug: string;
  coverImage?: string;
  datePublished: string;
  dateModified?: string;
}

/** Builds an Article + BreadcrumbList schema array for a blog post */
export function buildBlogPostSchema(props: ArticleSchemaProps) {
  const { title, description, slug, coverImage, datePublished, dateModified } = props;
  const postUrl = `${BASE_URL}/blog/${slug}`;
  const imageUrl = coverImage ? `${BASE_URL}${coverImage.startsWith('/') ? coverImage : '/' + coverImage}` : LOGO_URL;

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630,
    },
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: `${BASE_URL}/ve-tung`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: LOGO_URL,
        width: 1200,
        height: 630,
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    inLanguage: 'vi-VN',
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: BASE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${BASE_URL}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: postUrl,
      },
    ],
  };

  return [article, breadcrumb];
}

export interface WebsiteSchemaProps {
  name?: string;
  description?: string;
}

/** Builds a WebSite schema for the homepage */
export function buildWebsiteSchema(props: WebsiteSchemaProps = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: props.name || SITE_NAME,
    description: props.description,
    url: BASE_URL,
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: `${BASE_URL}/ve-tung`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/blog?tag={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'vi-VN',
  };
}

export interface CourseSchemaProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  price?: string;
  priceCurrency?: string;
}

/** Builds a Course schema for course/product pages */
export function buildCourseSchema(props: CourseSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: props.name,
    description: props.description,
    url: props.url,
    provider: {
      '@type': 'Organization',
      name: props.provider || SITE_NAME,
      url: BASE_URL,
    },
    author: {
      '@type': 'Person',
      name: AUTHOR_NAME,
      url: `${BASE_URL}/ve-tung`,
    },
    inLanguage: 'vi-VN',
    ...(props.price && {
      offers: {
        '@type': 'Offer',
        price: props.price,
        priceCurrency: props.priceCurrency || 'VND',
        availability: 'https://schema.org/InStock',
        url: props.url,
      },
    }),
  };
}
