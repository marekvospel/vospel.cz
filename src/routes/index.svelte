<script context="module" lang="ts">

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  export async function load({ fetch }) {
    const languages = await fetch('/api/languages')

    return { props: { languages: await languages.json() } }
  }
</script>
<script lang="ts">
  // @ts-ignore
  import { scrollto } from 'svelte-scrollto'

  export let languages = {}
</script>

<main class="container w-auto mx-auto">
  <div
    class="flex flex-row justify-center items-center gap-16 min-h-[65vh] py-4 lg:min-h-[85vh]"
    id="home"
  >
    <div class="my-my-32 w-8/12 md:pr-32 lg:pr-64">
      <p class="text-4xl text-right">
        Hey, my name is
        <span class="text-cyan-300 font-extrabold">Marek Vospěl</span>
      </p>
      <button
        class="mt-4 py-2 px-4 rounded-lg float-right text-sm uppercase bg-cyan-500 hover:bg-cyan-300 transition-colors duration-300"
        use:scrollto={'#about'}>About me</button
      >
    </div>
    <img
      class="w-4/12 h-4/12 hidden md:block"
      src="/icons/{new Date().getMonth() === 11 ? 'vospel-christmas' : 'vospel'}.webp"
      alt="Marek Vospěl"
    />
  </div>
  <div class="flex py-4 pb-32" id="about">
    <div class="mx-4 w-full">
      <p class="text-xl">
        I'm a front-end developer & Cyber Security student from Czech Republic.
      </p>
      <br />
      <p class="text-xl font-bold">My most frequently used languages:</p>
      <div class="my-4 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {#each Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10) as language}
          <div
            class="flex flex-row justify-between w-full bg-cyan-600 relative"
          >
            <p class="px-2 py-1 z-20 font-semibold">
              {language[0]}
            </p>
            <p class="px-2 py-1 z-20 font-semibold">
              {language[1]}%
            </p>
            <div
              class="absolute top-0 left-0 z-10 h-full bg-cyan-500 max-w-full"
              style="width: {language[1]}%;"
            >
              &nbsp;
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</main>
