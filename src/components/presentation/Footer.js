import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <hr/>
            <ul>
                <li>
                    <Link to={{
                        pathname: "/measurement"
                    }}>
                        <div>Icon</div>
                        <div>Add measure</div>
                    </Link>
                </li>
                <li>
                    <Link to={{
                        pathname: "/track"
                    }}>
                        <div>Icon</div>
                        <div>Track it</div>
                    </Link>
                </li>
                <li>
                    <Link to={{
                        pathname: "/progress"
                    }}>
                        <div>Icon</div>
                        <div>Your progress</div>
                    </Link>
                </li>
                <li>
                    <Link to={{
                        pathname: "/more"
                    }}>
                        <div>Icon</div>
                        <div>More</div>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;