import React, {Component} from "react";
import CardList from "../Components/CardList.js";
//import { robots } from "./robots";
import SearchBox from "../Components/SearchBox.js";
import ErrorBoundary from "../Components/ErrorBoundary";
import "./App.css"; 
import Scroll from "../Components/Scroll.js"
//import { robots } from "./robots";

class App  extends Component {
    constructor () {
        super()
        this.state = {
        robots: [],
        searchfield: "",
        }
    }

componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => { 
                return response.json();
            })
            .then((users) => {
                this.setState({robots: users
                });
             });
    }

    onSearchChange = (event => {
        this.setState({searchfield: event.target.value});
    });

    render (){
        const {robots, searchfield} = this.state;
        const FilteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            });

        if (this.state.robots.length === 0){
            return <h1 className="tc">Loading</h1>  
        } 
            else {
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange= {this.onSearchChange} />
                <Scroll>
                <ErrorBoundary>
                <CardList robots= {FilteredRobots}/>
                </ErrorBoundary>
                </Scroll>
            </div>
                );} 
    }
 }
 export default App;

 //state is simply an object, description of your apps object that describes your a 