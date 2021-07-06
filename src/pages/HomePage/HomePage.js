import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { IMDbLogoURL } from "./constants";

export const HomePage = ({ setMovie }) => {
  const [input, setInput] = React.useState();

  const history = useHistory();

  function handleSearchClick() {
    setMovie(input.toLowerCase());
    history.replace("../MovieCard");
  }

  function handleFavoriteClick() {
    
    history.replace("../../FavoritesCard");
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  return (
    <Home width="20px">
      <Wrapper>
        <IMDbLogo src={IMDbLogoURL} alt="IMDb Logo" />
        <SearchBar
          placeholder="Buscá tu Película"
          value={input}
          onChange={handleInputChange}
          type="search"
        />
        <ButtonsWrapper>
          <button disabled={!input} onClick={handleSearchClick}>Search</button>
          <button onClick={handleFavoriteClick}>Favorites</button>
        </ButtonsWrapper>
      </Wrapper>
    </Home>
  );
};

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://yourdream.s3.amazonaws.com/media/cache/25/c8/25c804fba894a04155070d9290e1f208.jpg");
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const SearchBar = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;

const IMDbLogo = styled.img`
  width: 350px;
  margin-bottom: 20px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  button {
    cursor: pointer;
    color: white;
    padding: 10px;
    font-weight: 600;
    background-color: darkgoldenrod;
    border: none;
    border-radius: 6px;
    transition: all ease-out 0.3s;
    &:hover {
      filter: brightness(0.8);
      transform: translateY(-4px);
    }
    &:first-child {
      width: 60%;
    }
    &:last-child {
      width: 40%;
    }
  }`
