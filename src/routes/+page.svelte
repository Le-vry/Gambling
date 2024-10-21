

<!--Delar upp sidan i två delar-->

<script>
	let namn = "Elliot"
	let Efternamn = "Lidman"
</script>

<main>
	<div>
  
	  <h1 class="name"> {namn} {Efternamn} </h1>
	  <h2>Här har jag samlat min uppgifter jag gjort i samband med webbutveckling i årskurs 2 på Maja Beskowgymnasiet!</h2>
	  <h3>Inspirerade citat för min webbutvecklingsresa:</h3>
	  <!--Under denna kommer vi lägga till fler element-->
	  <p id="inspo">
		"The only way to learn a new programming language is by writing programs in it." - <strong>Dennis Ritchie</strong>, creator of the C programming language.
	  </p>

	</div>
	  <!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling--> 
	

  
	

  
  </main>
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,0L30,26.7C60,53,120,107,180,133.3C240,160,300,160,360,133.3C420,107,480,53,540,69.3C600,85,660,171,720,208C780,245,840,235,900,213.3C960,192,1020,160,1080,149.3C1140,139,1200,149,1260,149.3C1320,149,1380,139,1410,133.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>


  <style>
	main{
	  /*Styling för att dela upp sidan i två delar. */
	  /*Vi kommer gå igenom detta i detalj senare*/
	  margin: auto;
	  width: 80vw;
	  height: 70vh;
	  display: grid;
	  grid-template-columns: repeat(2,50%);
	  overflow: hidden;
	}
	div{
	  /*Styling för att centrera texten i behållaren*/
	  margin: auto;
	}
	
	.name {
		color: white;
		font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
		font-size: 30px;
		
	}

	#inspo{
		font-family: courier;
		font-size: 100%;
	}

	
	/* Vi skiljer elementen med ett kommatecken(,) för att ge möjligheten till att ge flera element samma styling*/
	h3 {
	display: inline;
	/*Ger utrymme mellan element*/
	
	}
        
	</style>
  


