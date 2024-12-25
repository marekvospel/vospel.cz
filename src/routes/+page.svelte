<script lang="ts">
  import { _ } from 'svelte-i18n'
  import VButton from '../lib/components/VButton.svelte'
	import VContainer from '$lib/components/VContainer.svelte'

</script>

<VContainer>

  <div class="flex gap-2">
    <VButton>
      Home
    </VButton>
    <VButton color="red">
      Exit
    </VButton>
  </div>

</VContainer>

