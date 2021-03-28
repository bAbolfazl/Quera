import React from 'react';
import NotFound from './NotFound';

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movie: {}
        }
    }

    componentDidMount() {
        const { movie_id } = this.props.match.params
        fetch(`http://localhost:9000/movies/${movie_id}`)
        .then(res => res.json())
        .then(res => this.setState({ movie: res }))
        .catch(err => console.log(err.message))
        // debugger
    }

    render() {
        // if(!this.state.movie.banner) return <NotFound/>
        return (
            <div className='movie-detail container'>
                <img className='movie-banner' src={this.state.movie.banner} alt="" />
                <div className="detail-body">
                    <div>
                        <h2 className="card-title">{this.state.movie.title}
                            <span className='release-year'> {this.state.movie.release_year}</span>
                        </h2>
                        <div className='detail-description'>
                            <p className='card-description'>{this.state.movie.description}</p>
                        </div>
                    </div>
                    <div className='images'>
                        <img className='detail-img' src={this.state.movie.image} alt="" />
                    </div>
                </div>
            </div>
        )
    }
}
