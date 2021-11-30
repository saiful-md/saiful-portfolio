// import { useState } from 'react';
import AboutMe from './Components/AboutMe/AboutMe';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import MyProjects from './Components/MyProjects/MyProjects';
// import Navigation from './Components/Navigation/Navigation';
import SendMessage from './Components/SendMessage/SendMessage';

function App() {
	return (
		<div>
			{/* <Navigation /> */}
			<Header />
			<AboutMe />
			<MyProjects />
			<SendMessage />
			<Footer />
		</div>
	);
}

export default App;
