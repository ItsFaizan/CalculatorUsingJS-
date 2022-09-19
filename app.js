
function display(value) {
    document.getElementById("result").value += value;
}

function factorial(x){
    let fact = 1;
    for (i = 1; i <= x; i++) {
        fact *= i;
    }
     
    document.getElementById("result").value = fact;
}
var input;
function factorial1(x){
     input = x;
    let fact1 = 1;
    for (i = 1; i <= x; i++) {
        fact1 *= i;
    }
    return fact1;
}
var input1;
function factorial2(x){
    input1 = x;
   let fact1 = 1;
   for (i = 1; i <= x; i++) {
       fact1 *= i;
   }
   return fact1;
}
function permutation1(y){
    
    if(y[1]!="P"){
        let p3 = y[0];
        let p4 = y[1];
        let result1 = p3.concat(p4);
      return factorial1(result1)
     
      }
      
      else{
        return factorial1(y[0])
       
      }
}

var rel;
var rel1;
var rel2;
var resultper
function permutation2(y1){
 rel = input-y1;
 rel1= factorial1(rel);
resultper = rel2/rel1;
document.getElementById("result").value = resultper;
}



function combination1(z){
    
    if(z[1]!="C"){
        let p3 = z[0];
        let p4 = z[1];
        let result1 = p3.concat(p4);
      return factorial2(result1)
     
      }
      
      else{
        return factorial2(z[0])
       
      }
}

var cel;
var cel1;
var cel2;
var cel3;
var cel4;
var resultper1

function combination2(z1){
    cel = input1-z1;
    cel3=factorial2(z1);
    cel1= factorial2(cel);
    cel4 = cel3*cel1;
   resultper1 = cel2/cel4;
   document.getElementById("result").value = resultper1;
}
function evaluation() {
    
    var pin = document.getElementById("result").value;
   
   if(pin.includes("!")){
     if(pin[1]!="!"){
        let p1 = pin[0];
        let p2 = pin[1];
        let result = p1.concat(p2);
      factorial(result)
      }
      
      else{
        factorial(pin[0])
      }
    }

    else if(pin.includes("P")){
        rel2 = permutation1(pin);
        
        if(pin[1]=="P"){
            if(pin[3]!=null){
                let p1 = pin[2];
                let p2 = pin[3];
                let resul = p1.concat(p2);
                permutation2(resul);
              }
              else{
            permutation2(pin[2]);
              }
        }
        if(pin[2]=="P"){
            if(pin[4]!=null){
                let p1 = pin[3];
                let p2 = pin[4];
                let resul = p1.concat(p2);
                permutation2(resul);
              }
              else{
            permutation2(pin[3]);
              }
            }
        
    }

    else if(pin.includes("C")){
        cel2 = combination1(pin);
        
        if(pin[1]=="C"){
            if(pin[3]!=null){
                let p1 = pin[2];
                let p2 = pin[3];
                let resul = p1.concat(p2);
                combination2(resul);
              }
              else{
            combination2(pin[2]);
              }
        }
        if(pin[2]=="C"){
            if(pin[4]!=null){
                let p1 = pin[3];
                let p2 = pin[4];
                let resul = p1.concat(p2);
                combination2(resul);
              }
              else{
            combination2(pin[3]);
              }
            }
    }

    else{
        var quater = eval(pin);
        document.getElementById("result").value = quater;

    }
}

function clearScreen() {
    document.getElementById("result").value = "";
}