import React, { useRef } from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
	const ref = useRef(null);
	return (
		<div className='font-mono'>
			<Home
				onFocusAbout={() => {
					if (ref.current) {
						console.log('focus');
						ref.current.focus();
					}
				}}
			/>{' '}
			<About Ref={ref} /> <Skills /> <Projects /> <Footer />
		</div>
	);
}

export default App;
