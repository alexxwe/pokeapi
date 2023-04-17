<script lang="ts">
    import '../app.css'
    import { navigating } from '$app/stores'
</script>

<header>nav</header>

<main class="bg-zinc-900 text-white">
    {#if $navigating}
        {#if $navigating?.to?.url.pathname.includes('pokemons')}
            <div class="flex items-center justify-center">
                <i class="bi bi-arrow-clockwise my-12 animate-spin text-6xl" />
            </div>
            <h1 class="text-center text-2xl">Getting data for: <br /> {$navigating?.to?.url.pathname}</h1>
        {/if}
    {:else}
        <slot />
    {/if}
</main>

<footer>footer</footer>
