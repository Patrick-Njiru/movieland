const MovieCard = (collection) => (
	<div className='card movie shadow mx-2 mb-5'>
		<div className="movie_cover position-absolute p-3 rounded">
			<p className="card-title fw-bold">{collection.movie.Year}</p>
		</div>

		<img 
			className="movie_img card-image rounded img-fluid"
			src={collection.movie.Poster != 'N/A' ? collection.movie.Poster 
				: 'https://via.placeholder.com/200x270'} 
			alt={collection.movie.Title} 
		/>

		<div className="movie_details card-body">
			<p className="card-text fst-italic fw-bold">{collection.movie.Type}</p>

			<p className="card-text fw-bold text-uppercase">{collection.movie.Title}</p>
		</div>
	</div>
)

export default MovieCard