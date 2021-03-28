import React from 'react';
import MovieCard from "./MovieCard";

export default class MovieList extends React.Component {
    render() {
        return (
            <div className='card-list container'>
                {this.props.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        )
    }
}
