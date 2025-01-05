import { useState, useEffect } from "react";
import { fetchHallDetails } from "../services/Api.jsx"; // Import the API function
import PropTypes from "prop-types";

function LayoutHallInformation({ selectedHall }) {
    const [hallDetails, setHallDetails] = useState(null);  // State to store fetched hall data
    const [loading, setLoading] = useState(true);           // State for loading status
    const [error, setError] = useState(null);               // State for error handling

    // Fetch hall details when selectedHall changes
    useEffect(() => {
        const getHallDetails = async () => {
            setLoading(true);  // Set loading to true while fetching
            setError(null);    // Reset any previous error
            console.log("Hall selected:", selectedHall);

            const data = await fetchHallDetails(selectedHall);
            if (data) {
                setHallDetails(data);  // Set the data if fetched successfully
            } else {
                setError("Failed to fetch hall details"); // Set error if data is not found
            }
            setLoading(false);  // Set loading to false after fetching
        };

        getHallDetails();  // Call the function to fetch hall details
    }, [selectedHall]); // The effect depends on selectedHall

    // Render loading state or error message
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    // Render the hall details if available
    return (
        <div className="p-3">
            <p>
                Below are the details for <strong>{hallDetails.hall_name}</strong>:
            </p>
            <table className="table table-striped mt-3">
                <tbody>
                <tr>
                    <th>City</th>
                    <td>{hallDetails.city}</td>
                </tr>
                <tr>
                    <th>Hall Name</th>
                    <td>{hallDetails.hall_name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>
                        <a href={`mailto:${hallDetails.email}`}>{hallDetails.email}</a>
                    </td>
                </tr>
                <tr>
                    <th>Stage</th>
                    <td>{hallDetails.stage ? "Yes" : "No"}</td>
                </tr>
                <tr>
                    <th>Pipe Height</th>
                    <td>{hallDetails.pipe_height} meters</td>
                </tr>
                <tr>
                    <th>Stage Type</th>
                    <td>{hallDetails.stage_type}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

LayoutHallInformation.propTypes = {
    selectedHall: PropTypes.string.isRequired,
};

export default LayoutHallInformation;
