<script lang="ts">
  let { children } = $props()
</script>

<span class="bg-white/25 px-0.5 py-0.1 rounded inline-flex gap-1 items-center">
  {@render children?.()}
</span>
