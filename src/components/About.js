import React from 'react';
import Icons from './Icons';

export default function About({ Ref }) {
	return (
		<div
			ref={Ref}
			tabIndex='-1'
			className='bg-white pt-10 px-3  flex flex-col justify-center items-center text-lg'
		>
			<h1 className='text-4xl md:text-5xl font-bold'>Hello World! 👋</h1>
			<div className='py-5 md:text-4xl text-gray-600  xl:w-4/6'>
				<p className='py-5 px-3'>
					My name is kabilan. I'm a Student who is passionate about
					software development and competitive programming.
				</p>
				<p className='py-5 px-3'>
					I enjoy learning new technologies in the ever-changing
					computer science field and thrive to build upon my existing
					knowledge with experience.
				</p>
				<p className='py-5 px-3'>
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
				<Icons />
			</div>
		</div>
	);
}
