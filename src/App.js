import React from 'react';

import Article from './components/Article'
import './App.css';
import Navbar from './components/Navbar'
class App extends React.Component{
    // state={
    //     items:[]
    // }
    // componentDidMount(){
    //    axios.get('http://qa.parentlane.com/api/content-feed/')
    //     .then((response)=> {
    //         //console.log(response.data.content[4].article.text)
    //         this.setState({
    //             items:response.data.content
    //         })
    //     })
    //     .catch(err=>console.log(err)) 
    // axios({
    //     method:'GET',
    //     url:'http://qa.parentlane.com/api/content-feed/',
    //     dataType:'jsonp',
    //     success:(response)=> {
    //     console.log(response.data.content[4].article.text)
    //     this.setState({
    //         items:response.data.content
    //     })},
    //     faliure:(err=>console.log(err))

    // })
    
    render(){
        return(
            <div className="app">
            <Navbar/>
                <Article />
            </div>
        )
    }

}
export default App;
