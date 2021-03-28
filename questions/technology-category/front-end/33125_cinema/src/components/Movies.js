import React from 'react';
import MovieList from "./MovieList";

export default class Movies extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:9000/movies')
            .then(res => res.json())
            .then(movies =>
                this.setState({ 'movies': movies })
            );
    }

    render() {
        return (
            <div className='container'>
                <MovieList movies={this.state.movies} />
            </div>
        )
    }
}