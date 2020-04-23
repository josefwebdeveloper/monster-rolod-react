import React, {useState, useEffect} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component'
// import axios from 'axios';

function App() {
    const [monsters, monsterSet] = useState([]);
    const [searchField, searchSet] = useState('');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                monsterSet(users);
            });
    }, []);
    const onSearchChange = event => {
        searchSet(event.target.value)
    };
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
        <div className="App">
            <h1>Monsters Rolodex</h1>
            <SearchBox onSearchChange={onSearchChange}/>
            <CardList monsters={filteredMonsters} />
        </div>
    );
}

export default App;
