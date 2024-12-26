<script lang="ts">
  const { children } = $props()
</script>

<div class="v-container">
  {@render children?.()}
</div>

<style lang="postcss">

.v-container {
  @apply w-full h-full px-4 py-2 mx-auto;
  @apply sm:max-w-[540px] md:max-w-[650px];
  @apply lg:(max-w-[900px] px-8 py-4);
  @apply xl:max-w-[1080px] 2xl:max-w-[1400px];
}

</style>
