let ac = document.getElementById("ac");
ac.onclick = AC;

let p_left = document.getElementById("p-left");
p_left.onclick = PL;

let p_right = document.getElementById("p-right");
p_right.onclick = PR;

let del = document.getElementById("del");
del.onclick = DEL;

let seven = document.getElementById("7");
seven.onclick = Seven;

let eight = document.getElementById("8");
eight.onclick = Eight;

let nine = document.getElementById("9");
nine.onclick = Nine;

let mult = document.getElementById("mult");
mult.onclick = Mult;

let four = document.getElementById("4");
four.onclick = Four;

let five = document.getElementById("5");
five.onclick = Five;

let six = document.getElementById("6");
six.onclick = Six;

let add = document.getElementById("add");
add.onclick = Add;

let one = document.getElementById("1");
one.onclick = One;

let two = document.getElementById("2");
two.onclick = Two;

let three = document.getElementById("3");
three.onclick = Three;

let sub = document.getElementById("sub");
sub.onclick = Sub;

let point = document.getElementById(".");
point.onclick = Point;

let zero = document.getElementById("0");
zero.onclick = Zero;

let divs = document.getElementById("divs");
divs.onclick = Division;

let equ = document.getElementById("equ");
equ.onclick = Equal;

let RTN;

//the following code wipe the face of the calculator//

function AC(){
    let num = "";
    document.getElementById('display').value = num;
    document.getElementById('display2').value = num;
}



function PL(){
    let num = "(";
    document.getElementById('display').value += num;
}



function PR(){
    let num = ")";
    document.getElementById('display').value += num; 
}



function DEL(){
    document.getElementById('display').value = document.getElementById("display").value.toString().slice(0,-1);
}



function Seven(){
    let num = 7;
    document.getElementById('display').value += num;
}



function Eight(){
    let num = 8;
    document.getElementById('display').value += num;
}



function Nine(){
    let num = 9;
    document.getElementById('display').value += num;
}



function Mult(){
    let num = "*";
    document.getElementById('display').value += num;
}



function Four(){
    let num = 4;
    document.getElementById('display').value += num;
}



function Five(){
    let num = 5;
    document.getElementById('display').value += num;
}



function Six(){
    let num = 6;
    document.getElementById('display').value += num;
}



function Add(){
    let num = "+";
    document.getElementById('display').value += num;
}



function One(){
    let num = 1;
    document.getElementById('display').value += num;
}



function Two(){
    let num = 2;
    document.getElementById('display').value += num;
}



function Three(){
    let num = 3;
    document.getElementById('display').value += num;
}



function Sub(){
    let num = "-";
    document.getElementById('display').value += num;
}



function Point(){
    let num = ".";
    document.getElementById('display').value += num;  
}



function Zero(){
    let num = 0;
    document.getElementById('display').value += num;
}



function Division(){
    let num = "/";
    document.getElementById('display').value += num; 
}



function Equal(){
    let num = eval(document.getElementById('display').value);
    document.getElementById('display2').value = num;

}