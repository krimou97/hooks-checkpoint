import './moviecard.css'
import {Card} from '@material-ui/core'

const Moviecard = (props) =>{
    const {movies} = props
    return (
            <Card className={'card'}>
                <span>Title:{movies.title} </span>
                <span>Description:{movies.description} </span>
                <span>PosterURL:{movies.posterurl} </span>
                <span>Rating:{movies.rating} </span>
            </Card>
    )
}

export default Moviecard;