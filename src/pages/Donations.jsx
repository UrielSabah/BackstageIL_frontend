import './Utils.css';
import GoogleAds from '../components/GoogleAds.jsx';

function Donations() {
    return (
        <div className="container common-page">
            <h1>Support Our Cause</h1>
            <GoogleAds adSlot="9204181023" width={728} height={90} />

            <p>BackstageIL is dedicated to providing a modern, user-friendly platform that centralizes backstage
                information for music halls across Israel. Your support will help us continue developing innovative
                features and enhancing the user experience for event organizers, musicians, and venue managers.</p>

            <p>Your contribution will go directly towards platform improvements, hosting costs, and future integrations
                with advanced tools and services to make BackstageIL the ultimate resource for event logistics.</p>

            <p>To support us, please visit our donation page:</p>

            <h2><a href="https://ko-fi.com/backstageil" target="_blank" rel="noopener noreferrer">Click to donate via Ko-fi</a>
            </h2>

            <hr/>
            <GoogleAds adSlot="9204181023" width={728} height={90} />
        </div>
    );
}

export default Donations;
