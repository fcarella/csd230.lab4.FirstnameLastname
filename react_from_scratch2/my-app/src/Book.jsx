import React, {useEffect, useState} from 'react';
import './App.css'

function Book() {
    /* RandomUserData.js */
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // fetch('https://random-data-api.com/api/users/random_user')
        fetch('http://localhost:8080/rest/book')
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

    return (
        <div>
            {userData && (
                <div>
                    <h2>User Information</h2>
                    <p>
                        {userData.id}
                        Name:
                        {userData.author}
                        {userData.title}
                    </p>
                    <p>
                        Email: {userData.description}
                    </p>
                    {/* Add more user data fields as needed */}
                </div>
            )}
        </div>
    );
}

export default Book
