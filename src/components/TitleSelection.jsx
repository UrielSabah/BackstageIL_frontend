// eslint-disable-next-line react/prop-types
const TitleSelection = ({ selectedOption }) => {
    console.log('Selected Option in TitleSelection:', selectedOption);
    return (
        <div>
            <h2>Selected Option: {selectedOption?.city_and_hall_name || 'No option selected'}</h2>
        </div>
    );
};

export default TitleSelection;