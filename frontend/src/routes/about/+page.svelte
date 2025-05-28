<script lang="ts">
  import { Avatar } from '@skeletonlabs/skeleton-svelte';
  import { Github, Key } from '@lucide/svelte';
</script>

<div class="flex flex-col md:flex-row max-w-5xl mx-auto gap-8 p-8">
  <aside class="flex flex-col items-center gap-6 w-full md:w-48">
    <Avatar
      src="https://i.pravatar.cc/150?img=48"
      name="Jacob Deinum"
      size="xl"
    />
    <h1 class="text-xl font-mono font-semibold tracking-tight whitespace-nowrap">
      Jacob Deinum
    </h1>
    <a
      href="https://github.com/jdeinum"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-primary transition-colors"
      title="Visit GitHub Profile"
    >
      <Github class="w-5 h-5" />
      <span class="text-sm font-mono">GitHub</span>
    </a>
    <a
      href="https://github.com/jdeinum.gpg"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center gap-2 text-gray-800 dark:text-gray-300 hover:text-primary transition-colors"
      title="View GPG Public Key"
    >
      <Key class="w-5 h-5" />
      <span class="text-sm font-mono">GPG</span>
    </a>
  </aside>

  <main class="flex-1">
    <section class="card preset-filled-surface-100-900 p-6 shadow-lg rounded-xl backdrop-blur-sm bg-opacity-60">
      <!-- About Me -->
      <h2 class="text-2xl font-semibold mb-4 font-mono">About Me</h2>
      <p class="text-gray-800 dark:text-gray-300 font-sans leading-relaxed mb-6">
        Welcome to my site! I am a developer currently in Alberta, Canada, but
        originally from the Netherlands. Outside of work, I love to backpack,
        fish, climb, and play video / board games.
      </p>

      <hr class="hr my-6" />

      <!-- Education -->
      <h2 class="text-2xl font-semibold mb-4 font-mono">Education</h2>
      <p class="text-gray-800 dark:text-gray-300 font-sans leading-relaxed mb-4">
        I received my undergraduate degree in Computer Science from the
        University of Alberta in 2022.
      </p>
      <p class="text-gray-800 dark:text-gray-300 font-sans leading-relaxed mb-4">
        During that time I:
      </p>
      <ul class="list-disc list-inside text-gray-800 dark:text-gray-300 font-sans mb-6 space-y-1">
        <li>
          Helped teach
          <a
            href="https://apps.ualberta.ca/catalogue/course/cmput/333"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary underline hover:text-primary/80 transition-colors"
          >
            CMPUT 333 (Network Security)
          </a>
        </li>
        <li>
          Led a research project to overcome MAC randomization using timing attacks
        </li>
        <li>
          Played for the Golden Bears Volleyball team
        </li>
      </ul>
      <p class="text-gray-800 dark:text-gray-300 font-sans leading-relaxed mb-6">
        I plan on returning to complete my masters at some point, focusing on
        distributed systems and performance analysis.
      </p>

      <hr class="hr my-6" />

      <!-- Interests -->
      <h2 class="text-2xl font-semibold mb-4 font-mono">Interests</h2>
      <ul class="list-disc list-inside text-gray-800 dark:text-gray-300 font-sans mb-6 space-y-1">
        <li>Distributed Systems</li>
        <li>System Performance</li>
        <li>System Security</li>
        <li>Rust & Wasm</li>
      </ul>

      <hr class="hr my-6" />

      <!-- Current Tinkers -->
      <h2 class="text-2xl font-semibold mb-4 font-mono">Current Tinkerings</h2>
      <p class="text-gray-800 dark:text-gray-300 font-sans leading-relaxed mb-4">
        Some things I am currently playing around with, which may or may not end
        up as full-fledged projects:
      </p>
      <ul class="list-disc list-inside text-gray-800 dark:text-gray-300 font-sans mb-6 space-y-1">
        <li>Implementing concurrent objects in Rust</li>
        <li>Building a fast and simple Ansible-like tool from scratch</li>
        <li>Building a tool that helps test Arch Linux packages using Docker</li>
        <li>An article on clock synchronization</li>
      </ul>
    </section>
  </main>
</div>

