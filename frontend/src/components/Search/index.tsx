import ButtonIcon from "../ButtonIcon";
import "./styles.css";

const Search = () => {
  return (
    <div className="search-container base-card">
      <div className="search-card">
        <form action="submit">
          <input type="text" placeholder="Deixe sua avaliação aqui" />
          <div className="search-button">
            <ButtonIcon text="Salvar Avaliação" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
