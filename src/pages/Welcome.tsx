import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Welcome() {
  return (
    <div className="navy">
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <h1 className="text-white">Welcome to Your Audiobook Library</h1>
      </div>
    </div>
  );
}

export default Welcome;
