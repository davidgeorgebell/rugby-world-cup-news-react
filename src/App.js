import React from 'react';

import NewsList from './components/NewsList';

import './App.css';

const stories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Steve Jobs dies',
    url: 'https://apple.com',
    author: 'wasniac',
    num_comments: 10,
    points: 8,
    objectID: 2,
  },
];



class App extends React.Component {
  constructor() {
    super()

    this.state= {
      stories,
    }
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





