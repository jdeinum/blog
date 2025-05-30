<script lang="ts">
  import { Search } from '@lucide/svelte';

  export let data: {
    posts: { slug: string; title: string; date: string }[];
  };

  let searchTerm = '';

  $: filteredPosts = data.posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper function to get the ordinal suffix for a day number
  function getOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  // Format date as "April 10th, 2025"
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' });
    const year = date.getUTCFullYear();
    const suffix = getOrdinalSuffix(day);
    return `${month} ${day}${suffix}, ${year}`;
  }

</script>

<div class="max-w-5xl mx-auto p-4">


  <!-- Centered Search Input -->
  <div class="flex justify-center mb-8">
    <div class="relative w-full sm:w-96">
      <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
      <input
        type="text"
        bind:value={searchTerm}
        class="w-full pl-10 pr-4 py-2 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary transition"
      />
    </div>
  </div>

  <!-- Post Cards -->
  <div class="space-y-4">
    {#each filteredPosts as post}
      <a
        href={`/blog/${post.slug}`}
        class="card preset-filled-surface-100-900 p-4 shadow-lg rounded-xl backdrop-blur-sm bg-opacity-60 transition-transform hover:-translate-y-1 hover:shadow-xl flex justify-between items-center"
      >
        <h2 class="text-lg font-semibold font-mono text-primary">
          {post.title}
        </h2>
        <p class="text-sm text-gray-700 dark:text-gray-300 font-sans whitespace-nowrap">
          {formatDate(post.date)}
        </p>
      </a>
    {/each}
  </div>
</div>
