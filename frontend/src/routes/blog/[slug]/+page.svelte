<script lang="ts">
  export let data;
  const { post } = data;
</script>

<article>
  <h1>{post.frontmatter.title}</h1>
  <p>{post.frontmatter.date}</p>
  <div class="content" dangerouslySetInnerHTML={{ __html: post.html }}></div>
</article>

<style>
  .content :global(p) {
    margin-bottom: 1em;
  }
</style>

