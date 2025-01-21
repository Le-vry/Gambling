
<script>
    import { page } from "$app/stores";
</script>

<main>
    <section>
        <h1>{"You searched for: " + $page.params.pokemon}</h1>
        <hr />
        <h2>{$page.status}: {$page.error.message}</h2>
    </section>  
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
    }
</style>