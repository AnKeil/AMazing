"use strict"

const WIDTH = 15
const HEIGHT = WIDTH
let data = []
let active
let isMouseDown = false
let draw = true
let tool = "drawErase"

// create blank maze
function initialize() {
	for (let y=0; y<HEIGHT; y++) {
		data[y] = []
		for (let x=0; x<WIDTH; x++) {
			data[y][x] = 0
		}
	}
}

// draw initial maze
function render() {
	let maze = document.getElementById("maze")
	for (let y=0; y<HEIGHT; y++) {
		let row = document.createElement("div")
		row.classList.add("row")
		for (let x=0; x<WIDTH; x++) {
			let tile = document.createElement("div")
			tile.classList.add("tile")
			tile.setAttribute("data-value", data[y][x])
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
	switch (tool) {
		case "drawErase":
			// if tile is open
			if ( e.target.getAttribute("data-value") == "0" ) {
				draw = true
			}
			else {
				draw = false
			}
			// draw or erase tile we clicked
			drawErase(e)
			break
		case "setStart":
			
			break
		case "setEnd":
			
			break
	}
}

function mouseUp() {
	isMouseDown = false
}

function drawErase(e) {
	
	if (isMouseDown) {
		let x = Number( e.target.getAttribute("data-x") )
		let y = Number( e.target.getAttribute("data-y") )
		// if we are drawing
		if (draw) {
			console.log("Closing...")
			data[y][x] = 1
			e.target.setAttribute("data-value", "1")
		}
		// if we are erasing
		else {
			console.log("Opening...")
			data[y][x] = 0
			e.target.setAttribute("data-value", "0")
		}
	}
}

// begin

initialize()
render()