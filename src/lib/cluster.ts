/**
 * inferCluster — Suy luận SEO Cluster từ tags hiện có của bài blog.
 * Không cần thêm `cluster` field vào MDX frontmatter.
 *
 * Cluster map (từ toilatung_SEO_Strategy_v1.0.md):
 *   A — AI Agent & Agentic AI
 *   B — Vibe Coding & Claude Code
 *   C — AI Tools & Workflow
 *   D — AI Marketing & Content
 *   E — AI cho Phụ nữ & Người mới
 *   F — Design & UI với AI
 *   G — Kiếm tiền với AI
 */

export type Cluster = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | null;

// Keyword → cluster mapping (priority order matters — first match wins)
const CLUSTER_RULES: Array<{ cluster: Cluster; keywords: string[] }> = [
  {
    cluster: 'B',
    keywords: [
      'vibe coding', 'claude code', 'cursor', 'copilot', 'context window',
      'sub-agent', 'zero-gravity', 'system prompt', 'mcp', 'model context protocol',
      'director mindset', 'deploy', 'netlify', 'hooks', 'claude 3', 'claude 4',
      'vibe', 'ai programming', 'claude ai',
    ],
  },
  {
    cluster: 'A',
    keywords: [
      'agentic', 'ai agent', 'multi agent', 'crewai', 'autogen', 'orchestrator',
      'automation workflow', 'ai system',
    ],
  },
  {
    cluster: 'F',
    keywords: [
      'dark ui', 'ui/ux', 'design system', 'glassmorphism', 'tailwind css',
      'premium dark', 'figma', 'handoff', 'claude design', 'ux', 'ui design',
    ],
  },
  {
    cluster: 'D',
    keywords: [
      'content marketing', 'viral content', 'short video', 'landing page cro',
      'cro', 'copywriting', 'marketing strategy', 'traffic', 'email marketing',
      'exit popup', 'lead generation', 'competitor analysis', 'marketing',
    ],
  },
  {
    cluster: 'G',
    keywords: [
      'one-person agency', 'freelance', 'kiếm tiền', 'one person agency',
      'tvt agency', 'outsource', 'business model', 'agency',
    ],
  },
  {
    cluster: 'C',
    keywords: [
      'make.com', 'n8n', 'workflow', 'automation', 'chatgpt', 'elevenlabs',
      'canva', 'ai tools', 'tools', 'prompt engineering',
    ],
  },
  {
    cluster: 'E',
    keywords: [
      'phụ nữ', 'người mới', 'beginner', 'career', 'future of work', 'mindset',
    ],
  },
];

/** Returns the best matching cluster for a given list of tags */
export function inferCluster(tags: string[] = []): Cluster {
  const normalized = tags.map((t) => t.toLowerCase());

  for (const rule of CLUSTER_RULES) {
    const matched = rule.keywords.some((kw) =>
      normalized.some((tag) => tag.includes(kw) || kw.includes(tag))
    );
    if (matched) return rule.cluster;
  }

  return null;
}

/** Human-readable label for each cluster */
export const CLUSTER_LABEL: Record<NonNullable<Cluster>, string> = {
  A: 'AI Agent & Agentic AI',
  B: 'Vibe Coding & Claude Code',
  C: 'AI Tools & Workflow',
  D: 'AI Marketing & Content',
  E: 'AI cho Người Mới',
  F: 'Design & UI với AI',
  G: 'Kiếm Tiền với AI',
};
