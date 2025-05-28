<script lang="ts">
  export let data: { content: string };
</script>

<article
	class="prose prose-lg dark:prose-invert w-full sm:w-3/4 mx-auto px-4 mt-8"
>
	{@html data.content}
</article>
