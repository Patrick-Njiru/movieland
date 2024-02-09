import { useEffect, useRef, useState } from "react"
import { BiSearch } from 'react-icons/bi'
import MovieCard from "./MovieCard"

const App = () => {
	const [movies, setMovies] = useState([])
	const refContainer = useRef(null)
	
	const API = 'https://www.omdbapi.com/?i=tt3896198&apikey=911232c4&s='
	
	const loadDefaultMovies = async () => {
		const response = await fetch(API + 'batman')
		const data = await response.json()
		setMovies(data.Search)
	}

	const handleSearch = async () => {
		// eliminate unnecessary empty spaces in the string
		// I love logic
		const titleArr = refContainer.current.value.split(''),
		title =	titleArr.filter((char, i) => {
				let newArr = []
				if (char !== ' ') newArr.push(char)
				else if (i > 0 && i + 1 !== titleArr.length && char == ' ' && titleArr[i - 1] !== ' ')
					newArr.push(char)
				return newArr
			}).join('')
		
		if (title.length > 2) {
			const response = await fetch(API + title),
			data = await response.json()
			setMovies(data.Search)
		}
	}
	
	useEffect(() => { loadDefaultMovies() && handleSearch()	}, [])

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
							className="input-field rounded bg-dark border-0 rounded text-light fw-3 ps-1 py-2"
							placeholder='search for movies'
							required
							ref={refContainer}
						/>
						
						<button 
							type="button" 
							className="search_btn mx-2 bg-transparent border-0"
							onClick={handleSearch}
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