import React, { useState, useEffect } from 'react';
import { updateData } from '../api';

const UpdateData = ({ item, onUpdate }) => {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');

    useEffect(() => {
        if (item) {
            setName(item.name);
            setValue(item.value);
        }
    }, [item]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await updateData(item._id, { name, value });
        onUpdate(); // Refresh the data list after update
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Update Data</h3>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} required />
            <button type="submit">Update</button>
        </form>
    );
};

export default UpdateData;
