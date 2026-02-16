export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "./public/": "/" });
  eleventyConfig.addBundle("css");

  eleventyConfig.addTemplate("robots.njk", `User-agent: *
Allow: /
Disallow: /cv/

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: FacebookBot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Cohere-ai
Disallow: /`, {
    permalink: "robots.txt",
  });
}

export const config = {
  templateFormats: ["md", "njk", "html"],
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  dir: {
    input: "src",
    output: "_site",
  },
};
