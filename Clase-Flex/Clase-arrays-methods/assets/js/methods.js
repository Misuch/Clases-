//Array
var names = ["Andrea","Maria","Pedro","Juan","Martina"];
var numbers = ["1","5","18","2","4"];
var numeros = ["1","2","3","4","5"];

var content = document.getElementById("array-content");
var newContent = document.getElementById("new-arrays-content");
var content2 = document.getElementById("array-index-methods"); 
var results = document.getElementById("results-contents");
var ejerci = document.getElementById("contents-ejerci");
var content3 = document.getElementById("show");

//Mostrar datos de array al cargar pagina
showData(names,content);
showData(names,content2);
showData(numbers,ejerci);
showData(numeros,content3);
//Variable de botones
let btnPush = document.getElementById("btn-push");
let btnPop = document.getElementById("btn-pop");
let btnUnshift = document.getElementById("btn-unshift");
let btnShift = document.getElementById("btn-shift");
let btnSlice = document.getElementById("btn-slice");
let btnConcat = document.getElementById("btn-concat");
let btnSplice = document.getElementById("btn-splice");
//-------------------------------------------------------
let btnIndexOf = document.getElementById("btn-Indexof");
let btnLastindexOf  = document.getElementById("btn-Lastindexof");
let btnIncludes = document.getElementById("btn-Includes");
let btnFind = document.getElementById("btn-Find");
let btnFindIndex = document.getElementById("btn-FindIndex");
let btnFilter = document.getElementById("btn-Filter");
//-------------------------------------------------------
let btnSort = document.getElementById("btn-Sort");
let btnReverse = document.getElementById("btn-Reverse");
let btnSort1 = document.getElementById("btn-Sort1");
//-------------------------------------------------------
let btnMap = document.getElementById("btn-map");
let btnReduce = document.getElementById("btn-reduce");

//Variable de input
var inputSearch = document.getElementById("ip-search").value;
var inputInt = document.getElementById("ip-index").value;

//Anclar funciones para los botones
btnPush.onclick = fpush;
btnPop.onclick = fpop;
btnUnshift.onclick = fUnshift;
btnShift.onclick = fShift;
btnSlice.onclick = fSlice;
btnConcat.onclick = fConcat;
btnSplice.onclick = fSplice;
//---------------------------------------------------------
btnIndexOf.onclick = fIndexOf;
btnLastindexOf.onclick = fLastIndexOf;
btnIncludes.onclick = fIncludes;
btnFind.onclick = fFind;
btnFilter.onclick = fFilter;
//----------------------------------------------------------
btnSort.onclick = fSort;
btnReverse.onclick = fReverse;
btnSort1.onclick = fSort1;
//----------------------------------------------------------
btnMap.onclick = fMap;
btnReduce.onclick = fReduce;

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

function fIndexOf(){
    var inputSearch = document.getElementById("ip-search").value;
    let mensaje = "El ??ltimo ??ndice de ese ??tem es"+i;
    results.innerHTML = "<span>"+mensaje+"</span>"
}

function fLastIndexOf(){
    var inputSearch = document.getElementById("ip-search").value;
    let i = names.lastIndexOf(inputSearch);
    let mensaje = "El ??ltimo indice de este item es"+i;
    results.innerHTML = "<span>"+mensaje+"</span>" 
}

function fIncludes(){
    var inputSearch = document.getElementById("ip-search").value;
    var inputInt = document.getElementById("ip-index").value;
    let number=0;
    if(inputInt!=""){
        number = parseInt(inputInt);
    }
    let i = names.lastIndexOf(inputSearch);
    let mensaje = "Este elemento no se encuentra";
    if(i){
        mensaje = "Este valor si se encuentra";
    }
    results.innerHTML = "<span>"+mensaje+"</span>"
}

function fFind(){
    var inputInt = document.getElementById("ip-index").value;
    let number = 0;
    if (inputInt!=""){
        number = parseInt(inputInt);
    }
    let s = names.find(element => element.length > number);
    let mensaje = "Ninguno de los elementos cumple con la condici??n";
    if(s != null){
        mensaje = "El primer valor encontrado es"+s;
    }
    results.innerHTML = mensaje;
}
function fFilter(){
    var inputInt = document.getElementById("ip-index").value;
    let number = 0;
    if (inputInt!=""){
        number = parseInt(inputInt);
    }
    let s = names.filter(element => element.length > number);
    let mensaje = "Ninguno de los elementos cumple con la condici??n";
    if(s.length > 0){
        showData(s,results);
    }
    else{
        results.innerHTML = mensaje;
    }
}
function fSort1(){
    numbers.sort(),
    showData(numbers,ejerci);
}
function fSort(){
    numbers.sort(Comparacion);
    showData(numbers,ejerci);
    function Comparacion(a, b){
        return a - b;
    }
}
function fReverse(){
    numbers.reverse();
    showData(numbers,ejerci);
}
function fMap(e){
    var square = numeros.map(x => x * x);
    content3.innerHTML= square;
}
function fReduce(e){
    var reducer = numeros.reduce(function(a, b){ return a + b; });
    content3.innerHTML= reducer;
}
function showData(array,div){
    let lst="";
    for(i=0;i < array.length;i++){
        lst += "<p class='item'>"+array[i]+"</p>";
    }
    div.innerHTML = lst;
}