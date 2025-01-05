import './MainLayout.css';
import TitleSelection from '../components/TitleSelection';
import LayoutHallInformation from '../components/LayoutHallInformation';
import LayoutHallPictures from '../components/LayoutHallPictures';
import HallRecommendations from '../components/HallRecommendations';

import GoogleAds from "./GoogleAds.jsx";
import PropTypes from "prop-types";


const MainLayout = ({ selectedRadioOption, selectedDropdownOption }) => {

    const renderLayout = () => {
        switch (selectedRadioOption) {
            case 'Hall Information':
                return <LayoutHallInformation selectedHall={selectedDropdownOption.id.toString()} />;
            case 'Hall Pictures':
                return <LayoutHallPictures/>;
            case 'Hall Recommendations':
                return <HallRecommendations/>;
            default:
                return null;
        }
    };
    return (
        <div className="main-layout">
            <TitleSelection selectedTitleOption={selectedDropdownOption.name}/>
            <GoogleAds adSlot="9204181023" width={728} height={90}/>
            <h2>Selected {selectedRadioOption}:</h2>
            {renderLayout()}
            <GoogleAds adSlot="9204181023" width={728} height={90}/>
        </div>

    );
};

MainLayout.propTypes = {
    selectedRadioOption: PropTypes.string.isRequired,
    selectedDropdownOption: PropTypes.object.isRequired,
};
export default MainLayout;
