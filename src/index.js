import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './css/main.scss';
import Layout from './js/Layout';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Router>
		<Layout />
	</Router>
);
