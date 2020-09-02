import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

export default class Main extends Component {
  state = {
    Movie: {
      Plot: "Logo após preencher o campo acima, aqui terá a descrição do filme!",
      Poster: "https://image.freepik.com/fotos-gratis/fundo-abstrato-preto-escuro-com-lascas-de-madeira_24972-208.jpg",
      Title: "Preencha o campo acima!"
    }
  }

  loadMovies = async ( nameMovie ) => {
    nameMovie = document.getElementById("nameMovie").value;
    try {
      const response = await api.get(`?t=${ nameMovie }&apikey=5dfda1de`);
      
      if(response.data.Response == "False") {
        alert("Filme não encontrado, tente outro título!");
      } else {
        this.setState({ Movie: response.data }); 
        console.log(this.state);
      }

    } 
    catch (error) {
      alert(`Erro ao pesquisar ${ nameMovie }, tente novamente!`);
    }
  };

  render() {
    const { Movie } = this.state;

    return(
      <div className = "App-Main">
        <div className = "search-movie">
          <input id = "nameMovie" type = "text" placeholder = "Nome do Filme..." required></input>
          <button onClick = { this.loadMovies }> Pesquisar </button>
        </div>
        <div className = "results">
          <article>
            <h2> { Movie.Title } </h2>
            <img src = { Movie.Poster } />
            <p> <strong>Descrição:</strong> { Movie.Plot } </p>
            <Link id = "detail" to = { `/${ Movie.imdbID }` }> Ver mais </Link>
          </article>
        </div>
      </div>
    )
  };
}