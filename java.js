var images = new Array("img/sunset.jpeg", "img/sea.jpeg", "img/fireflower.JPG");
var currentImageIndex = 0;
var headerElement = document.getElementById("top");
var prevButton = document.getElementById("sc-to-left") ;
var nextButton = document.getElementById("sc-to-right") ;

function showImage() {
document.getElementById("pic").src = images [currentImageIndex] ;
}
function prevImage() {
    currentImageIndex--;
    if (currentImageIndex < 0){
        currentImageIndex = images. length - 1;
    }
    showImage();
}

function nextImage(){
    currentImageIndex++;
    if (currentImageIndex >= images.length){
        currentImageIndex = 0;//カウントが最大の時、初期値に戻す
    }
    showImage();
}

function autoNextImage(){
    nextImage();
}

setInterval(autoNextImage, 5000);//5秒ごとに画像の切り替え
showImage();//初期表示