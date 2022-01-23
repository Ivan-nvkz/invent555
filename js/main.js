'use strict';

document.addEventListener('DOMContentLoaded', () => {







   //  ДАТА ПИКЕР----------------------------------------------------------
   // Календарь в форме ()
   new AirDatepicker('.date__rent', {
      buttons: ['today', 'clear'],
      //  timepicker: true,
      toggleSelected: true,
      multipleDates: 2,
      // range: true,
      multipleDatesSeparator: ' - ',
      position: 'top right',
      minDate: new Date(),
      onSelect({ date, formattedDate, datepicker, }) {
         // datepicker.hide();
      }
   });




   const swiper = new Swiper('.swiper', {
      // Optional parameters
      // direction: 'vertical',
      // direction: 'horizontal',
      loop: true,
      speed: 800,
      // If we need pagination
      // pagination: {
      //    el: '.swiper-pagination',
      //    type: "progressbar",
      // },
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      // And if we need scrollbar
      // scrollbar: {
      //    el: '.swiper-scrollbar',
      // },
      // Количество слайдов для показа
      // slidesPerView: 3,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
      },
      // pagination: {
      //    el: ".swiper-pagination",
      //    type: "progressbar",
      // },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
      },

   });

   const typesRentSlider = new Swiper('.types-rent__slider', {
      // Optional parameters
      // direction: 'vertical',
      // direction: 'horizontal',
      loop: true,
      speed: 2000,
      // If we need pagination
      // pagination: {
      //    el: '.swiper-pagination',
      //    type: "progressbar",
      // },
      // Navigation arrows
      // navigation: {
      //    nextEl: '.swiper-button-next',
      //    prevEl: '.swiper-button-prev',
      // },
      // And if we need scrollbar
      // scrollbar: {
      //    el: '.swiper-scrollbar',
      // },
      // Количество слайдов для показа
      //  slidesPerView: 3,
      autoplay: {
         delay: 2500,
         disableOnInteraction: false,
      },
      effect: "",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      // coverflowEffect: {
      //    rotate: 50,
      //    stretch: 0,
      //    depth: 100,
      //    modifier: 1,
      //    slideShadows: true,
      // },
      // pagination: {
      //    el: ".swiper-pagination",
      //    type: "progressbar",
      // },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
      },

   });

   const carFleetSlider = new Swiper('.car-fleet__slider', {
      // Optional parameters
      // direction: 'vertical',
      // direction: 'horizontal',
      loop: true,
      speed: 800,
      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
         type: "progressbar",
      },
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      // And if we need scrollbar
      scrollbar: {
         el: '.swiper-scrollbar',
      },
      // Количество слайдов для показа
      //  slidesPerView: 3,
      // autoplay: {
      //    delay: 2500,
      //    disableOnInteraction: false,
      // },
      // effect: "",
      // grabCursor: true,
      // centeredSlides: true,
      // slidesPerView: "auto",
      // coverflowEffect: {
      //    rotate: 50,
      //    stretch: 0,
      //    depth: 100,
      //    modifier: 1,
      //    slideShadows: true,
      // },
      // pagination: {
      //    el: ".swiper-pagination",
      //    type: "progressbar",
      // },
      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
      },

   });


   // АККОРДЕОН---------------------------------------------
   let btns = document.querySelectorAll('.accordeon-btn');

   btns.forEach(elem => {
      elem.addEventListener('click', function () {
         this.classList.toggle("active");
         let panel = this.nextElementSibling;
         if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
         } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
         }
      });
   });



   var mySwiperSmol = new Swiper(".myswiper-smol", {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      speed: 1000,
      loop: true,

      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
      },
   });
   var swiper2 = new Swiper(".myswiper2", {
      speed: 1000,
      loop: true,
      spaceBetween: 10,
      navigation: {
         nextEl: ".swiper-button-prev-duo",
         prevEl: ".swiper-button-next-duo",
      },
      thumbs: {
         swiper: mySwiperSmol,
      },
      // breakpoints: {
      //    320: {
      //       slidesPerView: 1,
      //    },
      //    480: {
      //       slidesPerView: 2,
      //    },
      //    992: {
      //       slidesPerView: 3,
      //    },
      // },
   });







   // Меню бургер 
   const burgerBtn = document.querySelector('.burger__btn');
   const menuList = document.querySelector('.menu__list');

   burgerBtn.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('burger__btn-line--active');
      menuList.classList.toggle('menu__list--active');
   });

   // Плавная подгрузка контента  на странице Наш автопарк от MaxGraf =============

   const scrollItems = document.querySelectorAll('.scroll-item');

   const scrollAnimation = () => {
      let windowCenter = (window.innerHeight / 1.3) + window.scrollY;
      // console.log(windowCenter)
      scrollItems.forEach(el => {
         let scrollOffset = el.offsetTop + (el.offsetHeight / 1.3);
         if (windowCenter >= scrollOffset) {
            el.classList.add('animation-class');
         } else {
            el.classList.remove('animation-class');
         }
      });
   };

   scrollAnimation();
   window.addEventListener('scroll', () => {
      scrollAnimation();
   });

   // ====================================================================================

   // -------------------------------------------------

   // Отмена клика по slider-link
   // let btnLinks = document.querySelectorAll('.slider-link');
   // btnLinks.forEach(btnLink => {
   //    btnLink.addEventListener('.click', function (e) {
   //       e.preventDefault();
   //    });
   // });

   // Динамическое создание карточки заказа

   // const newsSection = document.querySelector('.new-block');
   // const closeBtn = document.querySelector('.close-btn');

   // Модальные окна ================================================

   const orderBtns = document.querySelectorAll('.slider-link-btn');
   const cardModal = document.querySelector('.card-modal');
   const modalOverlay = document.querySelector('.modal__overlay');
   const clouseModal = document.querySelector('.clouse__modal');
   const clouseTsanksWindow = document.querySelector('.modal__close');
   const overleyWindow = document.querySelector('.overley');
   const modalWindow = document.querySelector('.modal');

   clouseTsanksWindow.addEventListener('click', function () {
      overleyWindow.classList.remove('overley-visible');
      // modalWindow.classList.remove('modal__visible ');
      cardModal.classList.remove('card-modal--active');
      modalOverlay.classList.remove('modal__overlay-show');
      // modalWindow.classList.remove('modal');
      // cardModal.classList.remove('card-modal');
      // modalOverlay.classList.remove('modal__overlay');
   });

   orderBtns.forEach(orderBtn => {
      orderBtn.addEventListener('click', function (e) {
         e.preventDefault();
         cardModal.classList.add('card-modal--active');
         modalOverlay.classList.add('modal__overlay-show');
      });
   });

   // closeBtn.addEventListener('click', function () {
   //    cardModal.classList.remove('card-modal--active');
   //    modalOverlay.classList.remove('modal__overlay-show');
   // });

   clouseModal.addEventListener('click', function () {
      cardModal.classList.remove('card-modal--active');
      modalOverlay.classList.remove('modal__overlay-show');
   });



   // orderBtns.forEach(orderBtn => {
   //    orderBtn.addEventListener('click', function (e) {
   //       e.preventDefault();
   //       newCardBlock.style.display = 'block';
   //    });
   // });


   // Создадим функцию genereitCard 
   //    const genereitCard = () => {
   //       return `
   //           <div class=" card-modal">
   //              <form action="send.php" method="POST" class="form">
   //                 <h2 class="auto-title">Заказать автомобиль</h2>

   //                 <p class="text-form">Выбырите класс автомобиля</p>
   //                 <div class="auto__box">
   //                    <p class="auto-text">
   //                       <label for="">
   //                           <input class="input-radio" type="radio" id="1" value="Бизнес" name="auto" checked placeholder="">
   //                       </label>
   //                       Бизнес
   //                    </p>
   //                 </div>
   //                 <div class="auto__box">
   //                    <p class="auto-text">
   //                       <label for="">
   //                           <input class="input-radio" type="radio" id="2" value="Спорт" name="auto" placeholder="">
   //                       </label>
   //                       Спорт
   //                    </p>
   //                 </div>
   //                 <div class="auto__box">
   //                    <p class="auto-text">
   //                       <label for="">
   //                           <input class="input-radio" type="radio" id="3" value="Премиум" name="auto" placeholder="">
   //                       </label>
   //                       Премиум
   //                    </p>
   //                 </div>
   //                 <button class="auto-btn" type="submit">
   //                    Отправить
   //                 </button>
   //                 <button class="close-btn" >
   //                    Отменить
   //                 </button>
   //              </form>
   //           </div>    

   //  `;

   //       closeBtn.addEventListener('click', function (e) {
   //          e.preventDefault();
   //          newCardBlock.style.display = 'none';
   //          console.log(789);
   //       });
   //    };

   // Создадим новый DIV с классом  new-blockauto
   //    const newBlockAuto = document.createElement('div');
   //    newBlockAuto.classList.add('new-blockauto');
   //   создать  карточку используя функцию genereitCard
   //    const cardList = [
   //       {},
   //    ]

   //    const cardHTML = cardList.map(car => {
   //       return genereitCard();
   //    }).join('');

   //    newBlockAuto.innerHTML = cardHTML;

   //    const newCardBlock = newsSection.insertAdjacentElement("afterbegin", newBlockAuto);
   //    newCardBlock.style.display = 'none';
   //   ----------------
   //   ----------------
   //   ----------------------------------------------
   // -------------------------------------------------
   // Динамическое создание карточки заказа


   // Hover на кнопки  доделать позже с креатэлемент
   // const sliderLinks = document.querySelectorAll('.slider-box');

   // sliderLinks.forEach(sliderLink => {

   //    sliderLink.addEventListener('mouseover', function () {

   //       // sliderLink.classList.remove('slider-link');
   //       sliderLink.style.display = 'none';
   //       let newText = document.createElement('div');
   //       div.textContent = 'grsgesg';

   //    });

   //    sliderLink.addEventListener('mouseout', function () {

   //       sliderLink.style.display = 'block';

   //    });

   // });






   // Карта ==========================================================
   const map = L.map('map',
      {
         scrollWheelZoom: false
      })
      .setView({
         lat: 59.92749,
         lng: 30.31127,
      }, 11);
   // Add OSM tile leayer to the Leaflet map.
   L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      },
   ).addTo(map);

   // const points = [
   //    {
   //       title: `  'Galeon на Васильевском ' 
   //       Телефон: 8-888-888-8888 
   //       E-mail: office@petr.ru
   //       Любая дополнительная информацию.
   //                 `,
   //       lat: 59.94974709374039,
   //       lng: 30.22498690618844,
   //    },
   //    {
   //       title: `  'Galeon на Петроградка' 
   //       Телефон: 8-888-888-8888 
   //       E-mail: office@petr.ru
   //       Любая дополнительная информацию.
   //                 `,
   //       lat: 59.964892,
   //       lng: 30.295253,
   //    },
   //    {

   //       title: `  'Galeon Адмиралтейский ' 
   //       Телефон: 8-888-888-8888 
   //       E-mail: office@petr.ru
   //       Любая дополнительная информацию.
   //                 `,
   //       lat: 59.922885,
   //       lng: 30.353926,
   //    },
   //    {
   //       title: `  'Galeon Центр ' 
   //       Телефон: 8-888-888-8888 
   //       E-mail: office@petr.ru
   //       Любая дополнительная информацию.
   //                 `,
   //       lat: 59.914360,
   //       lng: 30.339764,
   //    },
   //    {
   //       title: `  'Galeon Фрунзенский ' 
   //       Телефон: 8-888-888-8888 
   //       E-mail: office@petr.ru
   //       Любая дополнительная информацию.
   //                 `,
   //       lat: 59.862096,
   //       lng: 30.430944,
   //    },
   //    {
   //       title: `  'Galeon Кировский ' 
   //       Телефон: 8-888-888-8888 
   //       E-mail: office@petr.ru
   //       Любая дополнительная информацию.
   //                 `,
   //       lat: 59.853198,
   //       lng: 30.260817,
   //    },
   //    {

   //       title: `  'Galeon Калининский ' 
   //       Телефон: 8-888-888-8888 
   //       E-mail: office@petr.ru
   //       Любая дополнительная информацию.
   //                 `,
   //       lat: 59.988482,
   //       lng: 30.383335,
   //    },
   //    {
   //       title: `  'Galeon Приморский ' 
   //                  Телефон: 8-888-888-8888 
   //                  E-mail: office@petr.ru
   //                  Любая дополнительная информацию.
   //         `,
   //       lat: 60.020656,
   //       lng: 30.233370

   //    },
   // ];


   // points.forEach(({ lat, lng, title }) => {
   //    const icon = L.icon({
   //       iconUrl: '../images/icons/map-icon.svg',
   //       iconSize: [50, 50],
   //       iconAnchor: [10, 50],
   //    });


   //    const marker = L.marker(
   //       {
   //          lat,
   //          lng,
   //          title,
   //       },
   //       {
   //          icon,
   //       },
   //    );
   //    marker.addTo(map)
   //       .bindPopup(title);
   // });




   // Карта ==========================================================


   // Маска телефона   ==============================================
   let selector = document.querySelectorAll('input[type="tel"]');
   let im = new Inputmask('+7 (999) 999-99-99');
   im.mask(selector);

   let selector2 = document.querySelector('input[type="tel"]');

   selector2.addEventListener('input', function () {

      // console.log(selector2.value)

      const re = /^\d*(\.\d+)?$/

      // console.log(selector2.value.match(/[0-9]/g).length)
      // console.log(selector2.value.replace(/[0-9]/g, "0"));

   });







   // Плавный скролл Start ---------------------------------

   let menu = document.querySelector('.menu__list');
   let links = document.querySelectorAll('.menu__link');

   if (window.location.hash != '') {
      scrollToId(window.location.hash);
   }

   menu.addEventListener('click', function (e) {
      if (e.target.classList.contains('menu__link')) {
         e.preventDefault();

         let link = e.target;
         scrollToId(link.hash);
      }
   });

   let btnUp = document.querySelector('.btnUp');

   btnUp.addEventListener('click', function (e) {
      scrollToY(0);
   });

   let scrolls = 0;
   let scrollTimeout;
   let delay = 100;

   // bad
   window.addEventListener('scroll', function (e) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
         onScroll(e);
      }, delay);
   });

   function onScroll(e) {
      // console.log(++scrolls);
      let pos = window.pageYOffset;

      if (pos > window.innerHeight) {
         btnUp.classList.add('btnUp-open');
      }
      else {
         btnUp.classList.remove('btnUp-open');
      }

      for (let i = links.length - 1; i >= 0; i--) {
         let link = links[i];
         let header = document.querySelector(link.hash);

         if (pos > (elemOffsetTop(header) - window.innerHeight / 2)) {
            menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
            link.classList.add('menu__link-active');
            break;
         }
      }
   }

   function scrollToId(id) {
      let target = document.querySelector(id);
      let styles = window.getComputedStyle(target);

      if (target !== null) {
         let pos = elemOffsetTop(target) - menu.clientHeight - parseFloat(styles.marginTop);
         scrollToY(pos);
      }
   }




});

// Плавный скролл  ---------------------------------

function scrollToY(pos) {
   window.scrollTo({
      top: pos,
      behavior: "smooth"
   });
}

function elemOffsetTop(node) {
   let coords = node.getBoundingClientRect();
   return coords.top + window.pageYOffset;
}
// Плавный скролл  End---------------------------------


//=====  JQuery  start  =============================================================

// $(document).ready(function () {
//    $("form").submit(function () { // Событие отправки с формы
//       var form_data = $(this).serialize(); // Собираем данные из полей
//       $.ajax({
//          type: "POST", // Метод отправки
//          url: "send.php", // Путь к PHP обработчику sendform.php
//          data: form_data,
//          success: function () {
//             $('.overley').addClass('overley-visible');
//             $('.modal').addClass('modal__visible');
//          }
//       }).done(function () {
//          $(this).find('input').val('');
//          $('form').trigger('reset');
//       });
//       event.preventDefault();
//    });
// });

//=====  JQuery  finish  =============================================================
