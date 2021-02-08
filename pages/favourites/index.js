import React from 'react';
import MovieList from '../../components/MovieList';

class FavouritesPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            data: false
        };
    }

    componentDidMount(){
        if(window && window.localStorage){
            let favData = window.localStorage.getItem('learn_react');
            this.setState({
                data: favData
            });
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.data && <MovieList movies = { JSON.parse(this.state.data) }/>
                }
            </div>
        )
    }
}
export default FavouritesPage;