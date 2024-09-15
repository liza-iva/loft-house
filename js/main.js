/* Nav icon */
const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.onclick = function () {
    navIcon.classList.toggle("nav-icon--active");
    nav.classList.toggle("header__top-row--mobile");
    document.body.classList.toggle("no-scroll")
}

/* Phone Mask */
mask("[data-tel-input]")

// Удаляем "+" если больше ничего не введено, чтобы показать placeholder

const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input)=>{
    input.addEventListener("input", ()=>{
        if (input.value == "+") input.value = "";
    })
    input.addEventListener("blur", ()=>{
        if (input.value == "+") input.value = "";
    })
});

/* Yandex Map */

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
    var myMap;
    function init(){
        // Создание карты.     
        myMap = new ymaps.Map ("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: <широта, долгота>.
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь интрументом Определение коорлинат.
            center: [59.943543,30.338928],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 16
        });

        var myPlacemark = new ymaps.Placemark([59.943543,30.338928],
            {balloonContent: 
                `
                <div class="balloon">
                    <div class="balloon__address">Наб. реки Фонтанки 10-15</div>
                    <div class="balloon__contacts">
                        <a href="tell:+78121234567">+8 (812) 123-45-67</a>
                    </div>
                </div>
                `,
            }, 
            {
            iconLayout: "default#image",
            iconImageHref: "./img/icon/logo-3",
            iconImageSize: [40, 40],
            iconImageOffset: [-20, -40]
        });
        

        myMap.controls.remove("geolocationControl"); // удаляем геолокацию
        myMap.controls.remove("searchControl"); // удаляем поиск
        myMap.controls.remove("trafficControl"); // удаляем контроль трафика
        myMap.controls.remove("typeSelector"); // удаляем тип

        // myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
        // myMap.controls.remove("zoomControl"); // удаляем контрол зкммирования
        myMap.controls.remove("rulerControl"); // удаляем контрол правил
        myMap.behaviors.disable("scrollZoom"); // отключаем скролл карты (опционально)

        // Размещение геообъекта на карте.
        myMap.geoObjects.add(myPlacemark);
        myPlacemark.balloon.open();
        
    }

$(function () {

    // Скрипт плавного перехода к нужному блоку
    $(".header__nav a, .footer__nav a, .footer__logo a").on("click", function (e) {
        //отменяем стандартную обработку нажимая по ссылке
        e.preventDefault();
        //забираем идентификатор блока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top-0;
        //анимируем переход на расстояние - top за 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });
})