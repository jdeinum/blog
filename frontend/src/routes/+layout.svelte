<script lang="ts">
  import { AppBar } from '@skeletonlabs/skeleton-svelte';
  import CircleSlash2 from '@lucide/svelte/icons/circle-slash-2';
  import BookText from '@lucide/svelte/icons/book-text';
  import CircleUser from '@lucide/svelte/icons/circle-user';
  import { goto } from '$app/navigation';
  import Lightswitch from '$lib/light_switch.svelte';
  import '../app.css';

  let { children } = $props();
</script>

<AppBar>
  {#snippet lead()}
    <button
      class="flex items-center gap-2 cursor-pointer select-none"
      onclick={() => goto('/blog')}
      aria-label="Go to homepage"
    >
      <CircleSlash2 size={24} class="text-primary" />
      <span class="font-mono text-xl font-bold leading-none">nullspaces</span>
    </button>
  {/snippet}
  {#snippet trail()}
    <div class="ml-auto flex gap-3 items-center">
      <Lightswitch />
      <button onclick={() => goto('/blog')}>
        <BookText size={20} />
      </button>
      <button onclick={() => goto('/about')}>
        <CircleUser size={20} />
      </button>
    </div>
  {/snippet}
</AppBar>

{@render children()}

