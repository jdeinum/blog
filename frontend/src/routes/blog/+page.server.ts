import type { PageServerLoad } from './$types';
import { getAllPosts } from '$lib/posts';

const POSTS_PER_PAGE = 10;

export const load: PageServerLoad = async ({ url }) => {
  const page = Number(url.searchParams.get('page')) || 1;
  const allPosts = getAllPosts();

  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const posts = allPosts.slice(start, end);

  return {
    posts,
    page,
    totalPages
  };
};
