const MovieCard = (movie) => (
	<div className='card movie shadow mx-2 mb-5'>
		<div className="movie_cover position-absolute p-3 rounded">
			<p className="card-title fw-bold">{movie.Year}</p>
		</div>

		<img 
			className="movie_img card-image rounded img-fluid"
			src={movie.Poster != 'N/A' ? movie.Poster 
				: 'https://via.placeholder.com/200x270'} 
			alt={movie.Title} 
		/>

		<div className="movie_details card-body">
			<p className="card-text fst-italic fw-bold">{movie.Type}</p>

			<p className="card-text fw-bold text-uppercase">{movie.Title}</p>
		</div>
	</div>
)

export default MovieCard