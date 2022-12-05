const d = document;
let x = 0,
    y = 0;

export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball),
          $stage = d.querySelector(stage),
          limitBall = $ball.getBoundingClientRect(),
          limitStage = $stage.getBoundingClientRect();
          
    switch(e.keyCode){
        case 37:
            if(limitBall.left > limitStage.left) {
                e.preventDefault();
                x--;
            }
            //move("left");
            break;
        case 38:
            if(limitBall.top > limitStage.top) {
                e.preventDefault();
                y--;
            } 
            //move("up");
            break;
        case 39:
            e.preventDefault();
            if(limitBall.right < limitStage.right){
                e.preventDefault();
                x++;
            } 
            //move("right");
            break;
        case 40:
            if(limitBall.bottom < limitStage.bottom) {
                e.preventDefault();
                y++;
            } 
            //move("down");
            break;
    }
    $ball.style.transform = `translate(${x*5}px,${y*5}px)`;
}

export function shortcuts(e){
    console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(`ctrl: ${e.ctrlKey}`);
    console.log(`alt: ${e.altKey}`);
    console.log(`shift: ${e.shiftKey}`);

    if (e.key === "a" && e.altKey){
        alert("Haz lanzado una alerta con el teclado: Atl + a")
    }

    if (e.key === "c" && e.altKey){
        alert("Haz lanzado una confirmación con el teclado: Atl + c")
    }

    if (e.key === "t" && e.altKey){
        alert("Haz lanzado un aviso con el teclado: Atl + t")
    }
}