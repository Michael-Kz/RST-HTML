
const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchor => {
  anchor.addEventListener('click', event => {
    event.preventDefault()

    const blockID = anchor.getAttribute('href').substring(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})

// =================



// ===========================
class headerTabs {
  constructor (target, config) {
    const defaultConfig = {}
    this._config = Object.assign(defaultConfig, config)
    this._elTabs =
      typeof target === 'string' ? document.querySelector(target) : target
    this._elButtons = this._elTabs.querySelectorAll('.tabs__btn')
    this._elPanes = this._elTabs.querySelectorAll('.tabs__pane')
    this._eventShow = new Event('tab.itc.change')
    this._init()
    this._events()
  }
  _init () {
    this._elTabs.setAttribute('role', 'tablist')
    this._elButtons.forEach((el, index) => {
      el.dataset.index = index




      //=========
      // el.setAttribute('role', 'tab');
      // this._elPanes[index].setAttribute('role', 'tabpanel');
//=========



    })
  }
  show (elLinkTarget) {
    const elPaneTarget = this._elPanes[elLinkTarget.dataset.index]
    const elLinkActive = this._elTabs.querySelector('.tabs__btn_active')
    const elPaneShow = this._elTabs.querySelector('.tabs__pane_show')
    if (elLinkTarget === elLinkActive) {
      return
    }
    elLinkActive ? elLinkActive.classList.remove('tabs__btn_active') : null
    elPaneShow ? elPaneShow.classList.remove('tabs__pane_show') : null
    elLinkTarget.classList.add('tabs__btn_active')
    elPaneTarget.classList.add('tabs__pane_show')
    this._elTabs.dispatchEvent(this._eventShow)
    elLinkTarget.focus()
  }
  showByIndex (index) {
    const elLinkTarget = this._elButtons[index]
    elLinkTarget ? this.show(elLinkTarget) : null
  }
  _events () {
    this._elTabs.addEventListener('click', e => {
      const target = e.target.closest('.tabs__btn')
      if (target) {
        e.preventDefault()
        this.show(target)
      }
    })
  }
}
const tabs = new headerTabs('.tabs')
// =========================


const headerDefault = document.querySelector('.header');
const searchButton = document.querySelector('.search__icon');
const body = document.body;
const menuIcon = document.querySelector('.menu__icon');
const closeSearchIcon = document.querySelector('.search__close-icon');

if (headerDefault && searchButton) {
  searchButton.addEventListener('click', e => {
    const menuIcon = headerDefault.querySelector('.menu__icon');
    if (menuIcon.classList.contains('menu__icon--active')) {
      headerDefault.classList.remove('header--active-menu-advanced');
      menuIcon.classList.remove('menu__icon--active');
    }
    headerDefault.classList.toggle('header--active-search');
    searchButton.classList.toggle('search__icon--active');
    body.classList.toggle('lock');
  });

  headerDefault.addEventListener('click', e => {
    if (e.target.classList.contains('menu__body')) {
      headerDefault.classList.remove('header--active-search');
      searchButton.classList.remove('search__icon--active');
      body.classList.remove('lock');
    }
  });

  headerDefault.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      headerDefault.classList.remove('header--active-search');
      searchButton.classList.remove('search__icon--active');
      body.classList.remove('lock');
    });
  });
}

if (headerDefault && menuIcon) {
  menuIcon.addEventListener('click', e => {
    const searchIcon = headerDefault.querySelector('.search__icon');
    if (searchIcon.classList.contains('search__icon--active')) {
      headerDefault.classList.remove('header--active-search');
      searchIcon.classList.remove('search__icon--active');
    }
    headerDefault.classList.toggle('header--active-menu-advanced');
    menuIcon.classList.toggle('menu__icon--active');
    body.classList.toggle('lock');
  });

  headerDefault.addEventListener('click', e => {
    if (e.target.classList.contains('menu__body')) {
      headerDefault.classList.remove('header--active-menu-advanced');
      menuIcon.classList.remove('menu__icon--active');
      body.classList.remove('lock');
    }
  });

  headerDefault.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      headerDefault.classList.remove('header--active-menu-advanced');
      menuIcon.classList.remove('menu__icon--active');
      body.classList.remove('lock');
    });
  });
}

if (closeSearchIcon) {
  closeSearchIcon.addEventListener('click', () => {
    headerDefault.classList.remove('header--active-search');
    searchButton.classList.remove('search__icon--active');
    body.classList.remove('lock');
  });
}

document.addEventListener('click', (e) => {
  const isClickInsideHeader = headerDefault.contains(e.target);
  const isSearchButtonClicked = searchButton.contains(e.target);
  const isMenuIconClicked = menuIcon.contains(e.target);

  if (!isClickInsideHeader && !isSearchButtonClicked && !isMenuIconClicked) {
    headerDefault.classList.remove('header--active-search');
    headerDefault.classList.remove('header--active-menu-advanced');
    searchButton.classList.remove('search__icon--active');
    menuIcon.classList.remove('menu__icon--active');
    body.classList.remove('lock');
  }
});


// 
let lastScrollTop = 0;
const header = document.getElementById("header");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Проверяем наличие классов
    const isSearchActive = header.classList.contains('header--active-search');
    const isMenuActive = header.classList.contains('header--active-menu-advanced');

    if (!isSearchActive && !isMenuActive) {
        if (scrollTop > lastScrollTop) {
            header.style.top = "-100%"; // Скрыть шапку
        } else {
            header.style.top = "0vw"; // Показать шапку
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Для мобильного устройства
});

//======================================

const waweButtonEffect = document.querySelectorAll('button')

waweButtonEffect.forEach(el => {
  el.addEventListener('click', function (e) {
    const size = Math.max(this.offsetWidth, this.offsetHeight),
      x = e.offsetX - size / 2,
      y = e.offsetY - size / 2,
      wave = document.createElement('span')
    wave.className = 'wave'
    wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px;z-index: 10;`
    this.appendChild(wave)


    setTimeout(() => wave.remove(), 500)
  })
})
///=====================================

function goBack() {
  history.back();
  return false;
}
// //======================================


function moveMenu() {
    var menu = document.querySelector('.header__menu--primary');
    var headerDefault = document.querySelector('.header__default');
    var headerAdvanced = document.querySelector('.header-advanced');

    if (window.innerWidth <= 991) {
        if (headerDefault.contains(menu)) {
            headerAdvanced.appendChild(menu);
        }
    } else {
        if (headerAdvanced.contains(menu)) {
            headerDefault.appendChild(menu);
        }
    }
}

window.addEventListener('resize', moveMenu);
window.addEventListener('load', moveMenu);
// //======================================

const searchInput = document.querySelector('.search__input');
const clearButton = document.getElementById('clearButtonSearch');

searchInput.addEventListener('input', function() {
    clearButton.style.display = searchInput.value ? 'block' : 'none'; // Показываем кнопку, если есть текст
});

clearButton.addEventListener('click', function() {
    searchInput.value = ''; // Очищаем поле ввода
    clearButton.style.display = 'none'; // Скрываем кнопку
    searchInput.focus(); // Устанавливаем фокус обратно на input
});

// //======================================

function findVideos() {
  let videos = document.querySelectorAll('.video');

  if (videos.length === 0) {
    console.warn('No videos found.');
    return;
  }

  videos.forEach(video => setupVideo(video));
}

function setupVideo(video) {
  let link = video.querySelector('.video__link');
  let media = video.querySelector('.video__media');
  let button = video.querySelector('.video__button');

  if (!link || !media || !button) {
    console.warn('Missing elements in video:', video);
    return;
  }

  let id = parseMediaURL(media);

  if (!id) {
    console.warn('Invalid media URL for video:', video);
    return;
  }

  video.addEventListener('click', () => {
    let iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('video--enabled');
}

function parseMediaURL(media) {
  let regexp =
    /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
  let url = media.src;
  let match = url.match(regexp);

  return match ? match[1] : null;
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video__media');

  return iframe;
}

function generateURL(id) {
  let query = '?rel=0&showinfo=0&autoplay=1';

  return 'https://www.youtube.com/embed/' + id + query;
}

findVideos();

// //======================================






function truncateText(selector, maxLength) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return; // Проверка на наличие элементов

  elements.forEach(element => {
    const originalText = element.textContent.trim(); // Удаление пробелов в начале и конце
    if (originalText.length === 0) return; // Проверка на пустой текст

    if (originalText.length > maxLength) {
      const truncatedText = originalText.slice(0, maxLength);
      const lastSpaceIndex = truncatedText.lastIndexOf(' ');

      // Создание финального текста с многоточием
      const finalText = lastSpaceIndex !== -1
        ? truncatedText.slice(0, lastSpaceIndex) + '...'
        : truncatedText + '...';

      element.textContent = finalText; // Обновление текста элемента
    }
  });
}

// Примеры вызова функции
truncateText('.announcement__title', 50);
truncateText('.announcement__description', 70);
truncateText('.event-news__description', 200);
truncateText('.archive-news__description', 200);


//======================================