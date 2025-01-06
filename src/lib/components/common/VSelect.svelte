<script lang="ts">
  interface SelectOption {
    value: string | undefined
    title: string
  }

  interface Props {
    value?: string
    deselectTitle?: string
    options?: SelectOption[]
    optionSnippet?: (option: SelectOption, open: (val: string | undefined) => void) => any
    children?: () => any
  }

  let {
    value = $bindable(),
    deselectTitle,
    options = [],
    optionSnippet,
    children,
  }: Props = $props()

  let open = $state(false)

  function select(val: string | undefined) {
    value = val
    open = false
  }
</script>

<div class="relative min-w-30">
  <button onclick={() => open = !open} class="inline-flex flex-row gap-2 items-center w-full" type="button">
    {@render children?.()}
    <span class="ml-auto inline-block i-bxs:chevron-down"></span>
  </button>

  {#if open}
    <div class="absolute top-full right-0 flex flex-col">
      {#if deselectTitle}
        {#if optionSnippet}
          {@render optionSnippet({ title: deselectTitle, value: undefined }, select)}
        {:else}
          <button onclick={() => select(undefined)} type="button" class="w-full text-left">{ deselectTitle }</button>
        {/if}
      {/if}
      {#each options as option}
        {#if optionSnippet}
          {@render optionSnippet({ title: option.title, value: option.value }, select)}
        {:else}
          <button onclick={() => select(option.value)} type="button" class="w-full text-left">{ option.title }</button>
        {/if}
      {/each}
    </div>
  {/if}
</div>
