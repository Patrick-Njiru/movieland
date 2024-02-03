// import { checkPropTypes } from "prop-types"
const MovieCard = (collection) => {
	
	return (
		<div className='movie card shadow m-2'>
			<div className="movie_cover position-absolute p-3 rounded">
				<p className="card-title fw-bolder">{collection.movie.Year}</p>
			</div>

			<img 
				className="movie_img card-image rounded img-fluid"
				src={collection.movie.Poster != 'N/A' ? collection.movie.Poster 
					: 'https://via.placeholder.com/200x400'} 
				alt={collection.movie.Title} 
			/>

			<div className="movie_details card-body">
				<p className="card-text fst-italic">{collection.movie.Type}</p>

				<p className="card-text fw-bolder">{collection.movie.Title}</p>
			</div>
		</div>
	)
}

// MovieCard.ReactPropTypes = {
	// movie : checkPropTypes.object.isRequired,
// }

export default MovieCard