import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import unknow from "./../pages/Unknown.jpg";

export const FavoritesCard = ({ addFavorite, favorites, deleteFavorite }) => {
  const history = useHistory();
  const favoriteNames = favorites.map((favorite) => favorite.Title);

  const handleSetFavorite = (favorite) => {
    if (favoriteNames.includes(favorite.Title)) {
      deleteFavorite(favorite.Title);
    } else {
      addFavorite(favorite);
    }
  };

  if (favorites.length >0){
  return (
    <Home>
      <Wrapper>
        {favorites.map((favorite,i) => (
          <Card key={i}>
          <Image>
            <img src={favorite.Poster} alt={favorite.Title} width={280} height={414} />
          </Image>
          <Details>
            <h2>{favorite.Title}</h2>
            <h3>Category: {favorite.Type}</h3>
            <h3>Year: {favorite.Year}</h3>

          </Details>
          <ButtonsWrapper>
        <button onClick={() => history.push("./")}>
          Back to Home
        </button>
        
        <button onClick={ () => handleSetFavorite(favorite) } >
          {favoriteNames.includes(favorite.Title) ? "Delete Favorite" : "Add Favorite"}
        </button>
      </ButtonsWrapper>
        </Card>
        ))}
      </Wrapper>
    </Home>
  );

}else{
  return(
    <>
        <Home>
          <Wrapper>
            <Card>
              <Image>
                <img src={unknow} alt="Unknow Movie" width={280} height={414}/>
              </Image>
              <Details>
                <h2>Favorite Not Found</h2>
                
              </Details>
              <ButtonsWrapper>
              <button onClick={() => history.push("./")}>
                Back to Home
              </button>
              </ButtonsWrapper>

            </Card>
            
          </Wrapper>
        
        </Home>

  </>
  )
  }
};



const Home = styled.div`
  min-height: 100vh;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://yourdream.s3.amazonaws.com/media/cache/25/c8/25c804fba894a04155070d9290e1f208.jpg");
  background-size: cover;
  background-attachment:fixed;

`;

const Wrapper = styled.div`
 min-height: 70vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  margin-top: 10px;

`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 280px;
  grid-template-rows: 430px 130px 60px;
  grid-template-areas: "image" "text";
  border-radius: 18px;
  background: black;
  color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  font-family: roboto;
  transition: 0 0.5s ease;
  margin: 30px;

  :hover {
    transform: scale(1.15);
    box-shadow: 5px, 5px, 15px rgba (0, 0, 0, 0, 6);
  }
`;

const Image = styled.div`
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
  img {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }
`;

const Details = styled.div`
  display: column;
  grid-area: text;
  text-align: left;
  h2 {
    text-align: center;
    margin-bottom: 10px;
  }
  h3 {
    margin-left: 15px;
  }
`;

const ButtonsWrapper = styled.div`
  
  width: 270px;
  height: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  
  button {
    cursor: pointer;
    padding: 5px;
    font-weight: 700;
    color: white;
    background-color: darkgoldenrod;
    border-radius: 10px;
    transition: all ease-out 0.3s;
    &:hover {
      filter: brightness(0.8);
    }
    &:first-child {
      width: 50%;
    }
    &:last-child {
      width: 50%;
    }
  }
`;
