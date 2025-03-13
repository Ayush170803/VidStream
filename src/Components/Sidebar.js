import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () =>
{
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

    if(!isMenuOpen) return null; //early return

    return(
        <div id="sidebar">
        <h2>You</h2>
        <ul>
            <li>
            <Link to="/main" style={{ textDecoration: 'none' }}>Home</Link>
            </li>
            <li>Playlist</li>
            <li>Liked Videos</li>
            <li>Shorts</li>
        </ul>
        <br></br>
        <h2>Explore</h2>
        <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Videos</li>
            <li>Gaming</li>
        </ul>
        <br></br>
        <h2>Subscriptions</h2>
        <ul>
            <li>T-Series</li>
            <li>FreeCodeCamp</li>
            <li>CodeHelp</li>
            <li>Netflix</li>
        </ul>
        </div>
    );
};

export default Sidebar;