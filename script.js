"use strict"

const WIDTH = 30
const HEIGHT = WIDTH
let data = []
let active
let isMouseDown = false
let draw = true

function initialize() {
	for (let y=0; y<HEIGHT; y++) {
		data[y] = []
		for (let x=0; x<WIDTH; x++) {
			data[y][x] = 0
		}
	}
}

function render() {
	let maze = document.getElementById("maze")
	for (let y=0; y<HEIGHT; y++) {
		let row = document.createElement("div")
		row.classList.add("row")
		for (let x=0; x<WIDTH; x++) {
			let tile = document.createElement("div")
			tile.classList.add("tile")
			tile.classList.add("open")
			tile.setAttribute("data-x", x)
			tile.setAttribute("data-y", y)
			tile.onmouseover = drawErase
			// append to row
			row.appendChild(tile)
		}
		// append to document
		maze.appendChild(row)
		onmousedown = mouseDown
		onmouseup = mouseUp
	}
}

function mouseDown(e) {
	isMouseDown = true
	// if tile is open
	if ( e.target.classList.contains("open") ) {
		draw = true
	}
	else {
		draw = false
	}
	// draw or erase tile we clicked
	drawErase(e)
}

function mouseUp() {
	isMouseDown = false
}

function drawErase(e) {
	
	if (isMouseDown) {
		// if we are drawing
		if (draw) {
			//console.log("Closing tile...")
			e.target.classList.remove("open")
			e.target.classList.add("closed")
		}
		// if we are erasing
		else {
			//console.log("Opening tile...")
			e.target.classList.remove("closed")
			e.target.classList.add("open")

		}
	}
}

// begin

initialize()
render()
