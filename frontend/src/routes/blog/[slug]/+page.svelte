<script lang="ts">
  export let data: { content: string };
</script>

<article class="prose prose-lg max-w-none">
  {@html data.content}
</article>
