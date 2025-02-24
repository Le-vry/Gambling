<script>

    let tiles = []

    let left_pos = 727
    let top_pos = 409
    let playerWidth = 40
    let playerHeight = 40
    let playerhp = 6
    let maxSpeed = 5
    let acceleration = 0.4
    
    let velocity = { x: 0, y: 0 }
    let moving = false

    let bullets = []
    let bulletSpeed = 5
    let pressedKeys = {}
    let shootingIntervals = {}


    let enemies = []
    let enemies1 = [{left: 959, top: 314, width: 40, height: 40, hp: 8}, {left: 494, top: 502, width: 40, height: 40, hp: 8}]
    let enemies2 = [{left: 494, top: 314, width: 40, height: 40, hp: 8}, {left: 959, top: 502, width: 40, height: 40, hp: 8}]
    let enemies3 = [{left: 959, top: 314, width: 40, height: 40, hp: 8}, {left: 494, top: 314, width: 40, height: 40, hp: 8}, {left: 494, top: 502, width: 40, height: 40, hp: 8}, {left: 959, top: 502, width: 40, height: 40, hp: 8}]
    let combat = false

    
    
    let amountOfDoors = Math.floor(Math.random() * 3)

    let playerx = Math.floor(left_pos)
    let playery = Math.floor(top_pos)


    

    randomizeDoors()
    
    function randomizeDoors(){
        tiles = []
        amountOfDoors = Math.floor(Math.random() * 3)
        for (let i = 0; i < 247; i++) {
        
        if (i > 59 && i < 73 || i > 78 && i < 92 || i > 97 && i < 111 || i > 116 && i < 130 || i > 135 && i < 149 || i > 154 && i < 168 || i > 173 && i < 187){
            tiles.push({pos: i, tile: "floor"})
        } else if ( i == 28 || i == 47 || i == 115 || i == 116 || i == 130 || i == 131 || i == 199 || i == 218){
            tiles.push({pos: i, tile: "door"})
            
        }else {
            if (i == 0){
                tiles.push({pos: i, tile: "wall", border: "border-top-left-radius: 5px;"})
            } else if (i == 18){
                tiles.push({pos: i, tile: "wall", border: "border-top-right-radius: 5px;"})
            } else if (i == 228){
                tiles.push({pos: i, tile: "wall", border: "border-bottom-left-radius: 5px;"})
            } else if (i == 246){
                tiles.push({pos: i, tile: "wall", border: "border-bottom-right-radius: 5px;"})
            }else{
                tiles.push({pos: i, tile: "wall"})
            } 
        }
    }
        
        if (amountOfDoors == 0){
            let whichdoor = Math.floor(Math.random() * 3)
            if (whichdoor == 0){
                tiles[115].tile = "wall"
                tiles[116].tile = "wall"
                tiles[130].tile = "wall"
                tiles[131].tile = "wall"
                tiles[199].tile = "wall"
                tiles[218].tile = "wall"
                tiles = tiles
            } else if (whichdoor == 1){
                tiles[28].tile = "wall"
                tiles[47].tile = "wall"
                tiles[115].tile = "wall"
                tiles[116].tile = "wall"
                tiles[130].tile = "wall"
                tiles[131].tile = "wall"
                tiles = tiles
            } else if (whichdoor == 2){
                tiles[28].tile = "wall"
                tiles[47].tile = "wall"
                tiles[199].tile = "wall"
                tiles[218].tile = "wall"
                tiles[130].tile = "wall"
                tiles[131].tile = "wall"
                tiles = tiles
            } else if (whichdoor == 3){
                tiles[28].tile = "wall"
                tiles[47].tile = "wall"
                tiles[199].tile = "wall"
                tiles[218].tile = "wall"
                tiles[115].tile = "wall"
                tiles[116].tile = "wall"
                tiles = tiles 
            }
        } else if(amountOfDoors == 1){
            let whichdoor = Math.floor(Math.random() * 4)
            if (whichdoor == 0){
                tiles[130].tile = "wall"
                tiles[131].tile = "wall"
                tiles[199].tile = "wall"
                tiles[218].tile = "wall"
                tiles = tiles
            } else if (whichdoor == 1){
                tiles[115].tile = "wall"
                tiles[116].tile = "wall"
                tiles[199].tile = "wall"
                tiles[218].tile = "wall"
                tiles = tiles
            } else if (whichdoor == 2){
                tiles[28].tile = "wall"
                tiles[47].tile = "wall"
                tiles[199].tile = "wall"
                tiles[218].tile = "wall"
                tiles = tiles
            } else if (whichdoor == 3){
                tiles[28].tile = "wall"
                tiles[47].tile = "wall"
                tiles[130].tile = "wall"
                tiles[131].tile = "wall"
                tiles = tiles
            } else if (whichdoor == 4){
                tiles[28].tile = "wall"
                tiles[47].tile = "wall"
                tiles[115].tile = "wall"
                tiles[116].tile = "wall"
                tiles = tiles
            }
        } else if(amountOfDoors == 2){
            let whichdoor = Math.floor(Math.random() * 3)
            if (whichdoor == 0){
                tiles[28].tile = "wall"
                tiles[47].tile = "wall"
                tiles = tiles
            } else if (whichdoor == 1){
                tiles[115].tile = "wall"
                tiles[116].tile = "wall"
                tiles = tiles
            } else if (whichdoor == 2){
                tiles[199].tile = "wall"
                tiles[218].tile = "wall"
                tiles = tiles
            } else if (whichdoor == 3){
                tiles[130].tile = "wall"
                tiles[131].tile = "wall"
                tiles = tiles
            }
        }
    }
    
    function enemiesQuestionmark(){
        let enemychance = Math.floor(Math.random() * 6)
        let enemynumber = Math.floor(Math.random() * 3)
        
        if (enemychance == 0){
            if (enemynumber == 0){
                enemies = enemies1
                combat = true
            } else if (enemynumber == 1){
                enemies = enemies2
                combat = true
            } else if (enemynumber == 2){
                enemies = enemies3
                combat = true
            }
        } else {
            enemies = []
        }
    }

    function updateEnemies(){
        
        enemies = enemies.map(enemy => {        
            return {
                ...enemy,
                left: enemy.left += (left_pos - enemy.left) *0.0002,
                top: enemy.top += (top_pos - enemy.top) *0.0002,
                
            }
        }).filter(enemy => 
            enemy.left >= 448 && enemy.left <= 1006 &&
            enemy.top >= 277 && enemy.top <= 539
        )
        checkCollisionsPlayer()
        if (enemies.length > 0) {
            requestAnimationFrame(updateEnemies)
        } else {
            combat = false
        }
    }
    
    function checkCollisionsEnemies() {
        bullets.forEach((bullet, bulletIndex) => {
            enemies.forEach((enemy, enemyIndex) => {
                if (bullet.left < enemy.left + enemy.width &&
                    bullet.left + bullet.width > enemy.left &&
                    bullet.top < enemy.top + enemy.height &&
                    bullet.top + bullet.height > enemy.top) {
                    // Collision detected
                    enemy.hp -= 1;
                    bullets.splice(bulletIndex, 1); // Remove bullet on collision
                    if (enemy.hp <= 0) {
                        enemies.splice(enemyIndex, 1); // Remove enemy if HP is zero
                    }
                }
            });
        });
    }

    function checkCollisionsPlayer() {
            enemies.forEach((enemy, ) => {
                if (left_pos < enemy.left + enemy.width &&
                    left_pos + playerWidth > enemy.left &&
                    top_pos < enemy.top + enemy.height &&
                    top_pos + playerHeight > enemy.top) {
                    // Collision detected
                    playerhp -= 1;
                    console.log(playerhp)
                    
                    if (playerhp <= 0) {
                        alert("You died")
                        playerhp = 6
                        enemies = []
                    }
                }
            })
        }

    function updatePosition() {
        let movingX = false
        let movingY = false

        if (pressedKeys["a"] && left_pos > 448) {
            velocity.x = Math.max(velocity.x - acceleration, -maxSpeed)
            movingX = true
        }
        if (pressedKeys["d"] && left_pos < 1006) {
            velocity.x = Math.min(velocity.x + acceleration, maxSpeed)
            movingX = true
        }
        if (pressedKeys["w"] && top_pos > 277) {
            velocity.y = Math.max(velocity.y - acceleration, -maxSpeed)
            movingY = true
        }
        if (pressedKeys["s"] && top_pos < 539) {
            velocity.y = Math.min(velocity.y + acceleration, maxSpeed)
            movingY = true
        }
        
        if (!movingX) {
            velocity.x *= 0.9
        }
        if (!movingY) {
            velocity.y *= 0.9
        }


        if (!movingX) {
        velocity.x = velocity.x * 0.9
        }
        if (!movingY) {
        velocity.y = velocity.y * 0.9
        }


        if (top_pos < 277){
            if (left_pos > 720 && left_pos < 730 && tiles[47].tile == "door" && combat == false){
                top_pos = 538
                randomizeDoors()
                enemiesQuestionmark()
            }else{
                top_pos = 277
            }
        } else if (top_pos > 539){
            if (left_pos > 720 && left_pos < 730 && tiles[199].tile == "door" && combat == false){
                top_pos = 278
                randomizeDoors()
                enemiesQuestionmark()
            }else{
                top_pos = 539
            }
        }else{
            top_pos += velocity.y
        }
        
        if (left_pos < 448){
            if (top_pos > 400 && top_pos < 410 && tiles[116].tile == "door" && combat == false){
                left_pos = 1005
                randomizeDoors()
                enemiesQuestionmark()
            }else{
                left_pos = 448
            }
        } else if (left_pos > 1006){
            if (top_pos > 400 && top_pos < 410 && tiles[130].tile == "door" && combat == false){
                left_pos = 449
                randomizeDoors()
                enemiesQuestionmark()
            }else{
                left_pos = 1006
            }
        }else{
            left_pos += velocity.x
        }


        if (moving || velocity.x !== 0 || velocity.y !== 0) {
            requestAnimationFrame(updatePosition)
            playerx = Math.floor(left_pos)
            playery = Math.floor(top_pos)
        }
    }

    function shootBullet(direction) {
        let bullet = {
            left: left_pos + 15,
            top: top_pos + 15,
            width: 10,
            height: 10,
            velocity: { x: 0, y: 0 }
        }

        if (direction === "left") {
            bullet.velocity.x = -bulletSpeed
        }

        if (direction === "right") bullet.velocity.x = bulletSpeed
        if (direction === "up") bullet.velocity.y = -bulletSpeed
        if (direction === "down") bullet.velocity.y = bulletSpeed
        bullets.push(bullet)
    }

    function updateBullets() {
        bullets = bullets.map(bullet => {
            return {
                ...bullet,
                left: bullet.left + bullet.velocity.x,
                top: bullet.top + bullet.velocity.y
            }
        }).filter(bullet => 
            bullet.left >= 448 && bullet.left <= 1006 &&
            bullet.top >= 277 && bullet.top <= 539
        )
        checkCollisionsEnemies()
        if (bullets.length > 0) {
            requestAnimationFrame(updateBullets)
        }
    }

    function startShooting(direction) {
        if (!shootingIntervals[direction]) {
            shootBullet(direction)
            updateBullets()
            shootingIntervals[direction] = setInterval(() => {
                shootBullet(direction)
            }, 400) // Fire a bullet every 500ms
        }
    }

    function stopShooting(direction) {
        if (shootingIntervals[direction]) {
            clearInterval(shootingIntervals[direction])
            delete shootingIntervals[direction]
        }
    }

    function onKeyDown(e) {
        pressedKeys[e.key] = true

        if (!moving) {
            moving = true
            updatePosition()
        }

        if (e.key === "ArrowLeft") startShooting("left")
        if (e.key === "ArrowRight") startShooting("right")
        if (e.key === "ArrowUp") startShooting("up")
        if (e.key === "ArrowDown") startShooting("down")
    }

    function onKeyUp(e) {
        pressedKeys[e.key] = false

        if (e.key === "ArrowLeft") stopShooting("left")
        if (e.key === "ArrowRight") stopShooting("right")
        if (e.key === "ArrowUp") stopShooting("up")
        if (e.key === "ArrowDown") stopShooting("down")
    }


    if (enemies.length > 0) {
        requestAnimationFrame(updateEnemies)
    }else{
        combat = false
    }
    setInterval(() => {
        updateEnemies()
    }, 10)

</script>


<main>
    <!--<div style="position: absolute; top: 50px; left: 20px">playerx:{playerx}</div>
    <div style="position: absolute; top: 70px; left: 20px">playery:{playery}</div>-->
    <div style="position: absolute; top: 200px; left: 350px">hp:{playerhp}</div>
    <div class="container">
        <h1>Game</h1>
        
        <div class="categories_container">
            <section>
                {#each tiles as tile}
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="{tile.tile}" style="{tile.border}"></div>
                {/each}
                {#if playerhp > 0}
                <div class="player" style="left:{left_pos}px; top:{top_pos}px; width: {playerWidth}px; height: {playerHeight}px;"></div>
                {/if}
                {#each bullets as bullet}
                <div class="bullet" style="left:{bullet.left}px; top:{bullet.top}px; width: {bullet.width}px; height: {bullet.height}px;"></div>
                {/each}

                {#each enemies as enemy}
                <div class="enemy" style="left:{enemy.left}px; top:{enemy.top}px; width: {enemy.width}px; height: {enemy.height}px;"></div>
                {/each}
            </section>
            
        </div>
    </div>
</main>
<svelte:window on:keydown|preventDefault={onKeyDown} on:keyup={onKeyUp} />
<style>
    main{
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1520' height='840' preserveAspectRatio='none' viewBox='0 0 1520 840'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1192%26quot%3b)' fill='none'%3e%3crect width='1520' height='840' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1193%26quot%3b)'%3e%3c/rect%3e%3cpath d='M-59.78 535.07L-59.78 535.07' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-59.78 535.07L-95.54 654.77' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-59.78 535.07L76.81 519.33' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-59.78 535.07L59.55 670.63' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-59.78 535.07L79.41 807.77' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-59.78 535.07L250.85 560.15' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-59.78 535.07L228.79 672.02' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-95.54 654.77L-95.54 654.77' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-95.54 654.77L59.55 670.63' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-38.3 859.66L-38.3 859.66' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-38.3 859.66L79.41 807.77' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-38.3 859.66L88.55 991.11' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-38.3 859.66L-95.54 654.77' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-38.3 859.66L59.55 670.63' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-38.3 859.66L204.18 841.45' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-38.3 859.66L227.75 971.28' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M76.81 519.33L76.81 519.33' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M76.81 519.33L59.55 670.63' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M76.81 519.33L250.85 560.15' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M76.81 519.33L228.79 672.02' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M59.55 670.63L59.55 670.63' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M59.55 670.63L79.41 807.77' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M59.55 670.63L228.79 672.02' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M79.41 807.77L79.41 807.77' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M79.41 807.77L204.18 841.45' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M88.55 991.11L88.55 991.11' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M88.55 991.11L227.75 971.28' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M88.55 991.11L79.41 807.77' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M88.55 991.11L204.18 841.45' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M88.55 991.11L341.72 852.31' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M88.55 991.11L59.55 670.63' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M250.85 560.15L250.85 560.15' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M250.85 560.15L338.4 554.02' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M250.85 560.15L228.79 672.02' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M250.85 560.15L344.95 676.63' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M228.79 672.02L228.79 672.02' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M228.79 672.02L344.95 676.63' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M228.79 672.02L338.4 554.02' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M228.79 672.02L204.18 841.45' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M228.79 672.02L79.41 807.77' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M204.18 841.45L204.18 841.45' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M204.18 841.45L227.75 971.28' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M204.18 841.45L341.72 852.31' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M227.75 971.28L227.75 971.28' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M227.75 971.28L341.72 852.31' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M227.75 971.28L79.41 807.77' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M227.75 971.28L495.46 842.8' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M338.4 554.02L338.4 554.02' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M338.4 554.02L344.95 676.63' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M338.4 554.02L561.51 544.1' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M338.4 554.02L513.5 707.6' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M338.4 554.02L76.81 519.33' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M344.95 676.63L344.95 676.63' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M344.95 676.63L513.5 707.6' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M344.95 676.63L341.72 852.31' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M341.72 852.31L341.72 852.31' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M341.72 852.31L495.46 842.8' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M561.51 544.1L561.51 544.1' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M561.51 544.1L704.86 545.73' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M561.51 544.1L513.5 707.6' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M513.5 707.6L513.5 707.6' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M513.5 707.6L495.46 842.8' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M495.46 842.8L495.46 842.8' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M549.05 1008.62L549.05 1008.62' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M549.05 1008.62L698.78 940.57' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M549.05 1008.62L495.46 842.8' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M549.05 1008.62L661.87 818.67' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M549.05 1008.62L341.72 852.31' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M697.74 340.54L697.74 340.54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M697.74 340.54L845.38 354.26' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M697.74 340.54L704.86 545.73' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M697.74 340.54L799.13 544.69' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M704.86 545.73L704.86 545.73' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M704.86 545.73L799.13 544.69' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M704.86 545.73L797.4 685.73' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M704.86 545.73L845.38 354.26' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M661.87 818.67L661.87 818.67' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M661.87 818.67L698.78 940.57' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M661.87 818.67L806.21 843.89' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M698.78 940.57L698.78 940.57' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M698.78 940.57L806.21 843.89' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M698.78 940.57L854.98 983.42' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M698.78 940.57L495.46 842.8' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M845.38 354.26L845.38 354.26' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M845.38 354.26L938.32 341.99' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M845.38 354.26L990.47 254.22' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M845.38 354.26L799.13 544.69' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M799.13 544.69L799.13 544.69' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M799.13 544.69L797.4 685.73' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M799.13 544.69L1003.73 525.17' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M797.4 685.73L797.4 685.73' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M797.4 685.73L806.21 843.89' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M806.21 843.89L806.21 843.89' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M806.21 843.89L854.98 983.42' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M806.21 843.89L954.34 843.56' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M806.21 843.89L978.18 968.21' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M854.98 983.42L854.98 983.42' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M854.98 983.42L978.18 968.21' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M945.14 -88.38L945.14 -88.38' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M945.14 -88.38L963.14 43.14' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M945.14 -88.38L1104.57 -54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M963.14 43.14L963.14 43.14' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M963.14 43.14L1106.74 75.82' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M963.14 43.14L1104.57 -54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M990.47 254.22L990.47 254.22' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M990.47 254.22L938.32 341.99' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M990.47 254.22L1135.87 204.19' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M990.47 254.22L1125.96 354.41' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M938.32 341.99L938.32 341.99' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M938.32 341.99L1125.96 354.41' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M938.32 341.99L1003.73 525.17' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M938.32 341.99L1087.63 523.9' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M938.32 341.99L697.74 340.54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1003.73 525.17L1003.73 525.17' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1003.73 525.17L1087.63 523.9' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1003.73 525.17L1103.56 652.92' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1003.73 525.17L968.39 699.81' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M968.39 699.81L968.39 699.81' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M968.39 699.81L1103.56 652.92' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M968.39 699.81L954.34 843.56' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M968.39 699.81L1090.46 799.5' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M968.39 699.81L797.4 685.73' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M968.39 699.81L1087.63 523.9' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M954.34 843.56L954.34 843.56' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M954.34 843.56L978.18 968.21' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M954.34 843.56L1090.46 799.5' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M978.18 968.21L978.18 968.21' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M978.18 968.21L1146.89 993.59' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M978.18 968.21L1090.46 799.5' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1104.57 -54L1104.57 -54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1104.57 -54L1106.74 75.82' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1106.74 75.82L1106.74 75.82' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1106.74 75.82L1135.87 204.19' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1135.87 204.19L1135.87 204.19' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1135.87 204.19L1125.96 354.41' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1135.87 204.19L1248.61 92.31' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1135.87 204.19L1255.94 350.42' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1135.87 204.19L963.14 43.14' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1125.96 354.41L1125.96 354.41' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1125.96 354.41L1255.94 350.42' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1087.63 523.9L1087.63 523.9' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1087.63 523.9L1103.56 652.92' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1087.63 523.9L1242.37 543.94' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1087.63 523.9L1125.96 354.41' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1103.56 652.92L1103.56 652.92' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1103.56 652.92L1090.46 799.5' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1090.46 799.5L1090.46 799.5' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1146.89 993.59L1146.89 993.59' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1146.89 993.59L1307.48 962.76' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1146.89 993.59L1249.82 851.9' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1146.89 993.59L1090.46 799.5' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1310.1 -95.6L1310.1 -95.6' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1310.1 -95.6L1248.61 92.31' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1310.1 -95.6L1458.63 48.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1310.1 -95.6L1104.57 -54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1248.61 92.31L1248.61 92.31' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1248.61 92.31L1106.74 75.82' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1248.61 92.31L1104.57 -54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1248.61 92.31L1458.63 48.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1255.94 350.42L1255.94 350.42' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1255.94 350.42L1387.59 344.99' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1242.37 543.94L1242.37 543.94' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1242.37 543.94L1287.55 655.62' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1242.37 543.94L1398.67 541.7' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1242.37 543.94L1103.56 652.92' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1242.37 543.94L1255.94 350.42' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1242.37 543.94L1125.96 354.41' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1287.55 655.62L1287.55 655.62' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1287.55 655.62L1398.67 541.7' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1287.55 655.62L1448.13 664.13' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1287.55 655.62L1103.56 652.92' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1287.55 655.62L1249.82 851.9' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1287.55 655.62L1087.63 523.9' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1249.82 851.9L1249.82 851.9' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1249.82 851.9L1307.48 962.76' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1249.82 851.9L1090.46 799.5' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1249.82 851.9L1441.87 857.56' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1249.82 851.9L1103.56 652.92' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1307.48 962.76L1307.48 962.76' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1307.48 962.76L1457.4 1007.93' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1307.48 962.76L1441.87 857.56' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1307.48 962.76L1090.46 799.5' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1307.48 962.76L1597.07 964.34' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1458.63 48.64L1458.63 48.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1458.63 48.64L1579.72 61.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1458.63 48.64L1545.6 -56.4' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1458.63 48.64L1444.14 249.72' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1458.63 48.64L1609.79 258.11' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1444.14 249.72L1444.14 249.72' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1444.14 249.72L1387.59 344.99' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1444.14 249.72L1560.47 346.54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1444.14 249.72L1609.79 258.11' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1444.14 249.72L1255.94 350.42' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1387.59 344.99L1387.59 344.99' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1398.67 541.7L1398.67 541.7' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1398.67 541.7L1448.13 664.13' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1448.13 664.13L1448.13 664.13' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1448.13 664.13L1595.06 638.26' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1448.13 664.13L1441.87 857.56' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1448.13 664.13L1612.16 525.88' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1441.87 857.56L1441.87 857.56' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1441.87 857.56L1457.4 1007.93' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1441.87 857.56L1601.8 850.62' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1441.87 857.56L1597.07 964.34' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1457.4 1007.93L1457.4 1007.93' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1457.4 1007.93L1597.07 964.34' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1457.4 1007.93L1601.8 850.62' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1457.4 1007.93L1249.82 851.9' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1457.4 1007.93L1718.83 976.01' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1545.6 -56.4L1545.6 -56.4' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1545.6 -56.4L1579.72 61.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1545.6 -56.4L1750.07 -89.18' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1545.6 -56.4L1741.35 50.35' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1545.6 -56.4L1310.1 -95.6' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1545.6 -56.4L1609.79 258.11' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1579.72 61.64L1579.72 61.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1579.72 61.64L1741.35 50.35' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1579.72 61.64L1609.79 258.11' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1579.72 61.64L1693.74 254.97' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1579.72 61.64L1750.07 -89.18' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1609.79 258.11L1609.79 258.11' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1609.79 258.11L1693.74 254.97' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1609.79 258.11L1560.47 346.54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1609.79 258.11L1731.75 397.91' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1609.79 258.11L1387.59 344.99' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1560.47 346.54L1560.47 346.54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1612.16 525.88L1612.16 525.88' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1612.16 525.88L1595.06 638.26' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1612.16 525.88L1729.57 498.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1612.16 525.88L1731.75 397.91' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1595.06 638.26L1595.06 638.26' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1595.06 638.26L1747.96 711.8' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1595.06 638.26L1729.57 498.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1595.06 638.26L1601.8 850.62' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1601.8 850.62L1601.8 850.62' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1601.8 850.62L1597.07 964.34' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1601.8 850.62L1746.4 862.22' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1601.8 850.62L1718.83 976.01' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1601.8 850.62L1747.96 711.8' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1597.07 964.34L1597.07 964.34' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1597.07 964.34L1718.83 976.01' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1597.07 964.34L1746.4 862.22' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1750.07 -89.18L1750.07 -89.18' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1750.07 -89.18L1741.35 50.35' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1741.35 50.35L1741.35 50.35' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1741.35 50.35L1693.74 254.97' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1741.35 50.35L1609.79 258.11' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1741.35 50.35L1458.63 48.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1693.74 254.97L1693.74 254.97' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1693.74 254.97L1731.75 397.91' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1693.74 254.97L1560.47 346.54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1731.75 397.91L1731.75 397.91' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1731.75 397.91L1729.57 498.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1731.75 397.91L1560.47 346.54' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1731.75 397.91L1595.06 638.26' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1729.57 498.64L1729.57 498.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1747.96 711.8L1747.96 711.8' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1747.96 711.8L1746.4 862.22' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1747.96 711.8L1729.57 498.64' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1747.96 711.8L1612.16 525.88' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1746.4 862.22L1746.4 862.22' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1746.4 862.22L1718.83 976.01' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1746.4 862.22L1595.06 638.26' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1718.83 976.01L1718.83 976.01' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1718.83 976.01L1747.96 711.8' stroke='rgba(140%2c 0%2c 0%2c 1)' stroke-width='1.5'%3e%3c/path%3e%3ccircle r='5' cx='-59.78' cy='535.07' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='-95.54' cy='654.77' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='-38.3' cy='859.66' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='76.81' cy='519.33' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='59.55' cy='670.63' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='79.41' cy='807.77' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='88.55' cy='991.11' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='250.85' cy='560.15' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='228.79' cy='672.02' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='204.18' cy='841.45' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='227.75' cy='971.28' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='338.4' cy='554.02' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='344.95' cy='676.63' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='341.72' cy='852.31' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='561.51' cy='544.1' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='513.5' cy='707.6' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='495.46' cy='842.8' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='549.05' cy='1008.62' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='697.74' cy='340.54' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='704.86' cy='545.73' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='661.87' cy='818.67' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='698.78' cy='940.57' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='845.38' cy='354.26' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='799.13' cy='544.69' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='797.4' cy='685.73' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='806.21' cy='843.89' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='854.98' cy='983.42' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='945.14' cy='-88.38' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='963.14' cy='43.14' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='990.47' cy='254.22' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='938.32' cy='341.99' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1003.73' cy='525.17' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='968.39' cy='699.81' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='954.34' cy='843.56' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='978.18' cy='968.21' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1104.57' cy='-54' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1106.74' cy='75.82' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1135.87' cy='204.19' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1125.96' cy='354.41' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1087.63' cy='523.9' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1103.56' cy='652.92' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1090.46' cy='799.5' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1146.89' cy='993.59' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1310.1' cy='-95.6' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1248.61' cy='92.31' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1255.94' cy='350.42' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1242.37' cy='543.94' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1287.55' cy='655.62' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1249.82' cy='851.9' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1307.48' cy='962.76' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1458.63' cy='48.64' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1444.14' cy='249.72' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1387.59' cy='344.99' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1398.67' cy='541.7' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1448.13' cy='664.13' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1441.87' cy='857.56' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1457.4' cy='1007.93' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1545.6' cy='-56.4' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1579.72' cy='61.64' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1609.79' cy='258.11' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1560.47' cy='346.54' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1612.16' cy='525.88' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1595.06' cy='638.26' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1601.8' cy='850.62' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1597.07' cy='964.34' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1750.07' cy='-89.18' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1741.35' cy='50.35' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1693.74' cy='254.97' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1731.75' cy='397.91' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1729.57' cy='498.64' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1747.96' cy='711.8' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1746.4' cy='862.22' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3ccircle r='5' cx='1718.83' cy='976.01' fill='rgba(140%2c 0%2c 0%2c 1)'%3e%3c/circle%3e%3cpath d='M196.3 852.04L196.3 852.04' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M196.3 852.04L65.91 820.57' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M196.3 852.04L191.42 697.34' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M196.3 852.04L373.28 841.82' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M196.3 852.04L344.78 958.68' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M196.3 852.04L75.05 702.49' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M344.78 958.68L344.78 958.68' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M344.78 958.68L373.28 841.82' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M344.78 958.68L549.14 940.68' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M344.78 958.68L553.32 834.25' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M344.78 958.68L341.04 708.36' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M553.32 834.25L553.32 834.25' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M553.32 834.25L549.14 940.68' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M553.32 834.25L688.18 852.51' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M553.32 834.25L508.38 673.39' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M553.32 834.25L646.29 681.08' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M553.32 834.25L373.28 841.82' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M553.32 834.25L697.76 958.46' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M688.18 852.51L688.18 852.51' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M688.18 852.51L697.76 958.46' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M688.18 852.51L818.91 827.13' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M697.76 958.46L697.76 958.46' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M697.76 958.46L549.14 940.68' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M697.76 958.46L860.92 951.98' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M697.76 958.46L818.91 827.13' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1138.17 394.41L1138.17 394.41' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1138.17 394.41L1280.95 397.56' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1138.17 394.41L1130.89 544.76' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1138.17 394.41L1259.28 221.86' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1138.17 394.41L999.04 560' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1388.92 809.55L1388.92 809.55' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1388.92 809.55L1408.49 650.12' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1388.92 809.55L1549.09 833.57' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1388.92 809.55L1266.85 701.74' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1388.92 809.55L1417.37 976.39' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1388.92 809.55L1243.57 1011.91' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1388.92 809.55L1594.36 963.62' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1551.49 354.37L1551.49 354.37' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1551.49 354.37L1547.09 260.07' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1551.49 354.37L1706.75 348.46' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1551.49 354.37L1394.34 396.38' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1551.49 354.37L1462.18 504.79' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1551.49 354.37L1443.81 211.99' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1612.02 662.9L1612.02 662.9' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1612.02 662.9L1706.97 661.53' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1612.02 662.9L1548.37 536.35' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1612.02 662.9L1549.09 833.57' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1732.82 821.66L1732.82 821.66' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1732.82 821.66L1706.97 661.53' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1732.82 821.66L1754.32 984.35' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1754.32 984.35L1754.32 984.35' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1754.32 984.35L1594.36 963.62' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1754.32 984.35L1549.09 833.57' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1754.32 984.35L1706.97 661.53' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-66.33 821.73L-66.33 821.73' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-66.33 821.73L65.91 820.57' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-66.33 821.73L-49.39 985.66' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-66.33 821.73L75.05 702.49' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-66.33 821.73L42.72 981.42' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-66.33 821.73L196.3 852.04' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-49.39 985.66L-49.39 985.66' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-49.39 985.66L42.72 981.42' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-49.39 985.66L65.91 820.57' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M-49.39 985.66L196.3 852.04' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M75.05 702.49L75.05 702.49' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M75.05 702.49L191.42 697.34' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M75.05 702.49L65.91 820.57' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M65.91 820.57L65.91 820.57' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M65.91 820.57L42.72 981.42' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M42.72 981.42L42.72 981.42' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M42.72 981.42L196.3 852.04' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M191.42 697.34L191.42 697.34' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M191.42 697.34L341.04 708.36' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M191.42 697.34L65.91 820.57' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M191.42 697.34L373.28 841.82' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M341.04 708.36L341.04 708.36' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M341.04 708.36L373.28 841.82' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M341.04 708.36L508.38 673.39' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M341.04 708.36L196.3 852.04' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M341.04 708.36L553.32 834.25' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M373.28 841.82L373.28 841.82' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M508.38 673.39L508.38 673.39' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M508.38 673.39L646.29 681.08' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M508.38 673.39L373.28 841.82' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M549.14 940.68L549.14 940.68' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M549.14 940.68L688.18 852.51' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M549.14 940.68L373.28 841.82' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M549.14 940.68L508.38 673.39' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M646.29 681.08L646.29 681.08' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M646.29 681.08L688.18 852.51' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M646.29 681.08L862.42 670.11' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M646.29 681.08L818.91 827.13' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M849.04 509.45L849.04 509.45' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M849.04 509.45L999.04 560' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M849.04 509.45L862.42 670.11' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M862.42 670.11L862.42 670.11' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M862.42 670.11L960.17 641.12' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M862.42 670.11L818.91 827.13' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M862.42 670.11L999.04 560' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M862.42 670.11L967.33 824.97' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M818.91 827.13L818.91 827.13' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M818.91 827.13L860.92 951.98' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M818.91 827.13L967.33 824.97' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M860.92 951.98L860.92 951.98' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M860.92 951.98L967.47 998.43' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M999.04 560L999.04 560' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M999.04 560L960.17 641.12' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M999.04 560L1130.89 544.76' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M960.17 641.12L960.17 641.12' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M960.17 641.12L849.04 509.45' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M967.33 824.97L967.33 824.97' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M967.33 824.97L1097.12 855.36' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M967.47 998.43L967.47 998.43' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1130.89 544.76L1130.89 544.76' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1130.89 544.76L1148.26 671.3' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1148.26 671.3L1148.26 671.3' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1148.26 671.3L1266.85 701.74' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1148.26 671.3L999.04 560' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1148.26 671.3L960.17 641.12' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1148.26 671.3L1097.12 855.36' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1148.26 671.3L967.33 824.97' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1097.12 855.36L1097.12 855.36' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1097.12 855.36L1117.65 981.63' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1117.65 981.63L1117.65 981.63' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1117.65 981.63L1243.57 1011.91' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1117.65 981.63L967.47 998.43' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1117.65 981.63L967.33 824.97' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1273.87 -45.84L1273.87 -45.84' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1273.87 -45.84L1295.2 58.29' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1273.87 -45.84L1395.77 -92.5' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1273.87 -45.84L1423.91 66.61' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1273.87 -45.84L1259.28 221.86' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1295.2 58.29L1295.2 58.29' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1295.2 58.29L1423.91 66.61' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1295.2 58.29L1259.28 221.86' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1259.28 221.86L1259.28 221.86' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1259.28 221.86L1280.95 397.56' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1259.28 221.86L1443.81 211.99' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1280.95 397.56L1280.95 397.56' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1280.95 397.56L1394.34 396.38' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1266.85 701.74L1266.85 701.74' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1266.85 701.74L1408.49 650.12' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1243.57 1011.91L1243.57 1011.91' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1243.57 1011.91L1417.37 976.39' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1243.57 1011.91L1097.12 855.36' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1395.77 -92.5L1395.77 -92.5' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1395.77 -92.5L1423.91 66.61' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1395.77 -92.5L1295.2 58.29' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1395.77 -92.5L1589 -48.02' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1395.77 -92.5L1586.85 41.58' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1423.91 66.61L1423.91 66.61' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1423.91 66.61L1443.81 211.99' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1423.91 66.61L1586.85 41.58' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1423.91 66.61L1589 -48.02' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1443.81 211.99L1443.81 211.99' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1443.81 211.99L1547.09 260.07' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1394.34 396.38L1394.34 396.38' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1394.34 396.38L1462.18 504.79' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1462.18 504.79L1462.18 504.79' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1462.18 504.79L1548.37 536.35' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1462.18 504.79L1408.49 650.12' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1408.49 650.12L1408.49 650.12' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1408.49 650.12L1548.37 536.35' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1408.49 650.12L1612.02 662.9' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1417.37 976.39L1417.37 976.39' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1417.37 976.39L1594.36 963.62' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1417.37 976.39L1549.09 833.57' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1417.37 976.39L1117.65 981.63' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1417.37 976.39L1266.85 701.74' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1589 -48.02L1589 -48.02' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1589 -48.02L1586.85 41.58' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1589 -48.02L1720.27 -83.84' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1586.85 41.58L1586.85 41.58' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1586.85 41.58L1736.34 99.53' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1586.85 41.58L1720.27 -83.84' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1586.85 41.58L1695.05 206.36' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1586.85 41.58L1547.09 260.07' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1547.09 260.07L1547.09 260.07' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1548.37 536.35L1548.37 536.35' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1549.09 833.57L1549.09 833.57' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1549.09 833.57L1594.36 963.62' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1549.09 833.57L1732.82 821.66' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1549.09 833.57L1408.49 650.12' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1594.36 963.62L1594.36 963.62' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1594.36 963.62L1732.82 821.66' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1720.27 -83.84L1720.27 -83.84' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1720.27 -83.84L1736.34 99.53' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1720.27 -83.84L1695.05 206.36' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1736.34 99.53L1736.34 99.53' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1736.34 99.53L1695.05 206.36' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1736.34 99.53L1589 -48.02' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1736.34 99.53L1547.09 260.07' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1695.05 206.36L1695.05 206.36' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1695.05 206.36L1706.75 348.46' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1706.75 348.46L1706.75 348.46' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1706.75 348.46L1712.44 499.42' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1712.44 499.42L1712.44 499.42' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1712.44 499.42L1706.97 661.53' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1712.44 499.42L1548.37 536.35' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1712.44 499.42L1612.02 662.9' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3cpath d='M1706.97 661.53L1706.97 661.53' stroke='hsl(0%2c 100%25%2c 35.2%25)' stroke-width='1.5'%3e%3c/path%3e%3ccircle r='25' cx='196.3' cy='852.04' fill='url(%26quot%3b%23SvgjsRadialGradient1194%26quot%3b)'%3e%3c/circle%3e%3ccircle r='25' cx='344.78' cy='958.68' fill='url(%26quot%3b%23SvgjsRadialGradient1194%26quot%3b)'%3e%3c/circle%3e%3ccircle r='25' cx='553.32' cy='834.25' fill='url(%26quot%3b%23SvgjsRadialGradient1194%26quot%3b)'%3e%3c/circle%3e%3ccircle r='25' cx='688.18' cy='852.51' fill='url(%26quot%3b%23SvgjsRadialGradient1194%26quot%3b)'%3e%3c/circle%3e%3ccircle r='25' cx='697.76' cy='958.46' fill='url(%26quot%3b%23SvgjsRadialGradient1194%26quot%3b)'%3e%3c/circle%3e%3ccircle r='25' cx='1138.17' cy='394.41' fill='url(%26quot%3b%23SvgjsRadialGradient1194%26quot%3b)'%3e%3c/circle%3e%3ccircle r='25' cx='1388.92' cy='809.55' fill='url(%26quot%3b%23SvgjsRadialGradient1194%26quot%3b)'%3e%3c/circle%3e%3ccircle r='25' cx='1551.49' cy='354.37' fill='url(%26quot%3b%23SvgjsRadialGradient1194%26quot%3b)'%3e%3c/circle%3e%3ccircle r='25' cx='1612.02' cy='662.9' fill='url(%26quot%3b%23SvgjsRadialGradient1194%26quot%3b)'%3e%3c/circle%3e%3ccircle r='25' cx='1732.82' cy='821.66' fill='url(%26quot%3b%23SvgjsRadialGradient1194%26quot%3b)'%3e%3c/circle%3e%3ccircle r='25' cx='1754.32' cy='984.35' fill='url(%26quot%3b%23SvgjsRadialGradient1194%26quot%3b)'%3e%3c/circle%3e%3ccircle r='5' cx='-66.33' cy='821.73' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='-49.39' cy='985.66' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='75.05' cy='702.49' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='65.91' cy='820.57' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='42.72' cy='981.42' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='191.42' cy='697.34' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='341.04' cy='708.36' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='373.28' cy='841.82' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='508.38' cy='673.39' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='549.14' cy='940.68' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='646.29' cy='681.08' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='849.04' cy='509.45' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='862.42' cy='670.11' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='818.91' cy='827.13' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='860.92' cy='951.98' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='999.04' cy='560' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='960.17' cy='641.12' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='967.33' cy='824.97' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='967.47' cy='998.43' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1130.89' cy='544.76' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1148.26' cy='671.3' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1097.12' cy='855.36' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1117.65' cy='981.63' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1273.87' cy='-45.84' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1295.2' cy='58.29' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1259.28' cy='221.86' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1280.95' cy='397.56' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1266.85' cy='701.74' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1243.57' cy='1011.91' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1395.77' cy='-92.5' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1423.91' cy='66.61' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1443.81' cy='211.99' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1394.34' cy='396.38' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1462.18' cy='504.79' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1408.49' cy='650.12' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1417.37' cy='976.39' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1589' cy='-48.02' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1586.85' cy='41.58' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1547.09' cy='260.07' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1548.37' cy='536.35' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1549.09' cy='833.57' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1594.36' cy='963.62' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1720.27' cy='-83.84' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1736.34' cy='99.53' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1695.05' cy='206.36' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1706.75' cy='348.46' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1712.44' cy='499.42' fill='%23c58080'%3e%3c/circle%3e%3ccircle r='5' cx='1706.97' cy='661.53' fill='%23c58080'%3e%3c/circle%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1192'%3e%3crect width='1520' height='840' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='11.18%25' y1='-20.24%25' x2='88.82%25' y2='120.24%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1193'%3e%3cstop stop-color='rgba(0%2c 0%2c 0%2c 1)' offset='0.5'%3e%3c/stop%3e%3cstop stop-color='rgba(113%2c 0%2c 0%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cradialGradient id='SvgjsRadialGradient1194'%3e%3cstop stop-color='white' offset='0.1'%3e%3c/stop%3e%3cstop stop-color='rgba(138%2c 0%2c 0%2c 1)' offset='0.2'%3e%3c/stop%3e%3cstop stop-color='rgba(138%2c 0%2c 0%2c 0)' offset='1'%3e%3c/stop%3e%3c/radialGradient%3e%3c/defs%3e%3c/svg%3e");

        display: flex;

        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        min-width: 100%;
        min-height: 700px;

        justify-content: center;
        align-items: center;
    }

    .container {
        margin-top:5vh;
        display: grid;
        grid-template-rows: 1fr 9fr 1fr;
        
        background-color: #7b0000;
        border-left: #7b0000 10px solid;
        border-right: #7b0000 10px solid;
        border-radius: 20px;
        width: 60vw;
        height: 85vh;
    }

    .container h1{
        justify-self: center;
        align-self: center;
        background-color: #5d0000;
        border-radius: 5px;
        padding: 5px;
    }

    .categories_container{
        display: grid;
        width: 100%;
        height: 100%;
        background-color: #7b0000;
    }

    section{
        display: grid;
        grid-template-columns:repeat(19, 1fr);;
        grid-template-rows:repeat(13, 1fr);
        width:  100%;
        height: 100%;
        border: #000000 3px solid;
        border-radius: 10px;
        
    }

    .player, .bullet , .enemy{
        position: absolute;
        border-radius: 50%;
        z-index: 1;
    }

    .player {
        background-color: #0000ff;
    }

    .enemy {
        background-color: #37ff00;
    }
    .bullet {
       
        background-color: #e86100;
        border: #000000 1px solid;
    }

    section div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3d0000; 
        
    }

    .floor{
        background-color: #8f0000;
    }

    .door{
        background-color: #000000;
    }
    
</style>