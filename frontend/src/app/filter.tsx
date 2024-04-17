import React, { useState } from 'react';

const MyComponent: React.FC = () => {
  // State to hold the filter value
  const [filterValue, setFilterValue] = useState<string>('');

  // Function to handle changes in the filter input
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value);
  };

  // Sample data
  const data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];

  // Filter the data based on the filterValue
  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div>
      {/* Filter input */}
      <input
        type="text"
        placeholder="Filter by name"
        value={filterValue}
        onChange={handleFilterChange}
      />

      {/* Display filtered data */}
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
