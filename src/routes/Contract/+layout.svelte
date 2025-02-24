<script>
    import { base } from '$app/paths';
	import {cart_store} from "$lib/contract";
    
    import { onMount } from 'svelte';
    
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($cart_store.length > 2){
            cart = JSON.parse($cart_store);
        }
    });
	
	let cart = []

	function ShowCart() {
	if(cart[0] == "none") {
			cart = ["flex"];
			console.log(cart)
			$cart_store = JSON.stringify(cart);
	} else if( cart[0] == "flex"){
		cart = ["none"];
		console.log(cart)
		$cart_store = JSON.stringify(cart);
	}
		
	}
</script>



<main>
	<div class="background_cover">
        <nav class="navbar">
            <div class="link_container">
                <div class="link"><a class="Home" href="{base}/">⌂</a></div>
                <div class="link"><div><strong>Pinnacle</strong> - "För de finaste pinnarna på marknaden."</div></div>
                <!-- svelte-ignore a11y-invalid-attribute -->
                <div class="shoppingcart" style="float:right"><button on:click|preventDefault={() => ShowCart()}>🛒</button></div>
            </div>	
        </nav>
    </div>
	<slot />
</main>



<style>
    main {
        background-image: url("https://www.walloro.com/cdn/shop/files/vintage-trees-scenic-wall-mural-light-beige-nature-theme-wallpaper-oversized-landscape-scene-custom-size-wall-art-non-woven-non-pasted-removable-walloro-high-end-wallcoverings-and-more-1.jpg?v=1725005459");

        top: 8.6vh;
        display:flex;
		position: fixed;

        background-size: cover;
        width: 100%;
        height: 100%;
        
        min-width: 100%;
        min-height: 700px;

        
        align-content: center;
        justify-content: center;
		
    }

    /*Sets the color, size and position of the navigation bar*/
	nav{
		display: block;
		background-color: #146614;
		width: 100%;
		max-width: 100%;
		height: 70px;
		align-content: center;
		position: fixed;
		top: 0;

		border-bottom: 3px solid #80461B;
	}



	/*Holds The Nav links and specifies thier position*/
	.link_container{
		display: block;
		position: fixed;
		top: 15px;
		width: 100vw;
        height: 6.5vh;
		align-content: center;
	}

    .link {
		float:inline-start;
	}
	.link a{
		color: whitesmoke;
		text-align: center;
		padding: 15px 25px;
		font-size: 40px;
		text-decoration: none;
		
		border-right:3px #80461B;
		border-style: solid;
	}
    .link div{
		position: fixed;
        color: white;
		text-align: center;
		padding: 20px 16px;
		font-size: 20px;
        margin-top: -13px;
		text-decoration: none;
		border-style: solid;
	}
    .shoppingcart button{
        color: #000000;
		text-align: center;
		padding: 15px 25px;
		font-size: 40px;
		margin-top: -17px;
		height: 70px;
		text-decoration: none;
		
		border-left:3px #80461B;
		border-style: solid;
    }

    .background_cover{
		position: fixed;
		z-index: -1;
        width: 100vw;
        height: 100vh;
        background-color: #7b5537ce;
    }
  
	@media screen and (min-height: 400px){
		.link div{
			font-size: 16px;
		}

		.link a{
			font-size: 30px;
		}
	}

</style>
