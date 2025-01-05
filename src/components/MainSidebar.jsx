import './MainSidebar.css';
import SearchDropdown from '../components/SearchDropdown';
import RadioButtons from '../components/RadioButtons';

import { useState, useEffect }  from "react";
import {fetchHallList} from "../services/Api.jsx";


const MainSidebar = ({ onRadioSelect, onDropdownSelect }) => {
    // const [options, setOptions] = useState([]);
    //
    // useEffect(() => {
    //     const fetchDataFromAPI = async () => {
    //         try {
    //             const data = await fetchHallList();
    //             setOptions(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //             // Handle the error, e.g., display an error message to the user
    //         }
    //     };
    //
    //     fetchDataFromAPI();
    // }, []);

        return (
            <div className="main-sidebar">
                <h2>Search:</h2>
                <SearchDropdown onDropdownSelect={onDropdownSelect} />
                <RadioButtons onRadioSelect={onRadioSelect} />
            </div>
        );
    };
    export default MainSidebar;

