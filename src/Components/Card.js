import React from 'react';
import './Card.css';

const Card = (props) => {
	const { image, name, year, rating, search } = props;
	return(
		<a href={search}><div className='w5 tc bg-light-red dib br3 pa3 ma2 grow shadow-5'>  {/*tachyons className*/}
			<img src={image} alt='poster' />
			<div> 
				<h2>{name} ({year})</h2>
				<p><strong>Rating:</strong> {rating}</p>
			</div>
		</div></a>
	);
}

export default Card;