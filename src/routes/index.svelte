<script>
  import { fillheight, scrolltoanchor, send, receive } from "src/actions";
  let path;
  let windowheight;
</script>

<div class="flex justify-between mx-auto p-8 max-w-7xl font-bold">
  <div class="flex text-2xl items-center">
    <div class="five-icon" />
    Five
  </div>
  <div class="flex space-x-2 items-center justify-around w-1/3">
    <button class="px-8 py-2">How it works</button>
    <button class="bg-primary text-white px-8 py-2 rounded-md"
      >Launch app</button
    >
  </div>
</div>

<segment class="flex max-w-7xl mx-auto mt-28 px-8 relative">
  <div class="w-2/5 font-bold" style="height: 50vh;">
    <h1 class="text-5xl py-4">Crypto loyalty point for your e-shop</h1>
    <h3 class="font-extralight text-2xl">
      The new crypto loyalty point marketplace built on the Web 3.0
    </h3>
    <button class="bg-primary text-white py-2 px-4 rounded-md mt-28 font-bold">
      Create your crypto
    </button>
  </div>
  <div class="background-image absolute" />
</segment>

<footer class="fixed bottom-0 w-full">
  <div class="fle h-10">
    <i class="fab fa-github " />
    <i />
    <i />
  </div>
</footer>

<style>
  .five-icon {
    background-image: url("/favicon.svg");
    background-repeat: no-repeat;
    background-size: contain;
    height: 4rem;
    width: 4rem;
  }
  .background-image {
    background-image: url("/background.svg");
    background-repeat: no-repeat;
    background-size: contain;
    left: 35%;
    top: -13vh;
    height: 80vh;
    width: 60vw;
  }
</style>
