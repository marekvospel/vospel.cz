<script lang="ts">

  let { children } = $props()

</script>

<div class="mt-8 p-4 rounded-lg border-1 border-gray-600 bg-gray-900 h-full min-h-50 terminal leading-5">
  {@render children?.()}
</div>

<style lang="postcss">

.terminal :global(.cursor::before) {
  @apply content-['_'] bg-white;
  animation: blink 1s infinite;
}

@keyframes blink {

  0%, 49%, 100% {
    opacity: 1;
  }

  50%, 99% {
    opacity: 0;
  }

}

</style>
