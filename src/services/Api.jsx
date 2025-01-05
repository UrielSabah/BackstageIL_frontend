// services/api.js
const API_URL = "https://backstageil.onrender.com";

export const fetchHallList = async () => {
    try {
        const response = await fetch(`${API_URL}/music-halls-list`);
        const data = await response.json();
        console.log("API Data:", data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const fetchHallDetails = async (HallId) => {
    try {
        const hallId = HallId.toString();
        if (!hallId) {
            console.error("Hall not found");
            return;
        }
        console.log("API Response Object:", hallId);
        const response = await fetch(`${API_URL}/music-halls/${hallId}`);

        // Log the response object
        console.log("API Response Object:", response);
        const data = await response.json();

        // Log the actual data fetched from the API
        console.log("API Data:", data);
        return data;  // Return the fetched data
    } catch (error) {
        console.error("Error in fetchHallDetails:", error);
        return null;  // Return null if there is an error
    }
};
