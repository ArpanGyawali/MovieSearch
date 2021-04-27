import React from 'react';

const SearchBox = ({ searchValue }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba b--red bg-lightest-blue' 
				type='search' 
				placeholder='What to watch?'
				onChange= { searchValue } />
		</div>
	);
}

export default SearchBox;