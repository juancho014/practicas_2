


const hacerlacomida=(callback)=>{
setTimeout(() => {
    callback()
   
}, 4000);

}

hacerlacomida(()=>{console.log('la comida esta lista');});

const carmi=(callback)=>{
    setTimeout(() => {
        callback()
    }, 6000);
}

 carmi(()=>{console.log('cuando viene la carmi');})


const juan=(callback)=>{
    setTimeout(() => {
        callback()
    }, 8000);
}

juan(()=>{console.log('el jueves jugamos');})
const loguin=(callback)=>{
    setTimeout(() => {
        callback(true)
    }, 2000);
}

loguin((response)=>{if(response){console.log('esta logueado');}})