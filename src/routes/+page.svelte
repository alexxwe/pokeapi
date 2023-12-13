<script lang="ts">
    let showText = false
    let dots = '...'

    function handleClick() {
        showText = true
        setInterval(function () {
            if (dots.length > 3) {
                dots = ''
            }
            var textOverlay = document.getElementById('text-overlay')
            if (textOverlay) {
                textOverlay.innerText = dots
            }
            dots += '.'
        }, 500)
    }
</script>

<div class="container">
    <div class="flex h-screen">
        <div class="relative h-64 w-64">
            <!-- svelte-ignore a11y-missing-content -->
            <a href="/generations/1" aria-label="Pokemon" class="poke-ball blinking absolute top-2/3 left-2/3 h-2/3 w-2/3 rounded-full bg-white" on:click={handleClick} />
            {#if showText}
                <div id="text-overlay" class="text-overlay absolute top-1/2 left-1/2 text-2xl font-bold text-white">
                    {dots}
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .poke-ball {
        background: linear-gradient(to top, white 47.5%, black 47.5%, black 52.5%, #ff1b1b 52.5%);
        transition: all 2s ease;
    }

    .poke-ball::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 28%;
        height: 28%;
        background-color: white;
        border: 8px solid black;
        border-radius: 50%;
    }

    .poke-ball.blinking {
        transform-origin: bottom center;
        animation: shake 1.6s ease infinite;
    }

    @keyframes shake {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(16deg);
        }
        65% {
            transform: rotate(-16deg);
        }
        90% {
            transform: rotate(0deg);
        }
    }
</style>
