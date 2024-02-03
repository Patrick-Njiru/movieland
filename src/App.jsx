import { useEffect, useState } from "react"
import { FaSearch } from 'react-icons/fa'
import MovieCard from "./MovieCard"

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=911232c4',

MOVIE = {
	"Title": "Italian Spiderman",
	"Year": "2007",
	"imdbID": "tt2705436",
	"Type": "MOVIE",
	"Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
}


const App = () => {
	// const [movies, setMovies] = useState([])

	// fetch(API_URL+'').then(res => res.json()).then(arr => { data = arr}).catch(console.log)
		
	// const searchMovie = async (title) => {
	// 	const response = await fetch(`${API_URL}&s=${title}`)
	// 	const data = await response.json()
	// 	setMovies(data.Search)
	// 	console.log(data.Search || undefined);
	// }

	// useEffect(() =>
	// 	fetch(API_URL + '&s=superman')
	// 	.then(res => res.json())
	// 	// .then(console.log)
	// 	.then(data => setMovies(data.Search))
	// 	.catch(console.log('Not Fetched'))
	// , [])

	return (
		<div className="text-light p-2 app">
			<div className="container">
				<h1 className="text-center m-2">MovieLand</h1>
				
				<div className="text-center my-5">
					<form 
						method="get" 
						className="d-inline"
						onSubmit={e => {
							// console.log(e.target.value);
							// searchMovie(e.title.value)
						}}
						>
						<input 
							type="search" 
							name="title"
							className="input-field rounded bg-dark border-0 rounded text-primary fw-3 p-1"
							placeholder='search for movies'
							required
						/>
						
						<button 
							type="submit" 
							className="form_btn mx-3 bg-transparent border-0"
						>
							<FaSearch title="search" className="mx-1 h4" />
						</button>
					</form>
				</div>
				
				<div className="d-flex justify-content-around align-items-center" style={{flexWrap: "wrap"}}>
					<MovieCard movie={MOVIE} />
					<MovieCard movie={MOVIE} />
					<MovieCard movie={MOVIE} />
					<MovieCard movie={MOVIE} />
					<MovieCard movie={MOVIE} />
					{/* <MovieCard movie={MOVIE} /> */}
					{/* {movies.length > 0 ? 
						movies.map(movie => <MovieCard movie = {movie} key={movie.imdbID} />)
						:
						<div className="p-5 text-center lead text-info bg-warning">
							No Movies or Shows Found
						</div>
					} */}
				</div>
			</div>
		</div>
	)
}

export default App