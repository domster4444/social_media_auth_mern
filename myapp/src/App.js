import { useEffect, useState } from 'react';
import Nav from 'library/common/components/Nav';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from 'modules/Home/Home';
import Post from 'modules/Home/Post';
import Login from 'modules/Home/Login';

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUserFunc = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': true,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            console.log('login success');
            return res.json();
          }
          throw new Error('authentication has been failed!!');
        })
        .then((returnedResJsonObj) => {
          setUser(returnedResJsonObj.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUserFunc();
  }, []);
  // 🌄🌄🌄🌄🌄🌄🌄----
  console.log(user);
  // 🌄🌄🌄🌄🌄🌄🌄-----
  return (
    <div>
      <Nav user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={user !== null ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/post"
          element={user === null ? <Navigate to="/login" /> : <Post />}
        />
      </Routes>
    </div>
  );
}

export default App;
