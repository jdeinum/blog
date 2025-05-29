<script lang="ts">
	import { page } from '$app/state';
</script>

<style>
pre.ascii-art {
  font-family: 'Courier New', Courier, monospace;
  white-space: pre; /* preserve spaces and line breaks */
  color: #4caf50; /* or whatever color you want */
  text-align: center; /* optional */
  line-height: 1.2; /* tweak for spacing if needed */
  font-size: 14px; /* tweak size as you like */
}
</style>



{#if page.status === 404}
  <div class="flex flex-col items-center justify-center min-h-screen p-4">
    <p class="text-lg font-semibold mb-4">
      I'm not sure what you're looking for
    </p>
    <pre class="ascii-art">
    {`
       (•_•)  (•_•)
      <)   )> <)   )>
       /   \\  /   \\
    `}
    </pre>
    <a href="/blog" class="back-link">
      ← Back to search
    </a>
  </div>
{:else}
  <h1>{page.status}</h1>
  <p>{page.error?.message}</p>
{/if}
