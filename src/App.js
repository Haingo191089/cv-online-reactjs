import './common/scss/variables.scss';
import './common/scss/common.scss';
import './App.css';

import {
	createBrowserRouter,
	RouterProvider,
  } from "react-router-dom";

import {routes} from './routers/routes';

const router = createBrowserRouter(routes);

function App() {
	return (
		<div className="container-fluid h-100">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
