// las  funcines deben tener un parentesis junto al nombre
function Operacionesbasicas(){
    var a;
    var b;
    var SUMA;
    var RESTA;
    var MULTIPLICACION;
    var DIVISION;

    a = parseInt(prompt("por favor ingrese el primer valor"));
    b = parseInt(prompt("por favor ingrese el sengundo valor"));

    SUMA = a +b;
    RESTA = a + b;
    MULTIPLICACION = a * b;
    DIVISION = a / b;

    alert("la suma total es: " + SUMA + "la resta es: " + RESTA + "la multplicacion es: " + MULTIPLICACION + " la division es: " + DIVISION );
    
}
function Cuadradodeunnumero(){
    var a = 0;
    var c = 0;
    a = parseInt(prompt("ingrese el numero a validar"));
    c = a * a;
    alert("el cuadrado del numero ingresado es: " + c);

}
function Areadeuntriangulo(){
    var a;
    var b;
    var c;
    b = parseInt(prompt("ingrese la base"));
    a = parseFloat(prompt("ingrese la altura"));
    c = (b * a) /2;
    alert("el area del triangulo es: " + c);
}
function Conversiondeunidades(){
    var a;
    var b;
    var c;
    a = parseInt(prompt("ingrese pulgadas"));
    b = a * 2.54;
    c = a * (1/ 39.370) * (1/1000);
    alert(" las pulgadas en centimetros es " + b);
    alert(" las pulgadas en kilometros es " + c);

}
function Serviciomilitar(){
    var edad = parseInt(prompt("por favor ingresar su edad"));
    var genero = prompt("por gavor ingresar Masculino o Femenino");
    if (genero == "Femenino"){
        alert("No eres apta para el servicio");
    }else{
        if (edad>17 && edad>25) {
            alert("eres apto para prestar el servicio militar");
        }else{
            alert("No eres aprto por edad")
        }
    }
}

function Anodenacimiento(){
   
    var año=2022;
    var edad=0;
    
    edad=parseInt(prompt("ingrese su edad"));

    B=año-edad

    alert("su año de nacimiento es:" + B);
}

function Promedio(){
    alert("Algoritmo para saber si aprobo o reprobo una materia");
var Na;
var Nb;
var Nc;
var Nd;
var Nf;
var Ng;
var Nh;
var suma;
var promedio;

Na = parseInt(prompt("Ingrese el primer nota"));
Nb = parseInt(prompt("Ingrese el segunda nota"));
Nc = parseInt(prompt("Ingrese el tercera nota"));
Nd = parseInt(prompt("Ingrese el cuarta nota"));
Nf = parseInt(prompt("Ingrese el quinta nota"));
Ng = parseInt(prompt("Ingrese el sexta nota"));
Nh = parseInt(prompt("Ingrese el septima nota"));

suma = (Na+Nb+Nc+Nd+Nf+Ng+Nh);
promedio = suma/7;

 if (promedio<3 ) {
    alert("REPROBO, su nota es:" + promedio);}
else {
    alert("APROBO, su nota es: " + promedio);}

}
function Banco(){

  var inver;
  var ano;
  var gana;
  inver = parseInt(prompt("ingrese el valor a invertir"));
  ano = parseInt(prompt("ingrese los años"));
  gana = inver * 0.008
  ano1 = ano * 12
  total1 = ano1 * gana
  total2 = total1 + inver

  alert("el valor de sus ganancias es de: " + total1 );
  alert ("el total de su inversion y sus ganacias son de: " + total2 );
    
}
function Ventadescuento(){
  var Kilos;
    var div;
    var div2;
    var div3;
   
 
    alert("algoritmo para saber cuanto descuento recibe en su compra")

    var Kilos = parseInt(prompt("ingrese numero de kilos"))
    div = (10/100)*4500;
    
    div2 =(15/100)*4500;
    
    div3 =(20/100)*4500;
    
    if (Kilos <3){
        alert("no se le da descuento");
    }else{
        if(Kilos >2 && Kilos <6){
            alert("Recibe un descuento de 10% a su compra se le descuanta: " + div);
        }if(Kilos >5 && Kilos <11){
            alert("Recibe un descuento de 15% a su compra se le descuanta: " + div2);
        }if(Kilos>10){
            alert("recibe un descuento de 20% a su compra se le descuanta: " + div3)
        }

    }
    
}
function Cantidadnumero(){
  alert("algoritmo para saber la cantidad de un numero")
  
    num=0
    total=0
    num= parseInt(prompt("ingrese numeros"))
    while (num >=1){
        num=num/10
        total=total+1

    
    }
    alert("los numeros ingresados fueron" + total);
    
}
function Salariosemanal(){
  var horas;
    var Hora;
    var horaextra;
 

    alert("Algoritmo para saber cuanto se le paga a la semana a un obrero")
    var horas = parseInt(prompt("ingrese horas trabajadas"))
    Hora = horas*10000;
    horaextra = (horas*20000)-400000;
   

    if(horas <41){
        alert("su paga por las horas trabajadas es : " + Hora );
    }else{
        if(horaextra>40){
            alert("su paga con horas extra es: " + horaextra);
        }
    }
    
}