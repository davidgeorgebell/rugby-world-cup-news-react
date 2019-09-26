import React from 'react';
import NewsList from './components/NewsList';
import './App.css';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stories: [],
      searchField: '',
    }
  }

  componentDidMount() {
    fetch(`https://newsapi.org/v2/everything?q=rugby-world-cup&apiKey=${API_KEY}`)
    .then(res => res.json() 
    .then(data => this.setState({stories: data.articles}))
    )
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render(){
    const { stories } = this.state
    return (
      <div className="App">
      <h1>Top Rugby World Cup 2019 News <span role='img' aria-label='ball'>🏉</span></h1>
       <NewsList stories={stories} />
      </div>
    );
    }

  }


  export default App;












