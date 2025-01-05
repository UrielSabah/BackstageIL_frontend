import { useState } from 'react';
import './MainPage.css';
import MainSidebar from '../components/MainSidebar';
import MainLayout from '../components/MainLayout';

const MainPage = () => {
    const [selectedRadioOption, setSelectedRadioOption] = useState('option1');
    const [selectedDropdownOption, setSelectedDropdownOption] = useState('dropdown1');

    return (
        <div className="main-page-container">
            <MainSidebar
                onRadioSelect={setSelectedRadioOption}
                onDropdownSelect={setSelectedDropdownOption}
            />
            <MainLayout
                selectedRadioOption={selectedRadioOption}
                selectedDropdownOption={selectedDropdownOption}
            />
        </div>
    );
};

export default MainPage;