var content = document.getElementById("contenedor")
var content2 = document.getElementById("contenedor2")
var content3 = document.getElementById("contenedor3")
let frutas = ["Manzana","Fresa","Sandia" ,"Platano"]
showData(frutas,content2);
// botones
let btnR=document.getElementById("btn-resta")
let btnS=document.getElementById("btn-suma")
let btnB=document.getElementById("btn-barra")
let btnC=document.getElementById("btn-coma")
let button= document.getElementById("btn-split")
button.onclick=fsplit;
function fsplit(){
    let input=document.getElementById("input").value;
    let input1=document.getElementById("input1").value;
    
    // content3.innerHTML=input.split(' ',2) }
    var a=input.split("",input1);
    showData(a , content3)
    console.log( a)

}
btnB.onclick=fbarra;
btnR.onclick=fresta;
btnS.onclick=fsuma;
btnC.onclick=fcoma;

function fsuma(){
    content.innerHTML= frutas.join("+");
    console.log( frutas.join("+"))
}
function fcoma(){
    content.innerHTML= frutas.join(",");
    console.log( frutas.join(","))

}
function fresta(){
    content.innerHTML= frutas.join("-")
    console.log( frutas.join("-"))

}
function fbarra(){
    content.innerHTML= frutas.join("/");
    console.log( frutas.join("/"))

}




function showData(array,div){
    let lst="";
    
    for(i=0;i < array.length;i++){
        lst += "<p class='item'>"+array[i]+"</p>";
    }
    div.innerHTML=lst;
}
