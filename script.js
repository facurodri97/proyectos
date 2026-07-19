const generar = document.getElementById("generar");
const descargar = document.getElementById("descargar");
const qrDiv = document.getElementById("qrcode");

let qr;

generar.addEventListener("click", ()=>{

    const url = document.getElementById("url").value.trim();

    if(url===""){
        alert("Ingrese un enlace.");
        return;
    }

    let regex=/^(http|https):\/\/[^ "]+$/;

    if(!regex.test(url)){
        alert("Ingrese una URL válida.");
        return;
    }

    qrDiv.innerHTML="";

    qr=new QRCode(qrDiv,{
        text:url,
        width:250,
        height:250,
        colorDark:"#003b8e",
        colorLight:"#ffffff",
        correctLevel:QRCode.CorrectLevel.H
    });

});


descargar.addEventListener("click",()=>{

    let img=qrDiv.querySelector("img");

    if(!img){

        alert("Primero genere un QR.");
        return;
    }

    let enlace=document.createElement("a");

    enlace.href=img.src;

    enlace.download="codigoQR.png";

    enlace.click();

});