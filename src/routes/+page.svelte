<script lang="ts">
  import { t } from 'svelte-i18n'
  import VButton from '../lib/components/VButton.svelte'
	import VContainer from '$lib/components/VContainer.svelte'
	import VTag from '$lib/components/VTag.svelte';
	import ProjectTree from '$lib/components/ProjectTree.svelte';

</script>

<VContainer>

  <div class="flex flex-col pl-12 py-8 lg:py-16">
    <h1 class="relative flex items-center text-3xl">
      <span class="i-bx:info-circle inline-block text-cyan absolute right-[calc(100%+0.25em)]"></span>
      <span>Marek Vospěl</span>
    </h1>
    <p class="max-w-[70ch] my-1.5">
      <span>{ $t('vospel.introduction.paragraph1.1') }</span>
      <a href="https://fit.cvut.cz/en" target="_blank" rel="noopener noreferrer">
        <VTag><span class="inline-block i-custom:cvut h-[1em] w-[1em]"></span><span class="mt-0.3">FIT-CTU</span></VTag>
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

  <div class="flex flex-row gap-2 items-center flex-wrap pt-4 lg:pt-8 links">
    <VButton color="green" href="https://github.com/marekvospel" rel="me noreferrer noopener" target="_blank">
      <span class="inline-block i-cib:github"></span>
      <span>{ $t('vospel.links.github') }</span>
    </VButton>
    <VButton href="https://matrix.to/#/@marek:vospel.cz" rel="me noreferrer noopener" target="_blank">
      <span class="inline-block i-cib:matrix"></span>
      <span>{ $t('vospel.links.matrix') }</span>
    </VButton>
    <VButton color="violet" href="https://cyberplace.social/@vospel" rel="me noreferrer noopener" target="_blank">
      <span class="inline-block i-cib:mastodon"></span>
      <span>{ $t('vospel.links.mastodon') }</span>
    </VButton>
    <VButton color="blue" href="https://www.linkedin.com/in/marek-vosp%C4%9Bl-9719b2290/" rel="me noreferrer noopener" target="_blank">
      <span class="inline-block i-cib:linkedin"></span>
      <span>{ $t('vospel.links.linkedin') }</span>
    </VButton>
    <VButton href="https://blog.vospel.cz" rel="">
      <span>{ $t('vospel.links.blog') }</span>
    </VButton>
  </div>

  <div class="pt-8 lg:pt-16">
    <ProjectTree></ProjectTree>
  </div>
  
</VContainer>

<style lang="postcss">

.links {
  animation: float-right 1.5s ease-in-out;
}

@keyframes float-right {
  0% {
    @apply pl-[10%] opacity-0;
  }
  50% {
    @apply pl-[10%] opacity-0;
  }
  100% {
    @apply pl-0 opacity-100;
  }
}

</style>

