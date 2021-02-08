import React from 'react';

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchTerm: '',
            errorLabel: false
        };
    }
    handleInput(e){
        this.setState({
            searchTerm: e.target.value
        });
    }
    handleSearch(e){
        e.preventDefault();
        const termToBeSearched = this.state.searchTerm.trim();
        if(termToBeSearched.length >= 3){
            this.setState({
                errorLabel: false
            });
            // get the data
            fetch(`http://www.omdbapi.com/?apikey=28ad8eec&s=${termToBeSearched}&type=movie`)
            .then(response => response.json() )
            .then( (data) => {
                console.log(data);
                this.props.updateData(data.Search);
            });
        }
        else{
            this.setState({
                errorLabel: 'Please Enter a term with minimum 3 characters.'
            });
        }
    }
    render() {
        return ( <form onSubmit={(e) => this.handleSearch(e) }>
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    value={this.state.searchTerm} 
                    onChange={ (e) => { 
                        this.handleInput(e);
                    }}
                />
                <button type="submit" className="btn btn-primary"> Search </button>
            </div>
            {
                this.state.errorLabel && 
                <p>
                    {this.state.errorLabel}
                </p> 
            }
        </form>)
    }
}

export default Search;