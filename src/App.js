import React from 'react';
import './App.css';

const list = [
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



function App() {
  return (
    <div className="App">
     {
       
       list.map(item =>
        <>
        <span>
          <a href={item.url}><h3>{item.title}</h3></a>
        </span>
        <span>{item.points}</span>
        <span><p>{item.author}</p></span>
       </>
       )
       
     }
    </div>
  );
}

export default App;
