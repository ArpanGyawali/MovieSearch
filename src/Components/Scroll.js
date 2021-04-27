import React from 'react';
import './Scroll.css'

const Scroll = (props) => {		//here automatically props are its children ie.CardList
	return (
		<div class='scr'>
			{props.children}
		</div>
	);
}

export default Scroll;