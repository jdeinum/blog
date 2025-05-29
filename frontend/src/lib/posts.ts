import fs from "fs/promises"; // Use the promises API
import path from "path";
import { renderMarkdown } from "./markdown_pipeline";

const postsDir = path.resolve("src/posts");

export async function getAllPosts() {
  // Read directories inside postsDir
  const dirents = await fs.readdir(postsDir, { withFileTypes: true });
  const postFolders = dirents.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);

  // Map to an array of promises because renderMarkdown is async
  const postsPromises = postFolders.map(async (slug) => {
    const mdPath = path.join(postsDir, slug, "index.md");

    try {
      // Check if file exists by trying to read it (fs.existsSync is not async)
      const content = await fs.readFile(mdPath, "utf-8");

      const { metadata } = await renderMarkdown(content);

      return {
        slug,
        ...metadata
      };
    } catch {
      // File doesn't exist or failed to read/parse
      return null;
    }
  });

  const postsWithNulls = await Promise.all(postsPromises);
  const posts = postsWithNulls.filter(Boolean);

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}
