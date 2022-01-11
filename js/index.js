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

    window.addEventListener('DOMContentLoaded', function() {
      document.querySelector('#genre-btn1').addEventListener('click', function() {
        document.querySelector('#artists-container1').classList.toggle('active')
      });
    });

    window.addEventListener('DOMContentLoaded', function() {
      document.querySelector('#genre-btn2').addEventListener('click', function() {
        document.querySelector('#artists-container2').classList.toggle('active')
      });
    });

    window.addEventListener('DOMContentLoaded', function() {
      document.querySelector('#genre-btn3').addEventListener('click', function() {
        document.querySelector('#artists-container3').classList.toggle('active')
      });
    });

    window.addEventListener('DOMContentLoaded', function() {
      document.querySelector('#genre-btn4').addEventListener('click', function() {
        document.querySelector('#artists-container4').classList.toggle('active')
      });
    });

    window.addEventListener('DOMContentLoaded', function() {
      document.querySelector('#genre-btn5').addEventListener('click', function() {
        document.querySelector('#artists-container5').classList.toggle('active')
      });
    });


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

  (() => {
    const MOBILE_WIDTH = 576;
    const DESKTOP_WIDTH = 768;
    const btn = document.querySelector(".js-show");

    const sliderMobileParams = {
      paginationClassName: "events-pagination",
      cardsContainerName: "js-slider",
      cardsWrapName: "js-slides-wrap",
      card: "slide",
      hiddenClass: "is-hidden"
    };

    function getWindowWidth() {
      return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.body.clientWidth,
        document.documentElement.clientWidth
      );
    }

    function activateMobileSlider(params) {
      const pagination = document.createElement("div");
      pagination.classList.add(params.paginationClassName);
      params.cardsContainer.append(pagination);

      params.cardsContainer.classList.add("swiper-container");
      params.cardsWrap.classList.add("swiper-wrapper");

      params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: `.${params.cardsContainerName} .${params.paginationClassName}`
        },

        on: {
          beforeInit() {
            document.querySelectorAll(`.${params.card}`).forEach((el) => {
              el.classList.add("swiper-slide-3");
            });
          },

          beforeDestroy() {
            this.slides.forEach((el) => {
              el.classList.remove("swiper-slide-3");
              el.removeAttribute("role");
              el.removeAttribute("aria-label");
            });

            this.pagination.el.remove();
          }
        }
      });
    }

    function destroyMobileSlider(params) {
      params.cardsSlider.destroy();
      params.cardsContainer.classList.remove("swiper-container");
      params.cardsWrap.classList.remove("swiper-wrapper");
      params.cardsWrap.removeAttribute("aria-live");
      params.cardsWrap.removeAttribute("id");
    }

    function setHiddenCards(params, windowWidth) {
      const cards = document.querySelectorAll(`.${params.card}`);
      let quantity = cards.length;

      if (windowWidth > MOBILE_WIDTH && windowWidth < DESKTOP_WIDTH) {
        quantity = 2;
      }

      if (windowWidth >= DESKTOP_WIDTH) {
        quantity = 3;
      }

      cards.forEach((card, i) => {
        card.classList.remove(params.hiddenClass);
        if (i >= quantity) {
          card.classList.add(params.hiddenClass);
        }
      });
    }

    function showCards(e) {
      const cards = document.querySelectorAll(`.${sliderMobileParams.card}`);

      e.target.style = "display: none";

      cards.forEach((card) => {
        card.classList.remove(sliderMobileParams.hiddenClass);
      });
    }

    function checkWindowWidthMobile(params) {
      const currentWidth = getWindowWidth();
      btn.style = "";
      params.cardsContainer = document.querySelector(
        `.${params.cardsContainerName}`
      );
      params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

      if (
        currentWidth <= MOBILE_WIDTH &&
        (!params.cardsSlider || params.cardsSlider.destroyed)
      ) {
        activateMobileSlider(params);
      } else if (currentWidth > MOBILE_WIDTH && params.cardsSlider) {
        destroyMobileSlider(params);
      }

      setHiddenCards(params, currentWidth);
    }

    checkWindowWidthMobile(sliderMobileParams);
    btn.addEventListener("click", showCards);

    window.addEventListener("resize", function () {
      checkWindowWidthMobile(sliderMobileParams);
    });
  })();
