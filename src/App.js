import logo from "./logo.svg";
import "./App.css";
import UserProfileCard from "./Components/UserProfileCard/UserProfileCard";
import SignUp from "./Components/SignUpPage/SignUp";
import Box from "./Components/box/box";

function App() {
  return (
    <div className="App">
      <UserProfileCard />
      <SignUp />
      <Box />
    </div>
  );
}

export default App;
