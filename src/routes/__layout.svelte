<script lang="ts">
  import "src/app.css";
  import { fly } from "svelte/transition";

  let side = false;
</script>

<svelte:head>
  <title>five</title>
</svelte:head>
<div class="fixed w-full h-1/2 bg-gradient-to-b from-beige to-white z-0" />

<div class="fixed w-full top-0">
  <div
    class="flex justify-between mx-auto p-8 max-w-7xl font-bold items-center"
  >
    <div class="flex text-2xl items-center font-extrabold">
      <div class="five-icon" />
      <strong class="text-3xl">five</strong>
    </div>
    <div class="flex space-x-2 items-center justify-around w-1/3 sm:hidden">
      <button class="px-8 py-2">How it works</button>
      <button class="bg-primary text-white px-8 py-2 rounded-md"
        >Launch app</button
      >
    </div>
    <span class="hidden sm:block">
      <i
        class="fas fa-bars text-2xl cursor-pointer"
        on:click={(_) => (side = true)}
      />
    </span>
  </div>
</div>

{#if side}
  <div class="fixed w-full h-full z-20" on:click={(_) => (side = false)}>
    <div
      class="w-4/5 h-full bg-white pt-20 text-right font-bold"
      on:click={(_) => (side = true)}
      transition:fly={{ x: -500 }}
    >
      <a
        class="p-8 flex items-center space-x-4 justify-end"
        href="/"
        transition:fly={{ x: -500, duration: 500 }}
        ><span>How it works </span><i class="fas fa-cogs text-xl" /></a
      >
      <a
        class="p-8 flex items-center space-x-4 justify-end"
        href="/"
        transition:fly={{ x: -1000, duration: 500 }}
        ><span>Launch app </span><i class="fas fa-rocket text-xl" /></a
      >
      <a
        class="p-8 flex items-center space-x-4 justify-end"
        href="/"
        transition:fly={{ x: -1500, duration: 500 }}
        ><span>Create your token </span><i class="fas fa-coins text-xl" /></a
      >
    </div>
  </div>
{/if}

<div
  class="h-screen max-w-7xl mx-auto flex items-center justify-center body-content"
>
  <slot />
</div>

<footer class="w-full p-8">
  <div class="flex justify-start max-w-7xl mx-auto">
    <span
      class="p-4 px-8 flex items-center space-x-4 text-2xl"
      style="background-color: whitesmoke;"
    >
      <i class="fab fa-github" />
      <i class="fab fa-medium-m" />
      <i class="fab fa-twitter" />
      <i class="fab fa-discord" />
      <i class="fab fa-telegram-plane" />
      <i class="fab fa-reddit-alien" />
    </span>
  </div>
</footer>

<style>
  .five-icon {
    background-image: url("/favicon.svg");
    background-repeat: no-repeat;
    background-size: contain;
    height: 3rem;
    width: 3rem;
  }

  .body-content {
    height: calc(100vh - 7rem);
  }
</style>
