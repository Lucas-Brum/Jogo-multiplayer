var snack = document.getElementById('snack')
var x = 400
var y = 300
snack.style.top = y + 'px'
snack.style.right = x + 'px'

//console.log(Math.floor(Math.random()*5))

document.querySelector('body').addEventListener('keydown', function(event){
 
	var tecla = event.keyCode;

	switch(tecla) {
	case 39:
		moveLeft()
		break
	case 40:
		moveDown()
		break	
	case 37:
		moveRight()
		break
	case 38:
		moveUp()
		break
	case 116:
		break
	case 27:
		break
	case 122:
		break
	default:
		alert("Botão invalido use as setas do teclado")
	}

	function moveLeft(){
		if(x > 0){

			x-=5
			newPositionX()

		}
	}

	function moveDown(){
		if(y < 585){
			
		y+=5
		newPositionY()
		}
	}

	function moveRight(){
		if(x < 785){

			x+=5
			newPositionX()
		}
	}

	function moveUp(){
		if(y > 0){

		y-=5
		newPositionY()
		}
	}



	function newPositionX(){

		snack.style.right = x + 'px'

	}

	function newPositionY(){
			
		snack.style.top = y + 'px'

	}
	
 
})

