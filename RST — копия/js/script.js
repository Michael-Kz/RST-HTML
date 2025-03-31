const menu = document.querySelector('.menu__body')
const menuBtn = document.querySelector('.menu__icon')

const body = document.body

if (menu && menuBtn) {
  menuBtn.addEventListener('click', e => {
    menu.classList.toggle('active')
    menuBtn.classList.toggle('active')
    body.classList.toggle('lock')
  })

  menu.addEventListener('click', e => {
    if (e.target.classList.contains('menu__body')) {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
    }
  })

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active')
      menuBtn.classList.remove('active')
      body.classList.remove('lock')
    })
  })
}

/*===========================================*/

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

const header = document.getElementById('header')
let lastScrollTop = 0

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > lastScrollTop) {
    header.style.top = '-100%'
    ;[menu, menuBtn, searchBlock, searchButton].forEach(el =>
      el.classList.remove('active')
    )
    body.classList.remove('lock')
  } else {
    header.style.top = '1vw'
  }

  lastScrollTop = Math.max(scrollTop, 0)
})
// ===========================
class ItcTabs {
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
      // el.setAttribute('role', 'tab');
      // this._elPanes[index].setAttribute('role', 'tabpanel');
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
const tabs = new ItcTabs('.tabs')
// =========================

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

    // Remove element after animation ends
    setTimeout(() => wave.remove(), 500)
  })
})
// ==========================
const searchBlock = document.querySelector('.search__body')
const searchButton = document.querySelector('.search__icon')
const buttonFollow = document.querySelector('.header__control-button')
const primaryMenu = document.querySelector('.header__menu--primary')
const searchForm = document.querySelector('.search__form-default')
const eHeader = document.querySelector('.header')




if (searchBlock && searchButton) {
  searchButton.addEventListener('click', e => {
    searchBlock.classList.toggle('active')
    searchButton.classList.toggle('active')
    buttonFollow.classList.toggle('header__control-button--remove')
    buttonFollow.classList.toggle('rst__follow--remove');
    menuBtn.classList.toggle('menu__icon--remove');
    primaryMenu.classList.toggle('header__menu--remove');
    eHeader.classList.toggle('header--active-search');
    body.classList.toggle('lock');

  })

  searchBlock.addEventListener('click', e => {
    if (e.target.classList.contains('search__form')) {
      searchBlock.classList.remove('active')
      searchButton.classList.remove('active')
      body.classList.remove('lock')
    }
  })

  // searchBlock.querySelectorAll('.menu__link').forEach(link => {
  // 	link.addEventListener('click', () => {
  // 		searchBlock.classList.remove('active')
  // 		searchButton.classList.remove('active')
  // 		body.classList.remove('lock')
  // 	})
  // })
}
// ===========================================
// ===========================================
// ===========================================

