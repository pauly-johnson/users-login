import React from 'react';
import CreateData from './components/CreateData';
import DataList from './components/DataList';

function App() {
    return (
        <div>
            <h1>React & Node.js CRUD App</h1>
            <CreateData />
            <DataList />
        </div>
    );
}

export default App;
