import '../css/style.css';

document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }


// 		const accordionLists = document.querySelectorAll('.accordion-list');
		
// accordionLists.forEach(accordionList => {
//     // Найти первый элемент списка
//     const firstItem = accordionList.querySelector('.accordion-list__item');
//     if (firstItem) {
//         const firstContent = firstItem.querySelector('.accordion-list__content');

//         // Добавить класс "открыто" и установить max-height для первого элемента
//         firstItem.classList.add('accordion-list__item--opened');
//         if (firstContent) {
//             firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
//         }
//     }

//     accordionList.addEventListener('click', (e) => {
//         const accordionControl = e.target.closest('.accordion-list__control');
//         if (!accordionControl) return; // Если клик не по контролу, не реагируем.

//         e.preventDefault(); // Останавливаем стандартное поведение ссылки

//         const accordionItem = accordionControl.parentElement;
//         const accordionContent = accordionControl.nextElementSibling;

//         // Проверяем, есть ли уже открытые элементы
//         const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');
//         const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content');

//         // Если был клик на другом элементе, закрываем его
//         if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
//             accordionOpenedItem.classList.remove('accordion-list__item--opened');
//             if (accordionOpenedContent) {
//                 accordionOpenedContent.style.maxHeight = null;
//             }
//         }

//         // Переключаем открытие/закрытие текущего элемента
//         accordionItem.classList.toggle('accordion-list__item--opened');

//         // Если элемент открыт, устанавливаем max-height
//         if (accordionItem.classList.contains('accordion-list__item--opened')) {
//             accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

//             // Прокручиваем к открытому элементу
//             setTimeout(() => {
//                 accordionItem.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'center'
//                 });
//             }, 300);
//         } else {
//             accordionContent.style.maxHeight = null;
//         }
//     });
// });
const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(accordionList => {
    // Найти первый элемент списка
    const firstItem = accordionList.querySelector('.accordion-list__item');
    let firstContent = null;

    if (firstItem) {
        firstContent = firstItem.querySelector('.accordion-list__content');

        // Добавить класс "открыто" и установить max-height для первого элемента
        firstItem.classList.add('accordion-list__item--opened');
        if (firstContent) {
            const setMaxHeight = () => {
                firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
            };

            setMaxHeight(); // Установить начальное значение
            window.addEventListener('resize', setMaxHeight); // Пересчитывать при изменении экрана
        }
    }

    accordionList.addEventListener('click', (e) => {
        const accordionControl = e.target.closest('.accordion-list__control');
        if (!accordionControl) return; // Если клик не по контролу, не реагируем.

        e.preventDefault(); // Останавливаем стандартное поведение ссылки

        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        // Найти текущий открытый элемент (если есть)
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened');

        // Закрываем текущий открытый элемент, если он не тот же, на который кликнули
        if (accordionOpenedItem && accordionOpenedItem !== accordionItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            const openedContent = accordionOpenedItem.querySelector('.accordion-list__content');
            if (openedContent) {
                openedContent.style.maxHeight = null;
            }
        }

        // Переключаем открытие/закрытие текущего элемента
        const isOpened = accordionItem.classList.toggle('accordion-list__item--opened');

        // Если элемент открыт, устанавливаем max-height
        if (isOpened) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

            // Прокручиваем к открытому элементу
            setTimeout(() => {
                accordionItem.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 300);
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});



const tabControls = document.querySelector('.tab-conrols')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

		const tabControl = e.target.closest('.tab-conrols__link')

		if (!tabControl) return
		e.preventDefault()
		if (tabControl.classList.contains('tab-conrols__link--active')) return

		const tabContentID = tabControl.getAttribute('href')
		const tabContent = document.querySelector(tabContentID)
		const activeControl = document.querySelector('.tab-conrols__link--active')
		const activeContent = document.querySelector('.tab-content--show')

		if (activeControl) {
				activeControl.classList.remove('tab-conrols__link--active')
		}
		if (activeContent) {
				activeContent.classList.remove('tab-content--show')
		}

		tabControl.classList.add('tab-conrols__link--active')
		tabContent.classList.add('tab-content--show')

}

// const about = document.querySelector('.about')

// window.addEventListener('scroll', ToggleInfo);

// function ToggleInfo (e) {
	
// 	if (!about) return
// 	e.preventDefault()
// 	if (about.classList.contains('about-wrapper')) return

// 	const AboutWrapper = document.querySelector('.about-wrapper')
// 	const AboutBg = document.querySelector('.about-bg')
// 	const About = document.querySelector('.about')
// 	const TitleSmall = document.querySelector('.title-small')

// 	if (AboutWrapper) {
// 		AboutBg.classList.add('about-open')
// 		TitleSmall.classList.remove('title1')
// 		TitleSmall.classList.add('title-open')
// 	}
// 	if (About) {
// 		document.querySelector('#h4').remove();
// 	}
// 	if (AboutBg) {
// 		AboutBg.classList.add('about-open');
// 		setTimeout(() => AboutBg.classList.add('active'), 10); // Добавляем класс для активации transform
// 	}

// 	if (TitleSmall) {
// 		TitleSmall.classList.remove('title1');
// 		setTimeout(() => TitleSmall.classList.add('active'), 10); // Добавляем плавное появление текста
// }
// }


// Функция для проверки видимости элемента
var element = document.querySelector('.about'); 

var Visible = function(target) {
  // Все позиции элемента
  // Получаем все позиции элемента относительно окна
  var targetPosition = target.getBoundingClientRect();
  var targetHeight = targetPosition.height; // Высота элемента

  // Получаем высоту окна
  var windowHeight = window.innerHeight;

  // Проверяем, что хотя бы половина элемента находится в пределах видимости окна
  var elementInViewport = (targetPosition.top < windowHeight / 2) && (targetPosition.bottom > windowHeight / 2);

  if (elementInViewport) {
    // Когда элемент виден наполовину, запускаем анимацию
    console.clear();
    console.log('Элемент виден наполовину.');
    // Добавляем классы для анимации
    const aboutBg = document.querySelector('.about-bg');
    const titleSmall = document.querySelector('.title-small');
		const about = document.querySelector('.about')
		
		if (about) {
			document.querySelector('#h4').style.display = 'none';
		}
		
		if (aboutBg) {
			aboutBg.classList.add('about-open');
			setTimeout(() => aboutBg.classList.add('active'), 10); // Добавляем класс для активации transform
		}
		
		if (titleSmall) {
			titleSmall.classList.remove('title1');
			setTimeout(() => titleSmall.classList.add('active'), 10); // Добавляем плавное появление текста
		}
		
  } else {
    // Если элемент не виден, останавливаем анимацию или скрываем элементы
    console.clear();
    
  }
};

// Запускаем функцию сразу для проверки видимости
Visible(element);

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible(element);
});




import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation],
	slidesPerView: 2,
	spaceBetween: 30,

	breakpoints: {
		320:{
			slidesPerView: 1
		},
		500:{
			slidesPerView: 1.5
		},
		950:{
			slidesPerView: 2
		},
	},

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
