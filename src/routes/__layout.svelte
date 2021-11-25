<script>
  import Navbar from '../components/Navbar.svelte'
</script>

<div class="min-h-screen min-w-screen mx-4 sm:mx-8 md:mx-16 text-white">
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
</style>
