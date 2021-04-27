import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundries from '../Components/ErrorBoundries';
import { movies } from '../movies';	//for individual exports
import './App.css';

class App extends React.Component { 
	constructor() {
		super()
		this.state = {
			movies: movies,
			searchfield: ''
		}
	}
	onSearchChange = (event) => {		//here this means input in seatchBox.js
		this.setState({ searchfield: event.target.value });
	}
	render() {
		const filteredMovies = this.state.movies.filter(movie => {
			return movie.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1 className='f1'>Watch Movies</h1>
				<SearchBox searchValue={this.onSearchChange} />
				<Scroll>
					<ErrorBoundries>
						<CardList movies={filteredMovies} />
					</ErrorBoundries>
				</Scroll>
			</div>
		);
	}
}

export default App;