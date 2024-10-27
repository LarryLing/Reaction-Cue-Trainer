import React from 'react'
import './UpdateSelectionsContainer.css'

export default function UpdateSelectionsContainer() {
  	return (
		<div className="Update-Selections-Container">
			<button className="Update-Selections-Button">Add Cue</button>
			<button className="Update-Selections-Button" style={ {backgroundColor : "white", color : "var(--primary)"} }>Remove</button>
		</div>
  	)
}