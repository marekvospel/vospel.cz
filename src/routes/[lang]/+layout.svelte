<script lang="ts">
  import { locale } from 'svelte-i18n'
  import { afterNavigate } from "$app/navigation"

  const { data, children } = $props()

  afterNavigate(() => {
    locale.set(data.lang)
  })
</script>

{@render children() }
