import './movielist.css'
import MovieCard from "../moviecard/moviecard";

const MovieList = (props) => {
    const {moviesprops} = props
    return (
        <div className={'m-list'}>
            {moviesprops.map(dd => <MovieCard movieprops={dd}/>)}
        </div>
    )
}
export default MovieList