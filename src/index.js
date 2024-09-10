let menuicn = document.querySelector('.menuicn')
let nav = document.querySelector('.navcontainer')

menuicn.addEventListener('click', () => {
	nav.classList.toggle('navclose')
})

document.getElementById('dp').addEventListener('click', function () {
	var audio = document.getElementById('greeting-audio')
	audio.play()
	this.classList.add('active')
	setTimeout(() => {
		this.classList.remove('active')
	}, 300)
})
