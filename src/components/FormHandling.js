import React, { useState } from 'react';

function FormHandling() {
    const [name, setName] = useState('');
    const [submittedName, setSubmittedName] = useState('');

    const handleInputChange = (event) => {
        setName(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmittedName(name);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>

                    <input
                        type="text"
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            {submittedName && (
                <p>Your name is: {submittedName}</p>
            )}
        </div>
    );
}

export default FormHandling;
