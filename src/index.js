import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

// TODO: If app will be bigger we can create global context and save state there to avoid
//  prop drilling if structure became complex.
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);