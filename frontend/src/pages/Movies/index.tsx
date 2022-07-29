import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Movie } from "types/movie";
import { SpringPage } from "types/vendor/spring";
import { requestBackend } from "util/request";
import "./styles.css";

const Movies = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: "/movies",
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="movies-container">
      <div className="movies-content">
        <h1>Tela listagem de filmes</h1>
        <div>
          {page?.content.map((item) => (
            <p key={item.id}>Acessar /movies/{item.id}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
