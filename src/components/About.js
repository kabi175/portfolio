import React from 'react';
import Icons from './Icons';

export default function About() {
	return (
		<div className='bg-white py-10 px-5  flex flex-col justify-center items-center'>
			<h1 className='text-5xl font-bold'>Hello World! 👋</h1>
			<div className='py-5 text-xl text-gray-600  xl:w-4/6'>
				<p className='py-5'>
					My name is kabilan. I'm a Student who is passionate about
					software development and competitive programming.
				</p>
				<p className='py-5'>
					I enjoy learning new technologies in the ever-changing
					computer science field and thrive to build upon my existing
					knowledge with experience.
				</p>
				<p className='py-5'>
					Get in touch at{' '}
					<a
						href='mailto:kabilan-muthusamy@outlook.com'
						target='_blank'
						rel='noreferrer'
						className='font-semibold hover:underline'
					>
						kabilan-muthusamy@outlook.com
					</a>
				</p>
			</div>
			<Icons />
		</div>
	);
}
