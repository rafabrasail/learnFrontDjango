import React from "react";
import ListComponent from "./ListComponent";


export default class UserLists extends React.Component{
    state = {lists: null, loading: true}
    
    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 93ecd5b338cb11f82cd9d41f2e3817a1ee564fc5'

        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false})
    }

    render(){
        return(
            <div>
                <ListComponent listName={'Minha Lista'} />
                <ListComponent listName={'Minha Lista 2'} />
            </div>
        )
    }
}