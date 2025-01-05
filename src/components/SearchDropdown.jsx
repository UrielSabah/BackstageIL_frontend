import { useState, useEffect } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { fetchHallList } from '../services/Api.jsx'; // Import the API function
import PropTypes from "prop-types";

const SearchDropdown = ({ onDropdownSelect }) => {
    const [options, setOptions] = useState([]); // State to store API response
    const [selectedOption, setSelectedOption] = useState(null); // State for selected option

    // Fetch options on component mount
    useEffect(() => {
        const loadOptions = async () => {
            try {
                const response = await fetchHallList(); // Call the API
                console.error('Fetched List:', response);
                setOptions(response); // Set options with API data
            } catch (error) {
                console.error('Failed to fetch hall options:', error);
            }
        };
        loadOptions();
    }, []);

    const handleDropdownSelect = (eventKey) => {
        const selected = options.find((option) => option.id.toString() === eventKey); // Find selected option
        if (selected) {
            setSelectedOption(selected.city_and_hall_name);
            onDropdownSelect({ id: selected.id, name: selected.city_and_hall_name }); // Pass id and name
        }
    };

    return (
        <DropdownButton
            id="dropdown-basic-button"
            title={selectedOption || 'Select an Option'}
            onSelect={handleDropdownSelect}
        >
            {options.map((option) => (
                <Dropdown.Item key={option.id} eventKey={option.id.toString()}>
                    {option.city_and_hall_name}
                </Dropdown.Item>
            ))}
        </DropdownButton>
    );
};

SearchDropdown.propTypes = {
    onDropdownSelect: PropTypes.object.isRequired,
};

export default SearchDropdown;
