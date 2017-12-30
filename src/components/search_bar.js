import React, {Component} from 'react';  // import React from 'react';

/*
------FUNCTIONAL COMPONENT------
const SearchBar = () => {
    return <input/>;
};

Functional components do not have state object only Class based Components do

--------CLASS COMPONENT--------*/
class SearchBar extends Component{  //class SearchBar extends React.Component{
    constructor(props) { // Constructor function for initialization of variable and state
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div className = "search-bar">
                <div className = "col-md-6">
                    <input
                        className = "search-input form-control"
                        placeholder = 'Search'
                        value = {this.state.term} //  <---- Controlled Component
                        onChange = {(event) => this.onInputChange(event.target.value)}
                    />
                </div>
                <div className = "col-md-2">
                    <button
                        className = "search-btn btn btn-light"
                        onClick={() => this.onButtonClick(this.state.term)}
                    ><span className = "glyphicon glyphicon-search" aria-hidden="true"></span></button>
                </div>
                <br/>
                <br/>
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
    }

    onButtonClick(term) {
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;