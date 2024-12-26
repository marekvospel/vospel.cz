<script lang="ts">

  let { children, color = 'cyan' } = $props()

</script>

<button color="{color}">
  {@render children?.() }
</button>

<style lang="postcss">

button {
  @apply flex flex-row gap-2 items-center;
  @apply px-4 py-2 rounded-lg border;
  @apply text-white/65;
  @apply transition-colors duration-300;
  @apply outline-none;
}

button:focus-visible,
button:hover {
    @apply border-opacity-70 bg-opacity-15;
}

[color="cyan"] {
  @apply border-white bg-cyan;
  @apply border-opacity-10 bg-opacity-0;
}

[color="cyan"]:focus-visible,
[color="cyan"]:hover {
  @apply border-cyan text-cyan;
}

[color="red"] {
  @apply border-white bg-red-500;
  @apply border-opacity-10 bg-opacity-0;
}

[color="red"]:focus-visible,
[color="red"]:hover {
  @apply border-red-500 text-red-500;
}
</style>
