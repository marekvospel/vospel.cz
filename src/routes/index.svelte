<script>
  import { scrollto } from 'svelte-scrollto'
  import { skills } from '../stores/skills'
</script>

<main class="container w-auto mx-auto">
  <div class="flex flex-row justify-center items-center gap-16 min-h-[65vh] py-4 lg:min-h-[85vh]" id="home" >
    <div class="my-my-32 w-8/12 md:pr-32 lg:pr-64">
      <p class="text-4xl text-right">
        Hey, my name is <span class="text-cyan-300 font-extrabold">Marek Vospěl</span>
      </p>
      <button class="mt-4 py-2 px-4 rounded-lg float-right text-sm uppercase bg-cyan-500 hover:bg-cyan-300 transition-colors duration-300" use:scrollto={'#about'}>About me</button>
    </div>
    <img class="w-4/12 max-h-screen hidden md:block" src="/icons/vospelnb.png" alt="Marek Vospěl" />
  </div>
  <div class="flex py-4 pb-32" id="about">
    <div class="mx-4 w-full">
      <p class="text-xl">I'm a front-end developer & Cyber Security student from Czech Republic</p>
      <div class="my-8 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {#each $skills as skill}
        <div class="flex flex-row justify-between w-full bg-cyan-600 relative">
          <p class="px-2 py-1 z-20 font-semibold">{ skill.name }</p>
          <p class="px-2 py-1 z-20 font-semibold">{ skill.value }%</p>
          <div class="absolute top-0 left-0 z-10 h-full bg-cyan-500" style="width: { skill.value }%;"></div>
        </div>
        {/each}
      </div>
    </div>
  </div>
</main>
