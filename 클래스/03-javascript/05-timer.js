// const timer=()=>{
//     let count = 180;
    
//     setInterval(()=>{
//         if(count>=0){
            
//             let min = count/60;
//             let sec = count %60;
//             count =count-1;
       
//        document.getElementById("number").innerText =Math.floor(min)+":"+(Math.floor(sec));
        
//       }
//     },1000);
     
 
   

// }; 
//    setTimeout =>몇초 뒤에 우리가 만든 기능 실행
//    setInterval =>몇초 마다 우리가 만든 기능 실행




const ddd=()=>{

    const aaa= String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("num").innerText=aaa
    
    let a=10;
    setInterval(()=>{
        
       if(a>0){
       a=a-1;
       document.getElementById("done").innerText=a;
       }else if(a===0){
       document.getElementById("btn").setAttribute("disabled",true);
       }
    
    },1000);


};

