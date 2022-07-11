import "./styles.css";
import LittleStar from "../../assets/images/little-star.png";

const ResultSearch = () => {
  return (
    <div className="result-search-container base-card">
      <div className="result-search-card">
        <div className="result-search-title">
          <img src={LittleStar} alt="" />
          <h3>Maria Silva</h3>
        </div>
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>

      <div className="result-search-card">
        <div className="result-search-title">
          <img src={LittleStar} alt="" />
          <h3>Maria Silva</h3>
        </div>
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>

      <div className="result-search-card">
        <div className="result-search-title">
          <img src={LittleStar} alt="" />
          <h3>Maria Silva</h3>
        </div>
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>

      <div className="result-search-card">
        <div className="result-search-title">
          <img src={LittleStar} alt="" />
          <h3>Maria Silva</h3>
        </div>
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  );
};

export default ResultSearch;
