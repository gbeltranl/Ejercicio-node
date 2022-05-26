import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import { Card } from './components/Card';

function App() {
  
  const dataSource = [
    {
      title: 'Rick',
      url: 'about:blank',
      description: 'Some text'
    },
    {
      title: 'Rick',
      url: 'about:blank',
      description: 'Some text'
    },
    {
      title: 'Rick',
      url: 'about:blank',
      description: 'Some text'
    }
  ]
  const [characters, setCharacters] = useState([]);
  return (
    <>
    <h1>Rick y Morty</h1>
    <button type ='button' onClick={() => setCharacters(dataSource)} >Add dataSource</button>
    <button type ='button' onClick={() => setCharacters(dataSource)} >+1</button>
    {characters.map((elm,index) =>(
    {characters.map((elm,index) =>(
    <Card title = {elm.title} url = {elm.url} description = {elm.description}></Card>
    ))}
    </>
  );
}

export default App;
