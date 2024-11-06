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
	


</script>



<!-- Main HTML structure-->
<main>
	<nav class="navbar">
		<div class="link_container">
			<div class="link"><a class="Home" href="{base}/"> Home </a></div>
			<div class="link"><a class="Photos" href="{base}/Photoapp"> Photo App </a></div>
			<div class="link"><a class="Register" href="{base}/Register"> Register </a></div>
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
		

	}



	/*Holds The Nav links and specifies thier position*/
	.link_container{
		display: block;
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
	}



	/*Change color of specific Nav links when mouse hovers above them*/
	.Home:hover{
		background-color: #0A5D00;
	}
	.Photos:hover{
		background-color: #400040;
	}
	.Register:hover{
		background-color: #400000;
	}



	/*Change color of specific Nav links when clicked*/
	.Home:active{
		background-color: #089000;
	}
	.Photos:active{
		background-color: #600060;
	}
	.Register:active{
		background-color: #800000;
	}
</style>
<slot />
