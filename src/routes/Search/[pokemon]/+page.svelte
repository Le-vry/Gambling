
<script>
    /** @type {import('./$types').PageData} */
    export let data;
    
</script>

<main>
  {#await data}
    <p>.. waiting</p>
  {:then pokemon} 
  
  <article>
    <h1>{pokemon.response.name}</h1>
    
    <div class="sprites">
      {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <!-- svelte-ignore a11y-missing-attribute -->
      <img src={sprites[1]} />
      {/if}
      {/each} 
    </div>
    
    <div class="types">
      {#each Object.entries(pokemon.response.types) as types}
      <p>{types[1].type.name}</p>
      {/each}
    </div>
    
  
    <div class="moves">
    {#each Object.entries(pokemon.response.moves) as moves}
    <p>{moves[1].move.name}</p>
    
    {/each}
    </div>
  </article>
  
  <section>
</section>

  {/await} 

</main>

<style>
  main{
    display:flex;
    border-radius: 30px;
    border: solid 3px black;
    width:100%;
    height: 100%;
    background-color: #a30075e1;
    justify-content: center;
    align-items: center;
    
    overflow-x: hidden;
    overflow-y: scroll;
  }
  
  article{
    display:flex;
    width:100%;
    height:100%;
    margin-top: 10vh;
    margin-bottom: 10vh;
    gap: 1.5em;

    align-items: center;
    flex-direction: column;
  }

  .sprites{
    display: flex;
    

  }

  .moves{
    display:flex;
    width: 80%;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .moves p{
    margin: 7px;
  }

  h1{
    margin-top: 5vh;
  }
</style>
    