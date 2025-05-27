import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';

const postsDir = path.join(process.cwd(), 'src/posts');

export function getAllPosts() {
  const files = fs.readdirSync(postsDir).filter((file) => file.endsWith('.md'));
  return files.map((fileName) => {
    const filePath = path.join(postsDir, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data: frontmatter, content } = matter(fileContent);
    const slug = fileName.replace(/\.md$/, '');

    return { slug, frontmatter, content };
  });
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content } = matter(fileContent);

  const processed = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  const html = processed.toString();

  return { slug, frontmatter, html };
}
