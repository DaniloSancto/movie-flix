import ResultSearch from "../../components/ResultSearch";
import Search from "../../components/Search";
import "./styles.css";

const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <div className="movie-details-content">
        <div className="search-container">
          <h1>Tela detalhes do filme id: 1</h1>
          <Search />
          <ResultSearch />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
