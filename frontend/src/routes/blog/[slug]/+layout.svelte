<script lang="ts">
  let { children } = $props();
</script>


<div class="w-full sm:w-3/4 mx-auto px-4 mt-8 mb-8">
  {@render children()}

  <div
    class="card preset-filled-surface-100-900 p-4 shadow-lg rounded-xl
    backdrop-blur-sm bg-opacity-60 transition-transform mt-8"
  >
    <p class="text-sm text-gray-900 dark:text-gray-100">
      Something incorrect or missing? Open an
      <a
        href="https://github.com/jdeinum/blog/issues"
        target="_blank"
        rel="noopener"
        class="text-blue-600 dark:text-blue-400 hover:underline"
      >
        issue
      </a>.
    </p>
  </div>
</div>

