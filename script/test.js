let imgstorage = [{id:0,nameimg:"./img/1.jpg"}, // Хранилище картинок
                  {id:1,nameimg:"./img/2.jpg"},
                  {id:2,nameimg:"./img/3.jpg"},
]
let imgstorageoldnumber = [] // старые значения массива
let paddingLeftimg = "4%" // отступы между картинками
let imgstoragenewnumber = [] // новое значение массива
let a = 0 // указывает сколько нужно добавить картинок


let galerystorage = document.querySelector("#board .galerystorage"); // Получает свойства объекта родительского div
let widthparent = galerystorage.offsetWidth; // Получает ширину объекта родительского div
let heightparent = galerystorage.offsetHeight; // Получает высоту объекта родительского div

// Правая кнопка
function Right(){
    DeleteOldImg()
    a = imgstorage.length - 1 - imgstoragenewnumber.id
    if(imgstoragenewnumber.id == imgstorage.length - 1){
      a = imgstorage.length
      if(a > 4){
        a = 4
        for(i=0;i<a;i++){
            imgstoragenewnumber = imgstorage[i]
            CreateNewImg()
            imgstorageoldnumber.push(imgstoragenewnumber)
         }
      }
      else{
        for(i=0;i<a;i++){
            imgstoragenewnumber = imgstorage[i]
            CreateNewImg()
            imgstorageoldnumber.push(imgstoragenewnumber)
         }
      }
    }
    else{
        for(i=0;i<a;i++){
           imgstoragenewnumber = imgstorage[imgstoragenewnumber.id + 1]
           CreateNewImg()
           imgstorageoldnumber.push(imgstoragenewnumber)
        }
    }
}
function Left(){
    DeleteOldImg()
    a = imgstorage.length - 1 - imgstoragenewnumber
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
    imgstoragenewnumber.length = 0
    for(let i=0; i<imgstorageoldnumber.length; i++){
    let galleryStorage = document.getElementById("galerystorage");
    let imgtoremove = document.getElementById(imgstorageoldnumber[i].id);
    galleryStorage.removeChild(imgtoremove);
    }
    imgstoragenewnumber = imgstorageoldnumber[imgstorageoldnumber.length - 1]
    imgstorageoldnumber.length = 0
}

function Beginning(){
    imgstoragenewnumber = imgstorage[0]
    for( let i=0; i<4;i++){ 
        imgstoragenewnumber = imgstorage[i]
        CreateNewImg()
        imgstorageoldnumber.push(imgstoragenewnumber)
    }
    imgstoragenewnumber.length = 0
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
