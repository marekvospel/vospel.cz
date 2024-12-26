<script lang="ts">
  interface Props {
    color?: 'cyan' | 'red' | 'violet' | 'blue' | 'green'
    children?: (...args: any[]) => any
  }

  let { children, color = 'cyan' }: Props = $props()
</script>

<button color="{color}">
  {@render children?.() }
</button>

<style lang="postcss">

button {
  @apply flex flex-row gap-2 items-center;
  @apply px-4 py-1.75 rounded-lg border;
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

[color="green"] {
  @apply border-white bg-green-500;
  @apply border-opacity-10 bg-opacity-0;
}

[color="green"]:focus-visible,
[color="green"]:hover {
  @apply border-green-500 text-green-500;
}

[color="violet"] {
  @apply border-white bg-violet-500;
  @apply border-opacity-10 bg-opacity-0;
}

[color="violet"]:focus-visible,
[color="violet"]:hover {
  @apply border-violet-500 text-violet-500;
}

[color="blue"] {
  @apply border-white bg-blue-500;
  @apply border-opacity-10 bg-opacity-0;
}

[color="blue"]:focus-visible,
[color="blue"]:hover {
  @apply border-blue-500 text-violet-500;
}
</style>
