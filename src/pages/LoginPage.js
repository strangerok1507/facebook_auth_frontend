import React from 'react';
import {useNavigate} from 'react-router-dom';

import {LoginSocialFacebook} from 'reactjs-social-login';
import {FacebookLoginButton} from 'react-social-login-buttons';
const LoginPage = ({isLoggedIn, setIsLoggedIn, setUser, setToken, setUsers}) => {

    const navigate = useNavigate();
    return (
        (<LoginSocialFacebook
            appId={process.env.REACT_APP_FB_APP_ID || ''}
            onResolve={(response) => {
                setUser(response.data)
                fetch("http://localhost:8000/facebook/",
                    {
                        method: "POST",
                        body: JSON.stringify({"auth_token": response.data['accessToken']}),
                        headers: {
                            'Content-Type': 'application/json; charset=utf-8'
                        }
                    }).then((response) => response.json())
                    .then((response) => {
                        setToken(response['tokens'])
                        setIsLoggedIn(true)
                        return response['tokens']
                    }).then((accessToken) => {
                    fetch("http://127.0.0.1:8000/user/",
                        {
                            method: "GET",
                            headers: {
                                 "Authorization": `Basic ${accessToken}`,
                                'Content-Type': 'application/json; charset=utf-8'
                            }
                        })
                }).then(
                    response => {
                        setUsers(response)
                    }
                ).catch(response =>{
                    console.error(response)
                })
                setIsLoggedIn(true)
                setUser(response.data)
                navigate('/');

            }}
            onReject={(response) => {
            }}
        >
            <FacebookLoginButton/>
        </LoginSocialFacebook>)
    );
};

export default LoginPage;
