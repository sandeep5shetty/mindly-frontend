import { useEffect, useState } from 'react';
import './App.css';
import { SidebarDemo } from './components/SidebarDemo';
import { AuthPage } from './components/AuthPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('jwt-token');
    console.log(token);
    if (token) {
      setIsLoggedIn(true);
      return;
    } else {
      <AuthPage />;
    }
  }, []);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {isLoggedIn ? <SidebarDemo /> : <AuthPage />}
    </div>
  );
}

export default App;
