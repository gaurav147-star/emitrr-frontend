import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import Home from "./pages/Home";
import Progress from "./pages/Progress";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import QuizForm from "./pages/QuizForm";
import Result from "./pages/Result";

function App() {
  const user = useSelector((state) => state.auth.user);
  // console.log(user);
  const data = localStorage.getItem("rememberMe");
  const isLogin = sessionStorage.getItem("isLogin");
  console.log(data)
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={  isLogin? <Home /> : <Login/>} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Register />} />
          <Route path="/leaderboard" exact element={<Leaderboard />} />
          <Route path="/progress" exact element={<Progress />} />
          <Route path="/exercise" exact element={<QuizForm />} />
          <Route path="/result" exact element={<Result />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
