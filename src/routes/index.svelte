<script>
  import { fillheight, scrolltoanchor, send, receive } from "$actions";
  let path;
  let windowheight;
</script>

<svelte:window bind:innerHeight={windowheight} />

<main use:scrolltoanchor on:path={(e) => (path = e.detail)}>
  <a id="#main" class="flex items-center justify-center" use:fillheight>
    <div class="h-1/3 w-1/3">
      <h1 class="text-primary text-3xl mb-12">Unleash your value</h1>
      <div class="rounded-full" />
      <p>
        Rethinking brands worth via an hyperconnected market that boost your
        money
      </p>
    </div>
    <div class="absolute text-center bottom-0 w-full p-8">
      <div on:click={(e) => console.log("down")} />
      Down
    </div>
  </a>

  <a id="#brand" class="flex items-center" style={`height: ${windowheight}px`}>
    {#if path == "#brand"}
      <ul
        class="h-1/3 w-1/3 p-4"
        in:receive={{ key: "menu" }}
        out:send={{ key: "menu" }}
      >
        <li class="text-primary text-xl">Rethinking brands worth</li>
        <li>Hyperconnected market</li>
        <li>Boost your money</li>
      </ul>
    {/if}
    <div
      class="border-primary flex flex-col justify-between rounded-lg border-2 h-2/3 w-1/2 p-12"
    >
      <h1 class="text-2xl">Drive your brand</h1>
      <div>
        <p>Your customer decide what your brand is worth</p>
        <br />
        <p>You decide how your brand is perceived on the market</p>
        <br />
        <p>
          Your coins can be traded on a public decentralized platform with any
          other brand or currencies
        </p>
        <br />
        <p>
          Increase or decrease the coins quantity relative to the market demand
        </p>
        <br />
        <p>Reward your customer with coins</p>
        <br />
      </div>
      <div />
    </div>
  </a>

  <a
    id="#connected"
    class="flex items-center"
    style={`height: ${windowheight}px`}>
    {#if path == "#connected"}
      <ul
        class="h-1/3 w-1/3 p-4"
        in:receive={{ key: "menu" }}
        out:send={{ key: "menu" }}
      >
        <li>Rethinking brands worth</li>
        <li class="text-primary text-xl">Hyperconnected market</li>
        <li>Boost your money</li>
      </ul>
    {/if}
    <div
      class="border-primary flex flex-col justify-between rounded-lg border-2 h-2/3 w-1/2 p-12"
    >
      <h1 class="text-2xl">You are not alone</h1>
      <div>
        <p>Freely trade your coin</p>
        <br />
        <p>Transform your ZARA point to P&B at payment time</p>
        <br />
        <p>Receive rewards from merchant, right in your pocket</p>
        <br />
        <p />
        <br />
        <p>
          Manage your savings, debt, and trading strategies like never before
        </p>
        <br />
        <p />
      </div>
      <div />
    </div>
  </a>

  <a id="#boost" class="flex items-center" style={`height: ${windowheight}px`}>
    {#if path == "#boost"}
      <ul
        class="h-1/3 w-1/3 p-4"
        in:receive={{ key: "menu" }}
        out:send={{ key: "menu" }}
      >
        <li><a href="#brand">Rethinking brands worth</a></li>
        <li>Hyperconnected market</li>
        <li class="text-primary text-xl">Boost your money</li>
      </ul>
    {/if}
    <div
      class="border-primary flex flex-col justify-between rounded-lg border-2 h-2/3 w-1/2 p-12"
    >
      <h1 class="text-2xl">Money never sleep</h1>
      <div>
        <p>
          Manage your savings, debt, and trading strategies like never before
        </p>
        <br />
        <p>
          No matter your account (payment, savings), your coins work at the best
          yields until you use them for payment
        </p>
        <br />
        <p>
          Believe in a company? Hold their coin and use them for payment,
          anywhere
        </p>
        <br />
        <p />
      </div>
      <div />
    </div>
  </a>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
</style>
