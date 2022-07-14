import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MoviesDetails";

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/movies">
        <Movies/>
      </Route>
      <Route path="/movies/:movieId">
        <MoviesDetails/>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
