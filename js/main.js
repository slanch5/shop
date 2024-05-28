

const Types_Btn_item = document.querySelectorAll('.tabs_btn_item');
const Types_Ctx_item = document.querySelectorAll('.tabs_ctx_item');

Types_Btn_item.forEach(function (ela) {

   ela.addEventListener('click', open);

})



function open(evt) {

   const Tabtar = evt.currentTarget;
   const button = Tabtar.dataset.button;

   Types_Btn_item.forEach(function (item) {
      item.classList.remove('tabs_btn_item--active')
   });

   Tabtar.classList.add('tabs_btn_item--active')

   Types_Ctx_item.forEach(function (item) {
      item.classList.remove('tabs_ctx_item--active')
   });

   document.querySelector(`#${button}`).classList.add('tabs_ctx_item--active')

}

const MenuBtn = document.querySelector('.nav_btn');
const Menu = document.querySelector('.menu_list');

MenuBtn.addEventListener('click', () => {
   Menu.classList.toggle('menu_list--active')
})



const swiper = new Swiper(".swiper", {
   pagination: {
      el: ".swiper-pagination"
   }

});

