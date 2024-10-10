import React, { useState } from 'react';

function SearchList() {
    const names = ['tuan', 'tigren', 'nam', 'vutuan', 'son'];
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredNames = names.filter(name =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Nhập tên để tìm kiếm..."
                value={searchTerm}
                onChange={handleInputChange}
            />
            <div>
                {searchTerm && filteredNames.length > 0 && filteredNames.map((name, index) => (
                    <p key={index}>{name}</p>
                ))}
            </div>
            {searchTerm && filteredNames.length === 0 && (
                <p>Không tìm thấy tên nào!</p>
            )}
        </div>
    );
}

export default SearchList;
