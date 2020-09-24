import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './MainSearch.scss';


export default class MainSearch extends Component {

    state = {
        mainSearchDropdown: false
    }


    handleChange = (e) => {
        this.setState({
            mainSearchDropdown: true
        })
    }
    handleFocusOut = (e) => {
        this.setState({
            mainSearchDropdown: false
        })
    }

    render() {
        const { mainSearchDropdown } = this.state;

        return (
            <Router>
                <div>
                    <div className="wrapper">
                        <div className="nav-bar">
                            <div>
                                <a href="#">About</a>
                                <a href="#">Store</a>
                            </div>
                            <div>
                                <a href="#">Gmail</a>
                                <a href="#">Images</a>
                                <input type="button" value="Sign In" />
                            </div>
                        </div>
                        <div className="hero-container">
                            <img className="poodle-hero-img" src="https://fontmeme.com/permalink/200922/16bf0f375ad5e81bd6128af3a69a0b59.png" />
                        </div>
                        <div className="search-container">
                            <div className={mainSearchDropdown ? "search-bar-dropdown" : "search-bar-wrapper"} >
                                <div className="search-icon"></div>
                                <input
                                    onChange={this.handleChange}
                                    onBlur={this.handleFocusOut}
                                    type="text"
                                    className="search-bar-input" />
                                <div className={mainSearchDropdown ? "search-dropdown-contents" : "hide"}>
                                    <hr />
                                    {/* loop through and print the api auto-complete here  */}
                                    <div className="lucky-buttons">
                                        <input type="button" value="Poodle Search" />
                                        <input type="button" value="I'm Feeling Lucky" />
                                    </div>
                                </div>
                            </div>
                            <div className={`lucky-buttons ${mainSearchDropdown ? "hide" : ""}`}>
                                {/* these will need to be sumbit for the API  */}
                                <Link to="/results">
                                    <input type="button" value="Poodle Search" />
                                </Link>
                                <input type="button" value="I'm Feeling Lucky" />
                            </div>
                        </div>
                        <div className="footer">
                            <span>Australia</span>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/results">
                        <ResultsSearch />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

function ResultsSearch() {
    return <ResultsSearch />
}