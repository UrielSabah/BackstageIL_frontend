import  { useState } from 'react';

const RadioButtons = ({ onRadioSelect }) => {
    const [selectedOption, setSelectedOption] = useState('option1');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        onRadioSelect(event.target.value);
    };

    return (
        <div>
            <input
                type="radio"
                id="option1"
                name="Hall Information"
                value="Hall Information"
                checked={selectedOption === 'Hall Information'}
                onChange={handleOptionChange}
            />
            <label htmlFor="option1">Hall Information</label><br />

            <input
                type="radio"
                id="option2"
                name="Hall Pictures"
                value="Hall Pictures"
                checked={selectedOption === 'Hall Pictures'}
                onChange={handleOptionChange}
            />
            <label htmlFor="option2">Hall Pictures</label><br />

            <input
                type="radio"
                id="option3"
                name="Hall Recommendations"
                value="Hall Recommendations"
                checked={selectedOption === 'Hall Recommendations'}
                onChange={handleOptionChange}
            />
            <label htmlFor="option3">Recommendations</label><br />
        </div>
    );
};

export default RadioButtons;