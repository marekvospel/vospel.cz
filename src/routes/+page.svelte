<script lang="ts">
  import { _ } from 'svelte-i18n'
  import VButton from '../lib/components/VButton.svelte'
	import VContainer from '$lib/components/VContainer.svelte'
	import VTag from '$lib/components/VTag.svelte';

</script>

<VContainer>  

  <div class="flex flex-col pl-12 pt-8 lg:pt-16">
    <h1 class="relative flex items-center text-3xl">
      <span class="i-bx:info-circle inline-block text-cyan absolute right-[calc(100%+0.25em)]"></span>
      <span>Marek Vospěl</span>
    </h1>
    <p class="max-w-[70ch] my-1.5">
      Hey, my name is Marek Vospěl and I'm a full-stack developer and student
      at <a href="https://fit.cvut.cz/en" target="_blank" rel="noopener noreferrer">
        <VTag><span class="inline-block i-custom:cvut h-[1em] w-[1em]"></span><span class="mt-0.3">FIT-CTU</span></VTag>
      </a>,
      passionate about writing secure and clean code. While I'm fast to adapt
      to any development environment, I especially enjoy low level development
      and learning about how both computers and programming languages work.
    </p>

    <p class="max-w-[70ch] my-1.5">
      My computer science journey began with scratch apps at the age of 10,
      after learning javascript I went to high school teaching cybersecurity,
      where I attended many CTF competitions. (17. place in national CSC, 33rd team in DarkCon CTF)
      Being a big opensource fan I use linux for work and try to contribute
      to every project I can get my hands on.
    </p>
    <p class="max-w-[70ch] my-1.5">
      Beyond computers I love to do sports like climbing, swimming, biking,
      snowboard and skiing and I'm trying to learn 日本語 (Japanese).
    </p>

  </div>

  <div class="flex flex-row gap-2 items-center flex-wrap">
    <a href="https://github.com/marekvospel" target="_blank" rel="noreferrer noopener me">
      <VButton>
        <span class="inline-block i-cib:github"></span>
        <span>Github</span>
      </VButton>
    </a>
    <a href="https://matrix.to/#marek:vospel.cz" target="_blank" rel="noreferrer noopener me">
      <VButton>
        <span class="inline-block i-cib:matrix"></span>
        <span>Matrix</span>
      </VButton>
    </a>
    <a href="https://cyberplace.social/@vospel" target="_blank" rel="noreferrer noopener me">
      <VButton>
        <span class="inline-block i-cib:mastodon"></span>
        <span>Mastodon</span>
      </VButton>
    </a>
    <a href="https://blog.vospel.cz" target="_blank" rel="noreferrer noopener me">
      <VButton>
        <span>Blog</span>
      </VButton>
    </a>
  </div>

  
</VContainer>

