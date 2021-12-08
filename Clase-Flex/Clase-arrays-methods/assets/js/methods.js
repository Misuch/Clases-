//Array
var names = ["Andrea","Maria","Pedro","Juan"];
var content = document.getElementById("array-content");
var newContent = document.getElementById("new-arrays-content");
//Mostrar datos de array al cargar pagina
showData(names,content);

//Variable de botones
let btnPush = document.getElementById("btn-push");
let btnPop = document.getElementById("btn-pop");
let btnUnshift = document.getElementById("btn-unshift");
let btnShift = document.getElementById("btn-shift");
let btnSlice = document.getElementById("btn-slice");
let btnConcat = document.getElementById("btn-concat");
let btnSplice = document.getElementById("btn-splice");

//Anclar funciones para los botones
btnPush.onclick = fpush;
btnPop.onclick = fpop;
btnUnshift.onclick = fUnshift;
btnShift.onclick = fShift;
btnSlice.onclick = fSlice;
btnConcat.onclick = fConcat;
btnSplice.onclick = fSplice;

//Funciones
function fpush(e){
    names.push("Margarito");
    showData(names,content);
    
}
function fpop(e){ 
    names.pop();
    showData(names,content);
}
function fUnshift(e){
    names.unshift("Margarita");
    showData(names,content);
}
function fShift(e){
    names.shift();
    showData(names,content);
}
function fSlice(e){
    b = 0;
    e = 2;
    newArray = names.slice(b,e);ca
    showData(newArray,newContent);
}
function fConcat(e){
    colorsArray = ["Rojo","Azul","Verde"];
    mergeArray = names.concat(colorsArray);
    showData(mergeArray,newContent);
}
function fSplice(e){
    b = 1;
    c = 3;
    newString = "Juanito";
    names.splice(b,c,newString);
    showData(names,newContent);
}
function showData(array,div){
    let lst="";
    for(i=0;i < array.length;i++){
        lst += "<p class='item'>"+array[i]+"</p>";
    }
    content.innerHTML = lst;
}