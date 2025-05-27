import type { PageServerLoad, EntryGenerator } from './$types';
import { getPostBySlug, getAllPosts } from '$lib/posts';

export const prerender = true;

export const entries: EntryGenerator = () => {
  return getAllPosts().map((post) => ({ slug: post.slug }));
};

export const load: PageServerLoad = async ({ params }) => {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return { status: 404 };
  }
  return { post };
};

