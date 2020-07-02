const numbers=document.querySelectorAll('.number');
const calculatorscreen=document.querySelector('.calculator-screen');
const operators=document.querySelectorAll(".operator");
const equal=document.querySelector(".eql-sign");
const allclr=document.querySelector(".all-clear");
const percent=document.querySelector(".percentage");
const deci=document.querySelector(".decimal");

let currentinput="0";
let previnput="0";
let calculationoperator="";

arrayLength2=operators.length;
arrayLength=numbers.length;
function inputnumber(n)
{
	if(currentinput==='0')
	{
		currentinput=n;
	}
	else
	{
		currentinput+=n;
	}
}
function updatescreen(no)
{
	calculatorscreen.value=no;
}
function inputoperator(op)
{
	previnput=currentinput;
	currentinput="0";
	calculationoperator=op;
} 
function calculateval()
{
	let result=0;
	switch(calculationoperator)
	{
		case '+':
		result=parseFloat(previnput)+parseFloat(currentinput);
		break;
		case '-':
		result=parseFloat(previnput)-parseFloat(currentinput);
		break;
		case '*':
		result=parseFloat(previnput)*parseFloat(currentinput);
		break;
		case '/':
		result=parseFloat(previnput)/parseFloat(currentinput);
		break;
		
	}
	currentinput=result.toString();
	calculationoperator="";
}
function allclear()
{
	currentinput='0';
	previnput='0';
	calculationoperator="";
}
function percentcalc()
{
	let temp=0;
	
	temp=(parseInt(previnput)*parseInt(currentinput))/100;
	
	
	currentinput=temp.toString();
	calculationoperator="";
}

for(let i=0 ; i<arrayLength ; i++)
{
	numbers[i].addEventListener("click",function()
	{
		inputnumber(numbers[i].value);
		updatescreen(currentinput);
	})
}
for( let j=0 ; j<arrayLength2 ; j++)
{
	operators[j].addEventListener("click",function()
	{
		inputoperator(operators[j].value);
	})
}

equal.addEventListener("click",function()
{
	calculateval();
	updatescreen(currentinput);
})
allclr.addEventListener("click",function()
{
	allclear();
    updatescreen(currentinput);
})
percent.addEventListener("click",function()
{
	percentcalc();
	updatescreen(currentinput);
})
deci.addEventListener("click",function()
{
	inputnumber(deci.value);
	updatescreen(currentinput);
})