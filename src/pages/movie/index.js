import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './style.css';


export default class movie extends Component {
  state = {
    Movie: {}
  }

  componentDidMount() {
    this.loadMovie();
  }

  loadMovie = async () => {
    const { id } = this.props.match.params;

    const response = await api.get(`/?i=${ id }&apikey=5dfda1de`);

    this.setState({ Movie: response.data });
    console.log(this.state.Movie);
  }
  
  render() {
    const { Movie } = this.state;

    return (
      <div className = "resulted">
          <article>
            <h2> { Movie.Title } </h2>
            <img src = { Movie.Poster } />
            <p> <strong>Descrição:</strong> { Movie.Plot } </p>
            <p> <strong>Atores:</strong> { Movie.Actors } </p>
            <p> <strong>Direção:</strong> { Movie.Director } </p>
            <p> <strong>País de origem:</strong> { Movie.Country } </p>
            <p> <strong>Gênero:</strong> { Movie.Genre } </p>
            <p> <strong>Duração do filme:</strong> { Movie.Runtime } </p>
            <p> <strong>Ano de lançamento:</strong> { Movie.Year } </p>
            <p> <strong>Nota IMDB:</strong> { Movie.imdbRating } </p>
            <Link id = "detail" to = { '/' }> Voltar a pagina anterior </Link>
          </article>
        </div>
    )
  }
}