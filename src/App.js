import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MyNavBar from './core/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import NotFound from "./pages/NotFound";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(() => {
        // When isLoggedIn changes, update user data in local storage
        if (isLoggedIn) {
            sessionStorage.setItem('token', JSON.stringify(token));
        } else {
            sessionStorage.removeItem('token');
        }
    }, [isLoggedIn, token]);

    return (
        <div>
            <BrowserRouter>
                <MyNavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser}
                          setUsers={setUsers}/>
                <Routes>

                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/login" element={<LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
                                                             setUser={setUser} setToken={setToken} setUsers={setUsers}/>}/>
                    <Route exact path="/" element={<HomePage user={user} users={users}/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default App;
