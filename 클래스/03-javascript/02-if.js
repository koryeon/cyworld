function add(x,y){
    console.log(x+3+y);
}
// add(10,5);

function hello(){
    alert("안녕하세요");
}
// hello();

const name = (aaa) => {
    if(aaa==="철수"){
        console.log("같음");
    } else{
        console.log("다름");
    }
}

const child = (age) => {
    if(age<13){
        console.log("어린이");
    }else{
        console.log("청소년");
    }
}



const check=(age)=>{
    if(age<=7){
        console.log("어린이입니다.");
    }else if(age>=8&&age<=19){
        console.log("청소년입니다.");
    }else{
        console.log("성인입니다.");
    }
}
check(29);
check(17);





function boolean(input1, input2){
    if(input1==="true" || input2==="true" ){
        console.log("true");
    }else{
        console.log("false");
    }
    
}

boolean(true, false) // true
boolean(false, true) // true
boolean(false, false) // false












function evenOdd(num){
	if (num===0) {
		console.log("Zero");
	} else if (num%2!==0) {
		console.log("Odd");
	} else if(num%2===0){
		console.log("Even");
	}
}
evenOdd(12) // "Even"
evenOdd(15) // "Odd"
evenOdd(0)  // "Zero"


function temperature(num){
	if (num>=24) {
		console.log("조금 덥습니다.");
    }else if(num>=19){
        console.log("날씨가 좋네요.");
    }
    else{
        console.log("조금 춥네요.");
    }
}
temperature(13)  // "조금 춥네요"
temperature(23)  // "날씨가 좋네요"
temperature(27)  // "조금 덥습니다"


function days(month){
	if (month%2!=0||month===8) {
		console.log("31");
    }else if(month===2){
        console.log("28");
    }else {
        console.log("30");
    }
}
days(1) // 31
days(2) // 28
days(4) // 30



function calculator(num1, num2, operator){
    
    if (operator === "+") {
            console.log(num1+num2);
	} else if(operator ==="-") {
        console.log(num1-num2);
    }else if(operator==='*'){
        console.log(num1*num2);
    }else if(operator==="/"){
        console.log(num1/num2);
    }else{
        console.log("올바른 입력이 아닙니다.")
    }

    

}

calculator(10,5, '+')  // 15
calculator(10,5, '-')  // 5
calculator(10,5, '*')  // 50
calculator(10,5, '/')  // 2
calculator(10,5, 'a')  // "올바른 입력이 아닙니다"