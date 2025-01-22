<script lang="ts">
  import VButton from '$lib/components/common/VButton.svelte'
  import { t } from 'svelte-i18n'
</script>

<header class="flex flex-col pt-2 lg:pt-4 pr-4 lg:pr-8">
  <div class="flex flex-row gap-2 items-center flex-wrap links ml-auto grow-0">
    <VButton color="green" href="https://github.com/marekvospel" rel="me noreferrer noopener" target="_blank">
      <span class="inline-block i-cib:github"></span>
      <span class="hidden lg:inline">{ $t('vospel.links.github') }</span>
    </VButton>
    <VButton href="https://matrix.to/#/@marek:vospel.cz" rel="me noreferrer noopener" target="_blank">
      <span class="inline-block i-cib:matrix"></span>
      <span class="hidden lg:inline">{ $t('vospel.links.matrix') }</span>
    </VButton>
    <VButton color="violet" href="https://cyberplace.social/@vospel" rel="me noreferrer noopener" target="_blank">
      <span class="inline-block i-cib:mastodon"></span>
      <span class="hidden lg:inline">{ $t('vospel.links.mastodon') }</span>
    </VButton>
    <VButton color="blue" href="https://www.linkedin.com/in/marek-vosp%C4%9Bl-9719b2290/" rel="me noreferrer noopener" target="_blank">
      <span class="inline-block i-cib:linkedin"></span>
      <span class="hidden lg:inline">{ $t('vospel.links.linkedin') }</span>
    </VButton>
    <VButton href="https://blog.vospel.cz" rel="">
      <span class="inline-block i-bx:book"></span>
      <span class="hidden lg:inline">{ $t('vospel.links.blog') }</span>
    </VButton>
  </div>
</header>

<style>
.links {
  animation: float-right 1.5s ease-in-out;
}

@keyframes float-right {
  0% {
    @apply pr-[10%] opacity-0;
  }
  50% {
    @apply pr-[10%] opacity-0;
  }
  100% {
    @apply pr-0 opacity-100;
  }
}

</style>
