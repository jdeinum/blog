import fs from 'fs';
import path from 'path';
import { error } from '@sveltejs/kit';
import { renderMarkdown } from '$lib/markdown_pipeline';

export async function load({ params }) {
  const slug = params.slug;
  const postPath = path.resolve('src/posts', slug, 'index.md');

  if (!fs.existsSync(postPath)) {
    error(404, 'Post not found');
  }

  const content = fs.readFileSync(postPath, 'utf-8');
  const { html, metadata } = await renderMarkdown(content);

  return {
    content: html,
    metadata
  };
}
