document.addEventListener('DOMContentLoaded', () => {


   // ПЕРЕВОДЧИК  RU/EN


   const langArr = {
      "home": {
         "ru": "Главная",
         "en": "home",
      },

      "carfleet": {
         "ru": "Автопарк",
         "en": "carfleet",
      },

      "rent": {
         "ru": "Аренда",
         "en": "rent",
      },

      "business": {
         "ru": "Для бизнеса",
         "en": "business",
      },

      "contact": {
         "ru": "Контакты",
         "en": "contacts",
      },

      "header__sub-title": {
         "ru": "АРЕНДА",
         "en": "RENT",
      },

      "content-title": {
         "ru": "ПРЕМИУМ АВТОМОБИЛЕЙ",
         "en": "PREMIUM CAR",
      },

   }

   const select = document.querySelector('select');
   const allLang = ['en', 'ru'];
   select.addEventListener('change', changeURLLanguage);
   //перенаправить на url  с указанием языка
   function changeURLLanguage() {
      let lang = select.value;
      location.href = window.location.pathname + '#' + lang;
      location.reload();
   }

   function changeLanguage() {
      let hash1 = window.location.hash;
      hash1 = hash1.substr(1);
      console.log(hash1);
      if (!allLang.includes(hash1)) {
         location.href = window.location.pathname + '#ru';
         location.reload();
      }
      select.value = hash1;
      // document.querySelector('.lng-home').innerHTML = langArr['home'][hash];
      for (let key in langArr) {
         let elem = document.querySelector('.lng-' + key);
         if (elem) {
            elem.innerHTML = langArr[key][hash1];
         }


      }
   }

   changeLanguage();

});