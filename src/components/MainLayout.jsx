import './MainLayout.css';
import TitleSelection from '../components/TitleSelection';
import LayoutHallInformation from '../components/LayoutHallInformation';
import LayoutHallPictures from '../components/LayoutHallPictures';
import HallRecommendations from '../components/HallRecommendations';

import GoogleAds from "./GoogleAds.jsx";


const MainLayout = ({ selectedOption, selectedRadioOption, selectedDropdownOption }) => {

    const renderLayout = () => {
        switch (selectedRadioOption) {
            case 'Hall Information':
                return <LayoutHallInformation selectedHall={1} />;
            case 'Hall Pictures':
                return <LayoutHallPictures selectedOption={selectedRadioOption} />;
            case 'Hall Recommendations':
                return <HallRecommendations selectedOption={selectedRadioOption} />;
            default:
                return null;
        }
    };
    return (
        <div className="main-layout">
            <h1>Welcome to the Main Page</h1>
            <TitleSelection selectedOption={selectedOption}/>
            <GoogleAds adSlot="9204181023" width={728} height={90}/>
            <h2>Selected Options:</h2>
            <p>Radio Button: {selectedRadioOption}</p>
            <p>Dropdown: {selectedDropdownOption}</p>
            {renderLayout()}
            <GoogleAds adSlot="9204181023" width={728} height={90}/>
        </div>

    );
};

export default MainLayout;