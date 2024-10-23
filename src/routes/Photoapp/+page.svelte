<script>
    
    let image = "https://picsum.photos/id/70/367/267"
    let photo = "https://picsum.photos/id/88/367/267"
    let picture = "https://picsum.photos/id/93/367/267"

</script>

<h> Photoapp </h>
<h> Denna sida innehåller <strong>fina</strong> bilder</h>

<div class="photos">
    <div class="image_wrapper">
        <img src={image} alt="Flexbox egenskaper">
    </div> 
        
    <div class="image_wrapper">
        <img src={photo} alt="Flexbox egenskaper">
    </div>
    <div class="image_wrapper">
        <img src= {picture} alt="hej">
    </div>
</div>



<style>
    
    .photos {
        display: flex;
        max-width: 90vw;
        flex-wrap: wrap;
        border: 2px solid white;
        border-radius: 20px;
        justify-content: center;
    }

    .photos img{
        width: 100%;
        overflow:hidden;
        border-radius: 20px;
    }
    
    .image_wrapper {
        margin: 10px;
        
    }
    
    .image_wrapper img {
        height: 200px;
        width: 300px;
        flex-grow: 1;
        box-shadow: 4px 8px 0px rgba(0,0,0,0.2);
        transition: width, 1s;
        transition: height, 1s
        
        
    }
    .image_wrapper img:hover { 
        width: 400px;
        height: 275px;
    }
    .image_wrapper:active {
        transform: scale(0.9);
    }
</style>