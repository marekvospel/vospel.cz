<script lang="ts">
  interface LinkButton {
    href: string
    target?: string
    rel?: string
  }

  type SharedProps = {
    color?: 'cyan' | 'red' | 'violet' | 'blue' | 'green'
    children?: (...args: any[]) => any
  }

  type Props = SharedProps | (SharedProps & LinkButton)

  let { children, color = 'cyan', ...props }: Props = $props()

  let href = $derived('href' in props ? props.href : undefined)
  let target = $derived('href' in props ? props.target : undefined)
  let rel = $derived('href' in props ? (props.rel ?? 'noreferrer noopener') : undefined)
</script>

{#if href}
  <a class="button color-{color}" {href} {target} {rel}>
    {@render children?.() }
  </a>
{:else}
  <button class="button color-{color}">
    {@render children?.() }
  </button>
{/if}

<style>

.button {
  @apply flex flex-row gap-2 items-center;
  @apply px-4 py-1.75 rounded-lg border;
  @apply text-white/65;
  @apply transition-colors duration-300;
  @apply outline-none;
}

.button:focus-visible,
.button:hover {
    @apply border-opacity-70 bg-opacity-15;
}

.color-cyan {
  @apply border-white bg-teal;
  @apply border-opacity-10 bg-opacity-0;
}

.color-cyan:focus-visible,
.color-cyan:hover {
  @apply border-teal text-teal;
}

.color-red {
  @apply border-white bg-red-500;
  @apply border-opacity-10 bg-opacity-0;
}

.color-red:focus-visible,
.color-red:hover {
  @apply border-red-500 text-red-500;
}

.color-green {
  @apply border-white bg-green-500;
  @apply border-opacity-10 bg-opacity-0;
}

.color-green:focus-visible,
.color-green:hover {
  @apply border-green-500 text-green-500;
}

.color-violet {
  @apply border-white bg-violet-500;
  @apply border-opacity-10 bg-opacity-0;
}

.color-violet:focus-visible,
.color-violet:hover {
  @apply border-violet-500 text-violet-500;
}

.color-blue {
  @apply border-white bg-blue-500;
  @apply border-opacity-10 bg-opacity-0;
}

.color-blue:focus-visible,
.color-blue:hover {
  @apply border-blue-500 text-blue-500;
}
</style>
