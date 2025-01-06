<script lang="ts">
  import { t } from 'svelte-i18n'
  import VHeader from '$lib/components/VHeader.svelte'
	import VContainer from '$lib/components/VContainer.svelte'
	import VTag from '$lib/components/VTag.svelte'
	import ProjectTree from '$lib/components/ProjectTree.svelte'
	import TerminalWindow from '$lib/components/backdrops/TerminalWindow.svelte'

</script>

<VHeader></VHeader>
<VContainer>

  <section class="hero relative">
    <div class="absolute left-0 right-0 top-0 overflow-hidden opacity-40 -z-10 min-h-full pointer-events-none">
      <div class="absolute inset-0 -z-10 inset-blur"></div>
      <div class="relative -z-20 left-[50%] top-30">
        <TerminalWindow>
          <pre><span class="text-green-400 font-bold">➜ </span><span class="text-green-400">pwd</span></pre>
          <pre>/home/vospel/Documents/vospel.cz</pre>
          <pre><span class="text-green-400 font-bold">➜ </span></pre>
          <br>
          <pre><span class="text-teal">vospel.cz</span> on <span class="text-amber-500"> main</span></pre>
          <pre><span class="text-green-400 font-bold">➜ </span><span class="cursor"></span></pre>
        </TerminalWindow>
      </div>
    </div>


    <div class="flex flex-col pl-12 py-8 lg:py-16">
      <h1 class="relative flex items-center text-3xl">
        <span class="i-bx:info-circle inline-block text-teal absolute right-[calc(100%+0.25em)]"></span>
        <span>Marek Vospěl</span>
      </h1>
      <p class="max-w-[70ch] my-1.5">
        <span>{ $t('vospel.introduction.paragraph1.1') }</span>
        <a href="https://fit.cvut.cz/en" target="_blank" rel="noopener noreferrer">
          <VTag><span class="inline-block i-custom:cvut h-[1em] w-[1em] text-blue-400"></span><span class="mt-0.3">FIT-CTU</span></VTag>
        </a>,
        <span>{ $t('vospel.introduction.paragraph1.2') }</span>
      </p>

      <p class="max-w-[70ch] my-1.5">
        { $t('vospel.introduction.paragraph2') }
      </p>

      <p class="max-w-[70ch] my-1.5">
        { $t('vospel.introduction.paragraph3') }
      </p>

    </div>
  </section> 

  <section>
    <div class="pt-8 lg:pt-16">
      <ProjectTree></ProjectTree>
    </div>
  </section>
  
</VContainer>

<style lang="postcss">

.inset-blur {
  box-shadow: inset 0px 0px 200px 125px theme('colors.gray.950')bf;
}
</style>

