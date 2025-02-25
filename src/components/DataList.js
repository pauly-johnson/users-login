import React, { useEffect, useState } from 'react';
import { getData, deleteData } from '../api';

const DataList = () => {
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        getData().then(setData).catch(console.error);
    }, []);

    const handleDelete = async (id) => {
        await deleteData(id);
        setData(data.filter(item => item._id !== id)); // Remove from UI
    };

    return (
        <div>
            <h2>Data List</h2>
            <ul>
                {data.map(item => (
                    <li key={item._id}>
                        {item.name} - {item.value}
                        <button onClick={() => handleDelete(item._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DataList;
