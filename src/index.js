import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import "./App.css"
import App13 from './App13';


// ReactDOM.render(<App12 />,document.getElementById('root'));

const root=createRoot(document.getElementById('root'));
root.render(<App13 name='I am props' />)







// ReactDOM.render(el,document.getElementById('root'));
