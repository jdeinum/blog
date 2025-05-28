
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParseFrontmatter from 'remark-parse-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';

export async function renderMarkdown(content: string): { html: string; metadata: any } {
	const file = await unified()
		.use(remarkParse)
		.use(remarkFrontmatter, ['yaml'])
		.use(remarkParseFrontmatter)
		.use(remarkGfm)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypePrettyCode, {
			theme: {
				dark: 'github-dark',
				light: 'github-light',
			},
			defaultLang: 'txt',
			keepBackground: false,
		})
		.use(rehypeStringify)
		.process(content);

	return {
		html: file.toString(),
		metadata: file.data?.frontmatter ?? {}
	};
}

