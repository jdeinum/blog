<script lang="ts">
  export let data: { content: string };
</script>

<article class="prose prose-lg dark:prose-invert max-w-none">
  {@html data.content}
</article>
