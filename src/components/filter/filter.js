import { Button, TextField } from '@material-ui/core'
import './filter.css'


const Filter = () =>{
    return (
        <div className={'filter-c'}>
            <TextField label="Title"
                       variant="outlined" />
            <TextField label="Rating"
                       variant="outlined" />
            <Button variant='contained'
                    color="primary"    >Filter</Button>
        </div>
    )
}

export default Filter;