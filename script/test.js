let imgstorage = [{id:0,nameimg:"./img/1.jpg"}, // Хранилище картинок
                  {id:1,nameimg:"./img/2.jpg"},
                  {id:2,nameimg:"./img/3.jpg"},
                  {id:3,nameimg:"./img/4.jpg"}
]
let imgstorageoldnumber = []
let paddingLeftimg = "4%" // отступы между картинками
let imgstoragenewnumber = [] // новое значение массива
let a = 0


let galerystorage = document.querySelector("#board .galerystorage"); // Получает свойства объекта родительского div
let widthparent = galerystorage.offsetWidth; // Получает ширину объекта родительского div
let heightparent = galerystorage.offsetHeight; // Получает высоту объекта родительского div

// Правая кнопка
function Right(){
    DeleteOldImg
    a = imgstorage.length - Math.max(imgstoragenewnumber.id)
    if (a > 4){
        a = 4
       imgstoragenewnumber = imgstorage[0]
        for( let i=0; i<a;i++){
            CreateNewImg()
            imgstorageoldnumber.push(imgstoragenewnumber.id + 1)
        }
        delete imgstoragenewnumber
    }
    else{
        for (let i=0; i<a;i++){
            imgstoragenewnumber = imgstorage[imgstoragenewnumber.id + 1]
            CreateNewImg()
            imgstorageoldnumber.push(imgstoragenewnumber.id + 1)
        }
        delete imgstoragenewnumber
    }

}

// Создает новый объект img
function CreateNewImg(){
    let galerystorage = document.getElementById('galerystorage');
    let img = document.createElement('img');
    img.src = imgstoragenewnumber.nameimg
    img.id = imgstoragenewnumber.id
    img.className = "imganimationgalerystorage";
    img.style.paddingLeft = paddingLeftimg;
    img.style.height = '80%'; 
    img.style.width = '20%'; 
    img.style.paddingTop ='2%';
    galerystorage.appendChild(img);
}
// Удаляет старые объект img 
function DeleteOldImg(){
    for(let i=0; i<imgstorageoldnumber.length; i++){
    let galleryStorage = document.getElementById("galerystorage");
    let imgtoremove = document.getElementById(imgstorageoldnumber[i]);
    galleryStorage.removeChild(imgtoremove);
    }
    imgstoragenewnumber.id = Math.max(imgstorageoldnumber.id)
    if(imgstoragenewnumber.id == 0){
        imgstoragenewnumber.id = imgstorage.length
    }
    if(imgstoragenewnumber.id == imgstorage.length){
        imgstoragenewnumber.id = 0
    }
    imgstorageoldnumber.length = 0
}

function Beginning(){
    imgstoragenewnumber = imgstorage[0]
    for( let i=0; i<4;i++){ 
        imgstoragenewnumber = imgstorage[i]
        CreateNewImg()
        imgstorageoldnumber.push(imgstoragenewnumber.id)
    }
    delete imgstoragenewnumber
}






































/*function test(){
     let newimg = document.createElement('img'); 
     newimg.src = ""
     newimg.style.height = '100%'; 
     newimg.style.width = '30%'; 
     document.getElementById('galerystorage').appendChild(newImg)
}*/
/*
function OneBoar() {
    let oneboarelement = document.getElementById("oneboarelement")
    oneboarelement.innerHTML = element[a]
    window.onload = OneBoar
}
*/
