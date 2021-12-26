<script>
  import { scrollto } from 'svelte-scrollto'
</script>

<div
  class="container py-2 w-auto mx-auto flex flex-row justify-end gap-6 hidden md:flex"
>
  <a
    href="/"
    class="uppercase text-cyan-500 cursor-pointer hover:text-cyan-300 transition-colors duration-300"
    use:scrollto={'#home'}
  >
    Home
  </a>
  <a
    href="/"
    class="uppercase text-cyan-500 cursor-pointer hover:text-cyan-300 transition-colors duration-300"
    use:scrollto={'#about'}
  >
    About
  </a>
</div>
