import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypePrism from "rehype-prism-plus"; 
import rehypePrettyCode from 'rehype-pretty-code';


export function renderMarkdown(content: string): { html: string; metadata: any } {
  const file = unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkParseFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrism, {
      showLineNumbers: true,
    })
    .use(rehypeStringify)
    .processSync(content);

  const metadata = file.data?.frontmatter ?? {};
  const html = file.toString();

  return { html, metadata };
}
