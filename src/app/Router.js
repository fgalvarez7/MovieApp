import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MovieCard, HomePage, Page404 } from "../pages";
import { FavoritesCard } from "../FavoritesCard/FavoritesCard";


export const Router = () => {
  const [movie, setMovie] = React.useState("");
  const [favorites, setFavorite] = React.useState(()=> {
      const testnull = localStorage.getItem('favorites')
        return testnull ? JSON.parse(testnull) : []
  });
  
  function handleSetMovie(movie) {
    setMovie(movie);
  }

  function storageFavorite (favorites){
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  function handleAddFavorite(movie) {
    setFavorite((oldFavorites) => [...oldFavorites, movie]);
  }

  function deleteFavorite(movieName) {
    setFavorite(favorites.filter((favorite) => favorite.Title !== movieName));
  }
  React.useEffect(()=> {
    storageFavorite(favorites)
  }, [favorites]);
  
  return (
    <BrowserRouter>
      <Switch>
       
        <Route path="/MovieCard">
          <MovieCard
            movie={movie}
            addFavorite={handleAddFavorite}
            favorites={favorites}
            deleteFavorite={deleteFavorite}
          />
        </Route>

        <Route path="/FavoritesCard">
          <FavoritesCard
            
            addFavorite={handleAddFavorite}
            favorites={favorites}
            deleteFavorite={deleteFavorite}
          />
        </Route>

        <Route exact path="/">
          <HomePage favorites={favorites} setMovie={handleSetMovie} />
        </Route>

        <Route path="*">
          <Page404 />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};
