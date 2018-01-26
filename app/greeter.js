import config from './config.json'
import React from 'react'

// const greet = function () {
// 	let greet = document.createElement('div')
// 	greet.textContent = config.greetText
// 	return greet
// }

class Greet extends React.Component {
	render () {
		return (
			<div>
				{ config.greetText }
			</div>
		)
	}
}

export default Greet
