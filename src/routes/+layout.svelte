<script lang="ts">
    import Header from '$lib/components/Header.svelte'
    import '../app.css'
</script>

<Header />

<main>
    <slot />
</main>

<footer class="bg-zinc-700">.</footer>
