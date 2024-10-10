import React from 'react';

function NameList() {
    const names = ['tuan', 'tigren', 'nam', 'vutuan', 'son'];

    return (
        <div>
                {names.map((name, index) => (
                    <p key={index}>{name}</p>
                ))}
        </div>
    );
}

export default NameList;
