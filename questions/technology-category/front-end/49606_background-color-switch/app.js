const grey = document.querySelector('#grey');
const white = document.querySelector('#white');
const blue = document.querySelector('#blue');
const yellow = document.querySelector('#yellow');

const body = document.querySelector('body');

grey.addEventListener('click', ()=>{
	console.log('back changed')
	body.style.background = 'grey';	
})
white.addEventListener('click', ()=>{
	body.style.background = 'white'
})
blue.addEventListener('click', ()=>{
	body.style.background = 'blue'
})
yellow.addEventListener('click', ()=>{
	body.style.background = 'yellow'
})