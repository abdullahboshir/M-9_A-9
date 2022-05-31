import './home.css'
import image from "../../img/VR-Pro2.jpg"
import Users from '../../hooks/userInfo';
import Reviews from '../Reviews/Reviews';
import { useNavigate } from 'react-router-dom';
import ReviewsUi from '../ReviewsUi/ReviewsUi';



const Home = () => {
    const [users, setUsers] = Users();
    const ShowsProducs = users.slice(0, 3);
    const navigate = useNavigate()

    return (
        <div className='products-container'>
            <div className='products'>
                <div className="products-info">
                    <h1>VIVE PRO 2 HEADSET</h1>
                    <h1>SHARP. PRECISE. IMMERSIVE</h1>
                    <p>Industry-defining balanced construction and adjustability. A comfortable fit for VR sessions of any length and purpose. Suits a wide-range of head sizes and vision types, even glasses.</p>
                    <button>LIVE DEMO</button>
                </div>
                <div className="products-img">
                    <img src={image} alt="" />
                </div>

            </div>

            <div>
                <h1 className='review'>Customer Reviews ({ShowsProducs.length})</h1>
                <Reviews users = {ShowsProducs} ReviewsUi = {ReviewsUi}/>
                <button onClick={() => navigate('/allreviews')}>
                    See All Reviews
                </button>
            </div>
        </div>
    );
};
export default Home;