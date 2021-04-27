import React from 'react';
import Card from './Card';	//for default exports

const CardList = ( {movies} ) => {
	// if (true) {					for error throw..only for App production
	// 	throw new Error('Error');
	// }
	if (movies.length === 0) {
			return <h1 className='gray tc'> No result found </h1>
		}
	else {
		const cardArray = movies.map((movie, i) => {
			return <Card key={i} 
						 image={movies[i].image} 
						 name={movies[i].name} 
						 year={movies[i].year} 
						 rating={movies[i].rating} 
						 search={movies[i].link} 
					/>

		})

		return (
			<div>
		    	{cardArray}
		    </div>
		);
	}
}

export default CardList;