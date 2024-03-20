import logo from './logo.svg';
import './App.css';
import UserProfileCard from './Components/UserProfileCard/UserProfileCard';
import SignUp from './Components/SignUpPage/SignUp';

function App() {
  return (
    <div className="App">
      <UserProfileCard/>
      <SignUp/>
    </div>
  );
}

export default App;
