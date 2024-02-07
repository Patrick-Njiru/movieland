import { useEffect, useState } from "react"
import { BiSearch } from 'react-icons/bi'
import MovieCard from "./MovieCard"

const App = () => {
	const [movies, setMovies] = useState([]),
	[search, setSearch] = useState(''),
	
	API = 'http://www.omdbapi.com/?i=tt3896198&apikey=911232c4&s='
	
	const getMovies = async () => {
		const response = await fetch(API + 'batman')
		const data = await response.json()
		setMovies(data.Search)
	}
	
	const searchMovie = async (title) => {
		const response = await fetch(API + title),
			data = await response.json()
		setMovies(data.Search)
	}
	
	useEffect(() => {
		search.length < 3 ? getMovies() : searchMovie(search)
	}, [search])

	return (
		<div className="text-light p-2 app">
			<div className="container">
				<h1 className="text-center m-2">
					<span className="app_title rounded-50">MovieLand</span>
				</h1>
				
				<div className="text-center my-5">
					<div className="search d-inline" >
						<input 
							type="search" 
							name="title"
							value={search}
							onChange={e => setSearch(e.target.value)}
							className="input-field rounded bg-dark border-0 rounded text-light fw-3 ps-1 py-2"
							placeholder='search for movies'
							required
						/>
						
						<button 
							type="submit" 
							className="search_btn mx-2 bg-transparent border-0"
							onClick={() => searchMovie(search)}
						>
							<BiSearch title="search" className="h2" />
						</button>
					</div>
				</div>
				
				<div className="d-flex justify-content-evenly align-items-center" style={{flexWrap: "wrap"}}>
					{typeof movies == 'object' && movies.length > 0 ? 
						movies.map(movie => <MovieCard {...movie} key={movie.imdbID} />)
						:
						<div className="loader mt-5"></div>
					}
				</div>
			</div>
		</div>
	)
}

export default App