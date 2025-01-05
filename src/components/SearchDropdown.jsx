import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const MyDropdown = ({ onDropdownSelect }) => {
    const [selectedDropdownOption, setSelectedDropdownOption] = useState('dropdown1');

    const handleDropdownSelect = (eventKey) => {
        setSelectedDropdownOption(eventKey);
        onDropdownSelect(eventKey);
    };

    return (
        <DropdownButton
            id="dropdown-basic-button"
            title="Select an Option"
            onSelect={handleDropdownSelect}
        >
            <Dropdown.Item eventKey="dropdown1">Dropdown 1</Dropdown.Item>
            <Dropdown.Item eventKey="dropdown2">Dropdown 2</Dropdown.Item>
            <Dropdown.Item eventKey="dropdown3">Dropdown 3</Dropdown.Item>
        </DropdownButton>
    );
};

export default MyDropdown;