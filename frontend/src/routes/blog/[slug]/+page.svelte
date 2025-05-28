<script lang="ts">
  export let data: { content: string };
</script>

<article class="prose prose-lg dark:prose-invert">
  {@html data.content}
</article>

