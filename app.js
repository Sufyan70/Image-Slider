var images = ["Images/img-6.jpg", "Images/img-1.jpg"," Images/img-2.jpg"," Images/img-3.jpg"," Images/img-4.jpg"," Images/img-5.jpg"];
var i = 0;

function nextImg(){
    i++
    if(i > images.length -1){
        i = 0;
    }
    document.getElementById('img').src = images[i];
}

function prevImg(){
    i--
    if(i< 0 ){
        i = images.length -1;
    }
    document.getElementById('img').src = images[i];
}