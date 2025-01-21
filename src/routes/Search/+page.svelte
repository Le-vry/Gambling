<script>
    import{goto} from "$app/navigation"
    import {history_store} from "$lib/search";
    import { onMount } from 'svelte';
    
    

    onMount(() => {
        /*Check if has more then 2 characters*/
        if($history_store.length > 1){
            history = JSON.parse($history_store);
        }
    });


    let history = [];
    let search
    let image = "Pokemonlogo.png"

    function handlesubmit(a){
        let b
        b = a.toLowerCase()
        if(history.length < 5){
            history.unshift(b)

        } else{
            history.pop()
            history = history
            history.unshift(b)
        }


        history = history
        $history_store = JSON.stringify(history)
        console.log(history)

        goto(base + '/Search/'+ b)
    }
    

</script>



<main>
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src="{image}">
    <form on:submit|preventDefault={handlesubmit(search)}>
        <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
    </form>
                   
</main>



<style>
    

    main{
        display:flex;
        border-radius: 30px;
        border: solid 3px black;
        width:100%;
        height: 100%;
        background-color: #a30075e1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    form{
        display:flex;

        background-color: #e900af;
        width: 40vw;
        height: 7vh;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        border-radius: 50ch;
        margin: 7vh;

    }
    input{
        border-radius: 50ch;
        height: 80%;
        width: 97%;
        margin: 5px;
        margin-left: 8px;
        color:black;
    }

    img{
        width: 30%;

    }

</style>