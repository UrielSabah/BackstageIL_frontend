import './Utils.css';
import GoogleAds from '../components/GoogleAds.jsx';


function AboutPage() {
    return (

        <div className="container common-page">

            <h1>About BackstageIL</h1>
            <GoogleAds adSlot="9204181023" width={728} height={90} />
            <p>
                Welcome to <strong>BackstageIL</strong>, your go-to resource for discovering backstage information about city halls across Israel.
                We aim to provide reliable and up-to-date details to help you plan and organize your events.
            </p>
            <hr />
            <h2>Contact Information</h2>
            <ul>
                <li><strong>Country:</strong> Israel</li>
                <li><strong>Email:</strong> <a href="mailto:urielsa@elementostage.com">contact@backstageil.com</a></li>
            </ul>
            <hr />
            <GoogleAds adSlot="9204181023" width={728} height={90} />

        </div>
    );
}

export default AboutPage;
