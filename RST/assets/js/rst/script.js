// Меню
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
//
// подписаться
//
const subscribeDescription = document.getElementById('subscribeDescription')
const subscribeButtonForm = document.getElementById('subscribeButtonForm')
const subscribeButtonToggle = document.getElementById('subscribeButtonToggle')
subscribeButtonToggle.addEventListener('click', e => {
	subscribeDescription.classList.toggle('hidden-block')
	subscribeButtonForm.classList.toggle('visible-block')
})
