<script>
    import { scrollto } from 'svelte-scrollto'
</script>

<main class="container w-auto mx-auto">
    <div class="home flex flex-row justify-center items-center gap-16 min-h-[65vh] py-4 lg:min-h-[85vh]">
        <div class="my-my-32 w-8/12 md:pr-32 lg:pr-64">
            <p class="text-4xl text-right">Hey, my name is <span class="font-extrabold">Marek Vospěl</span></p>
            <button class="mt-4 py-2 px-4 rounded-lg float-right text-sm uppercase bg-cyan-600 hover:bg-cyan-400 transition-colors duration-300" use:scrollto={'.about'}>About me</button>
        </div>
        <img class="w-4/12 max-h-screen hidden md:block" src="/vospelnb.png" alt="">
    </div>
    <div class="about flex min-h-[85vh] py-4">
        <div class="mx-4">
            <p class="text-xl">I'm a frontend developer & cyber security student.</p>
        </div>
    </div>
</main>
