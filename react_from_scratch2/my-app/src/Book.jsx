import { useState, useEffect } from 'react';

import './App.css'
function Book() {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log('here');
        fetch('http://localhost:8080/rest/book')
            .then((response) => response.json()
                .then((data) => {
                    console.log(data);
                    setData(data);
                }));

    }, []);


    return (
        <ul>
            {data.map(item => (
                <li key={item.id}>{item.title} by  {item.author}, a story about  {item.description}</li>
            ))}
        </ul>

    );
}

export default Book
