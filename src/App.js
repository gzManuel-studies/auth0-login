import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton'
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <LoginButton></LoginButton>
      <LogoutButton></LogoutButton>
      <div>
        <Profile></Profile>
      </div>
    </div>
  );
}

export default App;
