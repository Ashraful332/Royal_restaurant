import { Link } from "react-router";


const Fail = () => {
    return (
        <div>
            <h1>The payment is Fail</h1>
            <p>Try again</p>
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default Fail;