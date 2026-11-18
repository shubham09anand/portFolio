import './App.css';
import "./style/Fonts.css"
import Home from "./component2/Home";
import LinkedInMessage from './Internal/Linkdinemessage';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/outreach-message" element={<LinkedInMessage />} />
			</Routes>
		</>

	);
}

export default App;
