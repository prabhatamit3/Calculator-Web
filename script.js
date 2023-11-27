//primitives=number,string,null,undefined,boolean
//reference= [] {} ()
// arr=[1,2,3,4,5,6,7,8,9]
// function showelement(){
//     //alert(arr.pop());
//     var input=document.getElementById("phoneNumber")
//     if (true) {  
//         var pno = input.value; 
//         const regex = /^(99|91|62)\d{8}$/ ; 
//         var test= regex.test(phoneNumber);  
//         alert(pno +' is '+test);  
//       }  
//     //alert(pno)
// } 
var cnum=""
var onum=""
var operation=""
document.addEventListener("DOMContentLoaded", function() {  
  var buttons = document.getElementsByClassName("num");  

  for (var i = 0; i < buttons.length; i++) {  
      buttons[i].addEventListener("click", function() {  
          var value = this.innerHTML ;
          changeValue(value);  
      });  
  }  
});  

function changeValue(value) {  
  var paragraph = document.getElementById("valuedisplay");  
  
  //console.log(value)
   
  //var currentInput=paragraph.innerHTML;
  
  
  //console.log(value)
  switch (value){
    case '+':
      if(cnum!=''){
        onum=cnum
      }
      
      cnum=""
      operation="add"
      currentInput=null
      console.log('+');
      break;
    case '-':
      if(cnum!=''){
        onum=cnum
      }
      cnum=""
      operation="subtract"
      currentInput=null
      console.log('-');
      break;
    case '*':
      if(cnum!=''){
        onum=cnum
      }
      cnum=""
      operation="multiply"
      currentInput=null
      console.log('/');
      break;
    case '/':
      if(cnum!=''){
        onum=cnum
      }
      cnum=""
      operation="divide"
      currentInput=null
      console.log('*');
      break;
    case '=':
      if(cnum!='' & onum!='' & value=='='){
        onum=calculate(onum, cnum, operation)
        paragraph.innerHTML=onum
      }
      cnum=""
      console.log("result"+onum);
      break;
    default:
      cnum=cnum+value;
      paragraph.innerHTML=cnum
    

  }
  console.log("cnum= "+cnum);
  console.log("0num= "+onum);
  console.log("operation= "+operation);
  
  //console.log("current input= "+currentInput);
  
  

}
function calculate(a, b, operation) {  
  var numA = parseFloat(a);  
  var numB = parseFloat(b);  
  
  if (isNaN(numA) || isNaN(numB)) {  
    throw new Error("Invalid input. Please provide valid numbers.");  
  }  
  
  switch (operation) {  
    case "add":  
      return numA + numB;  
    case "subtract":  
      return numA - numB;  
    case "multiply":  
      return numA * numB;  
    case "divide":  
      if (numB === 0) {  
        throw new Error("Division by zero is not allowed.");  
      }  
      return numA / numB;  
    default:  
      throw new Error("Invalid operation.");  
  }  
}  

  




// function handleClick(value) {  
//     const valuedisplay = document.getElementById('valuedisplay');  
    
//     alert(valuedisplay.innerHTML)
//     switch (value) {  
//       case '=':  
//         try {  
//           valuedisplay.innerHTML = eval(valuedisplay.innerHTML);  
//         } catch (error) {  
//           valuedisplay.innerHTML = 'Error';  
//         }  
//         break;  
//       default:  
//         valuedisplay.innerHTML += value;  
//     }  
//   }  
  