import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkFrontmatter from "remark-frontmatter";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypeTypst from '@myriaddreamin/rehype-typst'
import remarkMath from 'remark-math'


export async function renderMarkdown(content: string): { html: string; metadata: any } {
  const file =  await unified()
    .use(remarkParse)
    .use(remarkFrontmatter, ["yaml"])
    .use(remarkParseFrontmatter)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeTypst, {


    })
    .use(rehypePrettyCode, {
      keepBackground: true,
      grid: true,
      theme: { 
        dark: "tokyo-night",
        light: "material-theme-palenight"
      },
      defaultLang: "plaintext",
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
      }),
    ],

    })
    .use(rehypeStringify)
    .process(content);

    

  const metadata = file.data?.frontmatter ?? {};
  const html = file.toString();
  return { html, metadata };
}
