class hero{
    constructor(name){
        this.name = name
        this.disp = 0
        this.hov = 0
        this.health = 50
        this.strength = 10
    }
    right(){
        this.disp ++
    }
    left(){
        this.disp --
    }
    up(){
        this.hov ++
    }
    down(){
        this.hov --
    }
}
const Hito = new hero('Hito')

// This allows our hero to move to the right
window.addEventListener('keydown',e => {
    if(e.keyCode ===68){
        const Terry = document.querySelector('.Terry')
        Terry.src ='./Sprites/Right.gif'
        Hito.right();
        console.log(Hito.disp)
    }
})
window.addEventListener('keyup',e => {
    if(e.keyCode ===68){
        const Terry = document.querySelector('.Terry')
        Terry.src =''
        console.log(Hito.disp)
    }
})

// This allows our hero to move to the Left
window.addEventListener('keydown',e => {
    if(e.keyCode ===65){
        const Terry = document.querySelector('.Terry')
        Terry.src ='./Sprites/Left.gif'
        Hito.left();
        console.log(Hito.disp)
    }
})
window.addEventListener('keyup',e => {
    if(e.keyCode ===65){
        const Terry = document.querySelector('.Terry')
        Terry.src =''
    }
})
// 
window.addEventListener('keydown',e => {
    if(e.keyCode ===87){
        const Terry = document.querySelector('.Terry')
        Terry.src ='./Sprites/Up.gif'
        Hito.up();
        console.log(Hito.hov)
    }
})
window.addEventListener('keyup',e => {
    if(e.keyCode ===87){
        const Terry = document.querySelector('.Terry')
        Terry.src =''
    }
})

// Makes our hero walk down
window.addEventListener('keydown',e => {
    if(e.keyCode ===83){
        const Terry = document.querySelector('.Terry')
        Terry.src ='./Sprites/Down.gif'
        Hito.left();
        console.log(Hito.disp)
    }
})
window.addEventListener('keyup',e => {
    if(e.keyCode ===83){
        const Terry = document.querySelector('.Terry')
        Terry.src =''
        console.log(Hito.disp)
    }
})