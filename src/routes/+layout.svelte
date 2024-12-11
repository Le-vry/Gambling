<!-- JavaScript-->
<script>
	import '../app.postcss';
	import { base } from '$app/paths';
	
	

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);



	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	


	//Navbar color
	



</script>



<!-- Main HTML structure-->
<main>
	<nav class="navbar">
		<div class="link_container">
			<div class="link"><a class="Home" href="{base}/"> Home </a></div>
			<div class="link"><a class="Photos" href="{base}/Photoapp"> Photo App </a></div>
			<div class="link"><a class="Shopping" href="{base}/Shoppinglist"> Shopping List </a></div>
			<div class="link"><a class="Memory" href="{base}/Memory"> Memory </a></div>
			<div class="link"><a class="Chat" href="{base}/Chat"> Chat </a></div>
			<div class="link"><a class="Search" href="{base}/Search"> Search </a></div>
			
			<div class="Register" style="float:right"><a href="{base}/Register"> Sign Up / Log in </a></div>


		</div>	
	</nav>
</main>



<!-- CSS Styling -->
<style>
	/*Makes all backgrounds cover entire window*/
	:global(body), :global(html){
		margin: 0%;
		padding: 0%;
		height: 100vh;
		width: 100vw;
	}    


	
	/*Sets the color, size and position of the navigation bar*/
	nav{
		display: block;
		background-color: #2a2a2a;
		width: 100%;
		max-width: 100%;
		height: 50px;
		align-content: center;
		position: fixed;
		top: 0;

		border-bottom: 2px solid #3d3d3d;
	}



	/*Holds The Nav links and specifies thier position*/
	.link_container{
		display: block;
		position: fixed;
		top: 13px;
		width: 100vw;
		align-content: center;

	}



	/*Sets Basic attributes for all Nav link*/
	.link {
		float:inline-start;
	}
	.link a{
		color: #eeecec;
		text-align: center;
		padding: 15px 16px;
		font-size: 16px;
		text-decoration: none;
		
		border-right:2px #3d3d3d;
		border-style: solid;
	}
	.Register a{
		color: #eeecec;
		
		padding: 8px 10px;
		font-size: 16px;
		text-decoration: none;
		
		margin-right: 20px;

		border-radius: 20px;
		background-color: #3d3d3d;
		
	}



	/*Change color of specific Nav links when mouse hovers above them*/
	.Home:hover{
		background-color: #109d00;
	}
	.Photos:hover{
		background-color: #a100a1;
	}
	.Shopping:hover{
		background-color: #e48900;
	}
	.Memory:hover{
		background-color: #e3c900;
	}
	.Chat:hover{
		background-color: #00c9d7;
	}
	.Search:hover{
		background-color: #FF00AC;
	}
	
	
	
	.Register a:hover{
		background-color: #383838;
	}




	/*Change color of specific Nav links when clicked*/
	.Register a:active{
		background-color: #575757;
	}
</style>
<slot />
