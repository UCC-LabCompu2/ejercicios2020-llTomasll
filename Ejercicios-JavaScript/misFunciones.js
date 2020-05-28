/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method camabiarunidades
 * @param {string} id - El id de los imputs de metros, yardas, pies o pulgadas
 * @param {number} valor - El valor de los imputs de metros, yardas, pies o pulgadas
 * @return Valor que retorna
 */

function camabiarunidades(id,valor){
    var metro,pulgada,pie,yarda;
    if (isNaN(valor)){
        alert("Se ingreso un valor invalido "+id);
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if (id=="metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }else if (id=="pulgada"){
        pulgada = valor;
        metro = 0.0254*valor;
        pie = 0.0833333*valor;
        yarda = 0.0277778*valor;
    }else if (id=="pie"){
        pie = valor;
        metro = 0.3048*valor;
        pulgada = 12*valor;
        yarda = 0.333333*valor;
    }else if (id=="yarda") {
        yarda = valor;
        metro = 0.9144* valor;
        pulgada = 36* valor;
        pie = 3* valor;
    }
    document.lasunidades.unid_metro.value = math.round(metro*100)/100;
    document.lasunidades.unid_pulgada.value = math.round(pulgada*100)/100;
    document.lasunidades.unid_pie.value = math.round(pie*100)/100;
    document.lasunidades.unid_yarda.value = math.round(yarda*100)/100;
}

function convetirGR(id) {
    var grad,rad;

   if(valor.includes(",")){
       valor=valor.replace(",",".");
   }

    if (id=="grados"){
        grad = document.getElementById("grados").value;
        rad=(grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad=(rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = grad;
}

function mostrar_ocultar(valorMO) {
    if (valorMO==val_mostrar){
        document.getElementById("divMO").style.display = 'block';
    }
    else if (valorMO==val_ocultar) {
        document.getElementById("divMO").style.display = 'none';
    }
}

function calcularsuma() {
    var num1,num2;

    num1=document.getElementsByName("sum_num1") [0].value;
    num2=document.getElementsByName("sum_num2") [0].value;
    sum_total=document.getElementsByName("sum_total") [0].innerHTML= Number(num1)+Number(num2);
}

function calcularresta() {
    var num1,num2;

    num1=document.getElementsByName("res_num1") [0].value;
    num2=document.getElementsByName("res_num2") [0].value;
    res_total=document.getElementsByName("res_total") [0].innerHTML= Number(num1)-Number(num2);
}

function calcularmul() {
    var num1,num2;

    num1=document.getElementsByName("mul_num1") [0].value;
    num2=document.getElementsByName("mul_num2") [0].value;
    mul_total=document.getElementsByName("mul_total") [0].innerHTML= Number(num1)*Number(num2);
}

function calculardiv() {
    var num1,num2;

    num1=document.getElementsByName("div_num1") [0].value;
    num2=document.getElementsByName("div_num2") [0].value;
    div_total=document.getElementsByName("div_total") [0].innerHTML= Number(num1)/Number(num2);
}

function cargarweb() {
    var cant,unidad,urlcomp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    urlcomp = "segundaweb.html#" + cant + "#" + unidad;
    window.open(urlcomp);
}

function cargarresultado() {
    var urlcomp, can, un;

    urlcomp = window.location.href.split("/")[5];

    can = urlcomp.split("#")[1];
    un = urlcomp.split("#")[2];

    document.getElementById("dist").value = can + " "+un;
}

function dibujarcircuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xmax = canvas.width;
    var ymax = canvas.height;
    var margen = 5;

    ctx.fillStyle = "#333899";
    ctx.fillRect(0+margen,ymax-40-margen,40,40);
    ctx.arc(xmax/2,ymax/2,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#993333";
    ctx.fill();
}

var bandera;
function dibujar(event) {
    var canvas = document.getElementById("canvasadibujar");
    var ctx = canvas.getContext("2d");
    var posx = event.clientX;
    var posy = event.clientY;
    console.log(posx,posy);

    canvas.onmousedown = function(){bandera=true};
    canvas.onmouseup = function(){bandera=false};

    if(bandera){
        ctx.fillRect(posx,posy,5,5);
        ctx.fill;
    }
}

function limpiarcanvas() {
    var canvas = document.getElementById("canvasadibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function DibujarCuadriculado() {
    var canvas = document.getElementById(elementid = "myCanvas");
    var ctx = canvas.getContext("2d");

    var alturaMax = canvas.height;
    var anchuraMax = canvas.width;

    //Dibujar lineas horizanotales
    ctx.beginPath();
    for(var i=0; i<alturaMax;){
        ctx.moveTo(x=0, y=i);
        ctx.lineTo(x=anchuraMax, y=i);
        ctx.strokeStyle = "#00a6ff";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //Dibujar linaes verticales
    ctx.beginPath();
    for(var i=0; i<anchuraMax;){
        ctx.moveTo(x=i, y=0);
        ctx.lineTo(x=i, y=alturaMax);
        ctx.strokeStyle = "#e7f1f1";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //Eje X
    ctx.beginPath();
    ctx.moveTo(x=0, y=alturaMax/2);
    ctx.lineTo(x=anchuraMax, y=alturaMax/2);
    ctx.strokeStyle = "#f40bc2";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(x=anchuraMax/2, y=0);
    ctx.lineTo(x=anchuraMax/2, y=alturaMax);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();
}

function dibujarimagen(posx,posy) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posx,posy);
    var img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload = function(){
        ctx.drawImage(img,posx,posy);
    }
}

x=0;
dx=2;
function animarauto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var img = new Image();
    img.src = "images/auto.png";

    canvas.width = canvas.width;

    img.onload = function(){
        ctx.drawImage(img,x,100);
    }
    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}
