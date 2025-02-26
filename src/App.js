import React from 'react';
import CreateData from './components/CreateData';
import DataList from './components/DataList';
// import Button from '@mui/material/Button';

function App() {
    return (
        <div>
            <h1>React & Node.js CRUD App</h1>
            <CreateData />
            <DataList />
            {/* <Button variant="contained">Hello world</Button>; */}
        </div>
    );
}

export default App;
