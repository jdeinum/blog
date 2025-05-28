<script lang="ts">
  import { AppBar } from '@skeletonlabs/skeleton-svelte';
  import BookText from '@lucide/svelte/icons/book-text';
  import CircleUser from '@lucide/svelte/icons/circle-user';
  import { goto } from '$app/navigation';
  import Lightswitch from "$lib/light_switch.svelte"
	import '../app.css';

	let { children } = $props();

</script>

<AppBar>
  {#snippet lead()}
    <div></div>
  {/snippet}
  {#snippet trail()}
    <div class="ml-auto flex gap-3 items-center">
      <Lightswitch />
      <button on:click={() => goto('/blog')}>
        <BookText size={20} />
      </button>
      <button on:click={() => goto('/about')}>
        <CircleUser size={20} />
      </button>
    </div>
  {/snippet}
</AppBar>


{@render children()}
