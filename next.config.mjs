/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "www.notion.so",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 2026-09-04 — 브랜드 통합. 「AX그라운드」는 2026-08-17 에 폐기했는데
  // 이 사이트가 그대로 살아 네이버·구글에서 본진(busanaicodingschool.com)과
  // 나란히 노출되고 있었다. AX 권위가 두 도메인으로 갈리므로 본진으로 모은다.
  //
  // 칼럼 4편은 본진 /insights 로 옮겼고(1:1 매핑), 본진에 이미 같은 원문의
  // 글이나 사례가 있는 것은 그쪽으로 보낸다. 나머지는 /ax-consulting 으로.
  //
  // ⚠️ /sonyeo/* 는 소녀방앗간 클라이언트 페이지다. 절대 리다이렉트하지 않는다.
  //    (robots.txt 에서도 Disallow 로 빠져 있다)
  // ─────────────────────────────────────────────────────────────
  async redirects() {
    const EDU = "https://busanaicodingschool.com";
    const to = (path) => `${EDU}${path}`;

    // 옮긴 칼럼 — 1:1
    const moved = {
      "smb-work-automation-where-to-start": "/insights/smb-work-automation-where-to-start",
      "public-sector-ai-adoption-practical-order": "/insights/public-sector-ai-adoption-practical-order",
      "office-worker-ai-tasks-what-to-automate": "/insights/office-worker-ai-tasks-what-to-automate",
      "ax-where-to-start-small-business-2026": "/insights/ax-where-to-start-small-business",
      // 본진에 같은 원문의 글이 이미 있는 것
      "2026-ax-wave-busan-workers-vibe-coding": "/insights/why-busan-workers-learn-vibe-coding",
      "from-ai-usage-to-agent-design-2026": "/insights/beyond-chatgpt-usage-ai-agent-training",
      "what-is-ax-for-busan-companies": "/insights/ax-training-checklist-for-institutions",
      // 본진에 사례가 이미 있는 것
      "sonyeo-catering-ax-case": "/ax-consulting/sonyeo-bangatgan",
      "coding-school-student-management-system": "/ax-consulting",
      "gogaeseodong-booking-automation": "/ax-consulting",
      "first-tasks-to-automate-small-business": "/insights/ax-where-to-start-small-business",
    };

    return [
      ...Object.entries(moved).map(([slug, dest]) => ({
        source: `/insight/${slug}`,
        destination: to(dest),
        permanent: true,
      })),
      // 마케팅 페이지
      { source: "/", destination: to("/ax-consulting"), permanent: true },
      { source: "/consulting", destination: to("/ax-consulting"), permanent: true },
      { source: "/cases", destination: to("/ax-consulting"), permanent: true },
      { source: "/saas", destination: to("/ax-consulting"), permanent: true },
      { source: "/about", destination: to("/about"), permanent: true },
      { source: "/education", destination: to("/institution"), permanent: true },
      { source: "/diagnosis", destination: to("/inquiry?type=ax"), permanent: true },
      { source: "/diagnosis/thanks", destination: to("/inquiry?type=ax"), permanent: true },
      { source: "/insight", destination: to("/insights"), permanent: true },
      // 위에서 안 잡힌 나머지 칼럼도 목록으로 (/sonyeo/* 는 아래 규칙에 안 걸린다)
      { source: "/insight/:slug", destination: to("/insights"), permanent: true },
    ];
  },
};

export default nextConfig;
