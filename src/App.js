import React from 'react';
import NewsList from './components/NewsList';
import './App.css';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stories: [],
    }
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`)
    .then(res => res.json() 
    .then(data => this.setState({stories: data.articles}))
    )
  }

  render(){
    const { stories } = this.state
    return (
      <div className="App">
       <NewsList stories={stories} />
      </div>
    );
    }

  }


  export default App;












