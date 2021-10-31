<script>
    import { scrollto } from 'svelte-scrollto'
</script>

<div class="container w-auto mx-auto flex flex-row gap-6 py-2 hidden md:flex">
    <p class="uppercase text-cyan-600 cursor-pointer hover:text-cyan-300 transition-colors duration-300" use:scrollto={'.home'}>Home</p>
    <p class="uppercase text-cyan-600 cursor-pointer hover:text-cyan-300 transition-colors duration-300" use:scrollto={'.about'}>About</p>
</div>
