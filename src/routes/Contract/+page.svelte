<script>
    import {cart_store} from "$lib/contract";
    import { onMount } from 'svelte';
    
    onMount(() => {
        if($cart_store.length > 1){
            cart = JSON.parse($cart_store);
        }
    });
    
    let images = [{img:"Poseidons trident", price: 1500, finder: "u/Amazing-Law-2802", Country: "Unknown", amount: 1, clicked: false, 
        info:"This stick makes you ruler of the seas!(and horses for some reason), worthy of it's price tag if you ask us!",
        visable: "none", infobutton: "i",}, 
        {img:"Rapier", price: 1000, finder: "u/Straz_Meow", Country: "Unknown", amount: 1, clicked: false,
        info:"This stick makes you feel like a 1600th century noble, and for this noble price that's a steal!",
        visable: "none", infobutton: "i",},
        {img:"Han-Solo Gun", price: 1300, finder: "u/-Koichi-", Country: "Unknown", amount: 1, clicked: false,
        info:"Ever wanted to feel like Han-Solo? Now you can!, and for the low low price of only 1300$ it's a dream come true!",
        visable: "none", infobutton: "i",},
        {img:"Gun", price: 750, finder: "u/dianasaurusrex123", Country: "Unknown", amount: 1, clicked: false,
        info:"Wanna feel like an American for no reason but the law won't allow guns?, With this Gun stick you can do so at no risk of prosecution!",
        visable: "none", infobutton: "i",},
        {img:"Staff", price: 999, finder: "u/Wide-Mycologist2984", Country: "Unknown", amount: 1, clicked: false,
        info:"Do you want to be a Wizard? Like Gandalf the grey? With this premium stick it's totaly doable and cost effective!",
        visable: "none", infobutton: "i",},
        {img:"False Stick", price: 0.5, finder: "u/drichm2599", Country: "Unknown", amount: 1, clicked: false,
        info:"Traitor",
        visable: "none", infobutton: "i",},]
    let cart = ["none"]
    let carts = []
    let show = cart[0]
    



    function Addtocart(a) {
        if(a.clicked == false){
            carts.push(a)
            a.clicked = true
            carts = carts
        } else {
            a.amount += 1
            carts = carts
        }
    }

    function ShowInfo(a){
        if (a.visable == "none"){
            a.visable = "block"
            a.infobutton = "x"
            images = images
        } else {
            a.visable = "none"
            a.infobutton = "i"
            images = images
        }
    }

    $:if($cart_store.length > 1){
            cart = JSON.parse($cart_store);
            show = cart[0]
        }
</script>


<main>
    <div class="container">
        <h1>Premium Sticks</h1>
        <section>
            <div class="holder">
                {#each images as image}
                    <div class="shop_item">
                        <div class="img-holder"><img src="{image.img}.jpg" alt={image.img} style="width"> 
                             <button on:click|preventDefault={() => ShowInfo(image)} style="position:relative; top: -330px; left:5px;">
                                <strong>{image.infobutton}</strong>
                            </button>

                            <div class="info" style="position:relative; top: -300px; left:5px; display:{image.visable};">
                                <p>Name: {image.img}</p>
                                <p>Finder: {image.finder} Location:{image.Country}</p>
                                <p>{image.info}</p>
                            </div>
                        </div>
                        <p><strong>{image.img}</strong></p> 
                        <div class="price" style="display:inline-flex; width: 80%"><p>Price:{image.price}$</p> 
                            <button on:click|preventDefault={() => Addtocart(image)}>Buy</button>
                        </div>

                    </div>
                {/each}
        </section>
        
    </div>
    
</main>
<div class="dropdown-content" style="display:{show}">
    <div class="cart-container">
        {#each carts as item}
            <div class="cart-item"> <img src="{item.img}.jpg" alt="images"> 
                <div class="text-box"><p>{item.img}</p><p>{item.price}$</p></div> <div>{item.amount}</div>
            </div>
        {/each}
    </div>
    
</div>
<style>
    main{
        display:flex;
        background-size: cover;
        width: 100vw;
        height: 100vh;
        min-width: 100%;
        min-height: 700px;
        
        align-content: center;
        justify-content: center;
    }

    .container{
        display: grid;
        grid-template-rows: 1fr 9fr 1fr;
        width: 80vw;
        height: 80vh;
        margin-top: 6vh;
        align-content: center;
        justify-content: center;
        background-color: #146614;
        border-radius: 10px;
    }

    h1 {
        justify-self: center;
        align-self: center;

        background-color: #18530e;
        border-radius: 5px;
        padding: 5px;
    }

    section{
        display: grid;
        background-color: #eeeeee;
        width: 74vw;
        height: 68vh;
        border-radius: 20px;
        align-content: center;
        justify-content: center;
    }
    .holder{
        display: grid;
        margin: 1%;
        grid-template-columns:repeat(3, 1fr);
        grid-template-rows:repeat(2, 1fr);
        grid-gap: 2vh;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .shop_item{
        width: 100%;
        height: 100%;
        color: #000000;
        background-color: #ffffff;
        border-radius: 20px;
        justify-items: center;
    }

    .img-holder{
        width: 80%;
        height: 335px;
        margin-top: 10%;
        border-radius: 5px;
    }
    
    .img-holder img{
        width: 400px;
        height: 100%;
        border-radius: 5px;
    }

    .img-holder button{
        background-color: #ffffff;
        height: 25px;
        width: 25px;
        border-radius: 1em;
        border: #000000 solid 1px;
        text-align: center;
    }

    .info{
        
        background-color: #f9f9f9;
        border:#146614 solid 2px;
        width: 95%;
        padding: 5%;
        border-radius: 15px;
        box-shadow: 0px 8px 16px 0px #00000033;
    }

    .price button{
        margin-left: 10px;
    }

    .dropdown-content {
	display: flex;
    position: absolute;
    flex-direction: column;
    align-items: center;
	right: 10px;
    top: 10px;
	background-color: #f9f9f9;
    border:#146614 solid 2px;
	width: 20vw;
	height: 60vh;
    z-index: 2;
    border-radius: 15px;
	box-shadow: 0px 8px 16px 0px #00000033;

	}

    .cart-container{
        width: 100%;
        margin: 5%;
    }
    .cart-item{
        display: inline-flex;
        align-items: center;
        background-color: #ebebeb;
        width: 100%
    }

    .text-box{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 50%;
        
    }

    .cart-item img{
        width: 70px;
        height: 70px;
        border-radius: 5px;
    }

	.dropdown-content div{
		color:#000000;
		list-style: none;
	}

    @media screen and (min-height: 400px){
        .holder{
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
        }
    }
    
</style>