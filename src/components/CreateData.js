import React, { useState } from 'react';
import { createData } from '../api';

const CreateData = () => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createData({ name, value });
        setName('');
        setValue('');
        
        // alert('Data Added!');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} required />
            <button type="submit">Add Data</button>
        </form>
    );
};

export default CreateData;
