function semaPhore(){
    let door = true;
    return function inner(){
        if(door===false){
            console.log("function is busy");
        }else{
            door = false;
            new Promise((res,rej)=>{
                    setTimeout(()=>{
                        door=true
                        console.log("door opened")
                    },3000)   
            });     
        }  
    }
}
const resorce = semaPhore()

let timer = setInterval(()=>{
    resorce()
},1000);
setTimeout(()=>{
    clearInterval(timer)
},15000)