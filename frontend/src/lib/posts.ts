import fs from "fs";
import path from "path";
import { renderMarkdown } from "./markdown_pipeline";

const postsDir = path.resolve("src/posts");

export function getAllPosts() {
  // Read directories inside postsDir
  const postFolders = fs.readdirSync(postsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const posts = postFolders.map((slug) => {
    const mdPath = path.join(postsDir, slug, "index.md");

    if (!fs.existsSync(mdPath)) {
      return null;
    }

    const content = fs.readFileSync(mdPath, "utf-8");
    const { metadata } = renderMarkdown(content);

    return {
      slug,
      ...metadata
    };
  }).filter(Boolean);

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
