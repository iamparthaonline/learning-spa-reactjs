import React from 'react';
import Layout from '../components/Layout';
import Heading from '../components/Heading';
import Search from '../components/Search';
import MovieList from '../components/MovieList';

class HomePage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchResult: false
        };
    }

    updateSearchResult( data ){
        this.setState({
            searchResult: data
        });
    }

    render(){
        return (
            <Layout> 
                <Heading headingText="Search Movies"/> 
                <Search updateData = { (data) => { this.updateSearchResult(data) } }/> 
                <MovieList movies={this.state.searchResult}/> 
            </Layout>
        );
    }
}

export default HomePage;