import Link from 'next/link';
const MovieList = (props) => {
    return (
        <ul className="list-group">
            {
                props.movies && props.movies.map(
                    ( movie ) => {
                        return (
                            <li className="list-group-item" key={movie.imdbID}>
                                <Link href={`/details/${movie.imdbID}`}>{movie.Title}</Link>
                            </li>
                        )
                    }
                )
            }
        </ul>
    )
}
export default MovieList;