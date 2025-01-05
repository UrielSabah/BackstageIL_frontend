import './Utils.css';
import GoogleAds from '../components/GoogleAds.jsx';

function Donations() {
    return (
        <div className="container common-page">
            <h1>Support Our Cause</h1>
            <GoogleAds adSlot="9204181023" width={728} height={90} />
            <p>Your contribution will make a real difference in [briefly describe the cause/project].</p>
            <p>To learn more or to make a donation, please contact us at:</p>
            <hr/>
            <h2>Contact Information</h2>
            <ul>
                <li>Email: [your_email_address]</li>
                <li>Phone: [your_phone_number]</li>
            </ul>
            <hr/>
            <GoogleAds adSlot="9204181023" width={728} height={90} />
        </div>
    );
}

export default Donations;
