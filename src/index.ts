import { createElement } from 'react';
import { render } from 'react-dom';
import Login from './login';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <Login />
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};

render(<App />, document.getElementById('root'));