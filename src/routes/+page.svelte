<script lang="ts">
  import MdiGithub from '~icons/mdi/github'
  import TwemojiManClimbing from '~icons/twemoji/man-climbing'
  import TwemojiManBiking from '~icons/twemoji/man-biking'
  import TwemojiSkier from '~icons/twemoji/skier'
  import NavBar from '$lib/NavBar.svelte'
</script>

<NavBar />
<div
  id="content" class="
    max-w-[70ch] m-auto
    flex flex-col gap-2
    py-16 lg:pt-32
    text-lg
  "
>
  <h1 class="text-cyan-400 text-3xl font-semibold">Marek Vospěl</h1>
  <p>Hey my name is Marek and I'm a full stack developer and cybersecurity student working at
    <a href="https://haxagon.cz" target="_blank" rel="noopener noreferrer" class="text-cyan-400 hover:text-cyan-200 transition-color duration-300">Haxagon</a>
  </p>
  <div class="h-4"/>
  <p>I'm a big fan of opensource software and I try to make my projects opensource whenever possible. See my
    <a
      href="https://github.com/marekvospel" target="_blank" rel="noopener noreferrer"
      class="
        inline-flex flex-row items-center gap-1
        text-cyan-400 hover:text-cyan-200 transition-color duration-300
      "
    >
      <MdiGithub class="text-sm"/> github
    </a>
  </p>
  <p>In my free time I do sports climbing <span class="inline-flex flex items-center"><TwemojiManClimbing /></span>, biking <span class="inline-flex flex items-center"><TwemojiManBiking /></span> and skiing <span class="inline-flex flex items-center"><TwemojiSkier /></span></p>
  <div class="h-4" />
  <p>I'm writing my own blog about cybersecurity.</p>
  <a href="https://blog.vospel.cz">
    <button type="button" class="px-4 py-1 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-color duration-300">Read</button>
  </a>
</div>
