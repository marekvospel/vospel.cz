<script>
  import Navbar from '../components/Navbar.svelte'
</script>

<div class="min-h-screen min-w-screen text-white">
  <Navbar />
  <slot />
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  :global(body) {
    @apply bg-gray-900;
  }

  :global(.icon) :global(.primary) {
    color: #dddddd;
  }

  :global(.icon) :global(.secondary) {
    color: #ffffff;
  }
</style>
