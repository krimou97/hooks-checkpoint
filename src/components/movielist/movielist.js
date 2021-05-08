import './movielist.css'
import Moviecard from '../moviecard/moviecard'

const Movielist = (props) =>{
    const {movies} = props
    return (
        <div className={'m-list'}>
            
            {movies.map(movie => <Moviecard movies={movie} /> )}
        </div>
    )
}

export default Movielist;