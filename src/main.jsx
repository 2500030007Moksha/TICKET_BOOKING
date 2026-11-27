import React, {useEffect} from 'react';
import {createRoot} from 'react-dom/client';
import AuthModule from './modules/AuthModule.jsx';
import UserModule from './modules/UserModule.jsx';
import AdminModule from './modules/AdminModule.jsx';
import {actions, initialize} from './controller.js';
import './style.css';
function App(){ useEffect(()=>{initialize()},[]); return <><AuthModule actions={actions}/><UserModule actions={actions}/><AdminModule actions={actions}/></>; }
createRoot(document.getElementById('root')).render(<App/>);
