//スライドショー
const swiper = new Swiper(".swiper", {
  speed: 200,
  loop: true,
  slidesPerView: 1.8,
  centeredSlides: true,
  spaceBetween: 20,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



//indexランダムイメージ
const imgRandom = document.getElementById('imgRandom');
const imgs = [
    '../img_photo/img_1.jpg',
    '../img_photo/img_6.jpg',
    '../img_photo/img_7.jpg',
    '../img_photo/img_19.jpg',
    '../img_photo/img_27.jpg',
    '../img_photo/img_9.jpg'
];
const imgNo = Math.floor(Math.random() * imgs.length);
imgRandom.src = imgs[imgNo];




// 画像ファイルを表示するフォルダのパス
var imageFolder = '../img_photo/';

 // フォルダ内の画像ファイルを取得して表示
function displayImageFiles(){
   var imageContainer = document.getElementById('imageContainer');
                    
      fetch(imageFolder)
        .then(response => response.text())
        .then(data => {
          var parser = new DOMParser();
          var htmlDocument = parser.parseFromString(data, 'text/html');
          var imageTags = htmlDocument.querySelectorAll('a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]');
                    
          imageTags.forEach(function(imageTag){
            var imagePath = imageFolder + imageTag.getAttribute('href');
            var imgElement = document.createElement('img');
              imgElement.src = imagePath;
              imgElement.alt = imageTag.innerText;
                    
            var linkElement = document.createElement('a');
              linkElement.href = imagePath;
              linkElement.appendChild(imgElement);
                    
              imageContainer.appendChild(linkElement);
           });
          })
  .catch(error => {
    console.error('Error:', error);
  });
}
displayImageFiles();


/*
$(".inner_item").hover(
  function(){
    if($(this).hasClass("active")){
      $(".d-none").addClass("active").removeClass("d-none");
      $(this).addClass("d-none").removeClass("active");
    }
});
*/

// フォームリセット
function resetform(){
  document.getElementById("form").reset();
}