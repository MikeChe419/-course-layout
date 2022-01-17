const swiper = new Swiper('.swiper1', {
    slidesPerView: 1,
    loop: true,
    pagination: {
      clickable: true,
        el: '.swiper-pagination',
      },
    });

const slider2 = new Swiper ('.swiper2', {
      slidesPerView: 1,
      breakpoints: {
        576: {
          slidesPerView: 2,
          grid: {
            rows: 2,
          },
        },
        1368: {
          slidesPerView: 3,
          grid: {
            rows: 2,

          },
        },
      },
      autoHeight: false,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    });

const slider3 = new Swiper ('.swiper3', {
      slidesPerView: 2,
      spaceBetween: 50,
      loop: false,
      breakpoints: {
        1670: {
          slidesPerView: 3,
      },
    },
    autoHeight: false,
      navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
        },
    });

const slider4 = new Swiper ('.swiper4', {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        1110: {
          slidesPerView: 3,
      },
    },
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
        },
    });

    const slider5 = new Swiper ('.swiper5', {
      slidesPerView: 1,
      spaceBetween: 50,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3
        },
      },
      pagination: {
        clickable: true,
        el: '.events-pagination',
      }
    });

const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active-2",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }


function setMenuListener() {
  document.addEventListener("click", (evt) => {
    const activeElements =
    document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest('.is-active-2'))  {
      activeElements.forEach((curent) => {
        if(current.classList.contains('js-header-dropdown-btn')) {
          current.classList.remove('is-active-2');
        } else {
          current.classList.add('is-disabled');
        }
      });
    }

    if (evt.target.closest('.js-header-dropdown-btn')) {
      const btn = evt.target.closest('.js-header-dropdown-btn');
      const genres = btn.dataset.genres;
      const drop = document.querySelector(`.${params.dropClassName}[data-target="${genres}"]`);

      btn.classList.toggle('is-active-2');

      if (!drop.classList.contains('is-active-2')) {
        drop.classList.add('is-active-2');
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add('is-disabled');
      }
    }
  });
}

setMenuListener();

const multiDefault = () => {
  const elements = document.querySelectorAll('.genre');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
    });
  });
}

multiDefault();

const ArtDefault = () => {
  const element = document.querySelector('.art');
  const choices = new Choices(element, {
    searchEnabled: false,
});
}

ArtDefault();

$(".accordion").accordion();
$(".accordion1").accordion();

document.querySelectorAll('.catalog-title-btn').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e){
    const path=e.currentTarget.dataset.path;

    document.querySelectorAll('.catalog-title-btn').forEach(function(btn) {
btn.classList.remove('catalog-title-btn-active')});
      e.currentTarget.classList.add('catalog-title-btn-active');
      document.querySelectorAll('.catalog-container-descr').forEach(function(tabsBtn){
        tabsBtn.classList.remove('catalog-container-descr-active')});

document.querySelector(`[data-target = ${path}]`).classList.add('catalog-container-descr-active');
  });
});

document.querySelectorAll('.js-painter').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e){
    const painter=e.currentTarget.dataset.painter;

document.querySelectorAll('.js-painter'). forEach(function(btn) {
  btn.classList.remove('js-painter-active')});
  e.currentTarget.classList.add('js-painter-active');
  document.querySelectorAll('.catalog-content-artists-container').forEach(function(tabsBtn){
    tabsBtn.classList.remove('artist-container-active')});

document.querySelector(`[data-target = ${painter}]`).classList.add('artist-container-active');
  });
});

new JustValidate('form', {
  rules: {
    name: {
      required:true,
      minLength:2,
      maxLength: 30
    },
    tel: {
      required:true,
      function: (name, value) => {
        const phone = selector.inputmask.unmasedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Как вас зовут?',
    tel:  'Укажите ваш телефон'
  },
    colorWrong: '#9D5CD0'
});

ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14
    }, {
    searchControlProvider: 'yandex#search'
    }),

    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
),
    myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {
}, {
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './img/map-marker.svg',
    // Размеры метки.
    iconImageSize: [20, 20],
    iconContentLayout: MyIconContentLayout
});
    myMap.geoObjects.add(myPlacemark);
  };

  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active-1')
    })
  });

