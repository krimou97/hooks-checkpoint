import { Switch } from '@material-ui/core';
import './App.css';
import 
import Movie from "./pages/movie/movie";

const App = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Redirect to="/movie"/>
            </Route>
            <Route path="/movie" component={Movie}/>
            <Route path="/addmovie" component={AddMovie}/>
        </Switch>
        </BrowserRouter>


        <>
            <Movie/>
        </>
    );
}

export default App;