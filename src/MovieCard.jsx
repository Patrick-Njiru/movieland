import PropTypes from 'prop-types'

const MovieCard = ({ Year, Poster, Title, Type }) => (
	<div className='card movie shadow mx-2 mb-5'>
		<div className="movie_cover position-absolute p-3 rounded">
			<p className="card-title fw-bold">{Year}</p>
		</div>

		<img 
			className="movie_img card-image rounded img-fluid"
			src={Poster != 'N/A' ? Poster 
				: 'https://via.placeholder.com/200x270'} 
			alt={Title} 
		/>

		<div className="movie_details card-body">
			<p className="card-text fst-italic fw-bold">{Type}</p>

			<p className="card-text fw-bold text-uppercase">{Title}</p>
		</div>
	</div>
)

// props validation
MovieCard.propTypes = {
	Year : PropTypes.string.isRequired,
	Poster : PropTypes.string,
	Type : PropTypes.string.isRequired,
	Title : PropTypes.string.isRequired,
}

export default MovieCard