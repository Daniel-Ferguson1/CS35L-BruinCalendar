const openButtons = document.querySelectorAll('[open]')
const closeButtons = document.querySelectorAll('[close]')
const background = document.getElementById('background')

openButtons.forEach(button => {
	button.addEventListener('click', () => {
		const window = document.querySelector(button.dataset.modalTarget)
		open(window)
	})
})

closeButtons.forEach(button => {
	button.addEventListener('click', () => {
		const window = button.closest('.event')
		close(window)
	})
})

overlay.addEventListener('click', () => {
	const modals = document.querySelectorAll('.event.active')
	modals.forEach(modal => {
		close(modal)
	})
})

function open(window) {
	if (window == null) return
	window.classList.add('active')
	background.classList.add('active')
}

function close(window) {
	if (window == null) return
	window.classList.remove('active')
	background.classList.remove('active')
}