import PropTypes from "prop-types";

const TitleSelection = ({ selectedTitleOption }) => {
    console.log('Selected Option in TitleSelection:', selectedTitleOption);
    return (
        <div>
            <h2>Selected Hall: {selectedTitleOption || 'No option selected'}</h2>
        </div>
    );
};

TitleSelection.propTypes = {
    selectedTitleOption: PropTypes.string.isRequired
};

export default TitleSelection;