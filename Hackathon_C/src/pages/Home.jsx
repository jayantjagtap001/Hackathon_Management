import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Hackathon Management</h1>
      <nav>
        <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
      </nav>
    </div>
  );
};

export default Home;