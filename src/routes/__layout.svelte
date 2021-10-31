<script>
    import Navbar from "../components/Navbar.svelte"
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<div class="bg-gray-800 min-h-screen min-w-screen text-white">
    <Navbar />
    <slot />
</div>
