<script lang="ts">
  export let data;
  const { posts } = data;
</script>

<h1>Blog</h1>
<div class="posts-grid">
  {#each posts as post}
    <a href={`/blog/${post.slug}`} class="post-card">
      <h2>{post.frontmatter.title}</h2>
      <p>{post.frontmatter.date}</p>
    </a>
  {/each}
</div>

<style>
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 1rem;
  }
  .post-card {
    padding: 1rem;
    border: 1px solid var(--color-border);
    border-radius: 6px;
    text-decoration: none;
    color: inherit;
  }
  .post-card:hover {
    background: var(--color-bg-hover);
  }
</style>

