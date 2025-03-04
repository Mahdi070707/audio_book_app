import '../styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="charcoal">
      <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
        <form className="bg-light p-4 rounded">
          <h2>Login</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password:</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <button type="submit" className="btn gold w-100">Login</button>
        </form>
      </div>
      
    </div>
  );
}

export default Login;
