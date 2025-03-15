//back to top btn
var btn = $('#button');

$(window).scroll(function() {
if ($(window).scrollTop() > 300) {
    btn.addClass('show');
} else {
    btn.removeClass('show');
}
});

btn.on('click', function(e) {
e.preventDefault();
$('html, body').animate({scrollTop:0}, '300');
});

// 搜尋欄展開函式
const SearchBoxFocus=()=>{
  //search-box-focus:展開搜尋欄的CSS
  $(".search-container  .search-box").toggleClass("search-box-focus"); 
  //search-box-not-focus:未展開搜尋欄的CSS
  $(".search-container  .search-box").toggleClass("search-box-not-focus");
}
//location.pathname取得目前頁面路徑,判斷是否為search-result.html
if(!(location.pathname.indexOf('search-result')>-1)){
  // 當前頁面不是search-result.html時，加入click事件
  $('.search-container .search-box').on('click',SearchBoxFocus); 
} else {
  // 當前頁面是search-result.html時，直接展開搜尋欄
  SearchBoxFocus();  
}



// admin-btn
// 取得各個.info-block中的選單按鈕(.button)
$(".admin-btn .admin-btn-main").each(function(item) {
  //針對每個選單按鈕(.button)設定事件
  $(this).on('click', function(e){
    //因為ul與選單按鈕(.button)同一層，所以必須先取得父層(parent())，才能透過父層取得ul
    $(this).parent().children("div").toggleClass("hide"); 
  })
});



//horizonal scroll
const slider = document.querySelector('.card-flex');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});



document.addEventListener("touchstart", function(){}, true);


