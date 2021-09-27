import * as React from 'react';
import TypingEffect from './TypingEffect';

const About = ({ onFocusAbout }) => {
	return (
		<div className='h-screen bg-white bg-cloud bg-no-repeat bg-top bg-contain md:bg-center flex flex-col justify-center items-center font-semibold text-white bg-cloud-blue'>
			<div className='flex-grow flex items-center'>
				<div className='grid gap-y-5 place-items-center xl:gap-y-10 md:gap-y-8'>
					<img style={{ zIndex: 1 }} src='plane.gif' alt='plane' />

					<h1
						style={{ zIndex: 1 }}
						className='text-3xl xl:text-7xl md:text-6xl font-black font-sans'
					>
						Kabilan
					</h1>
					<h1
						style={{ zIndex: 1 }}
						className='font-normal text-xl md:text-4xl xl:text-5xl  font-thin'
					>
						<TypingEffect />
					</h1>
				</div>
			</div>
			<span
				className='hidden md:flex text-3xl animate-bounce fontawesome-download'
				onClick={onFocusAbout}
			/>
		</div>
	);
};
export default About;
