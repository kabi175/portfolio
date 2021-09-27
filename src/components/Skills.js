import React from 'react';
import { languages, frameworks, tools } from '../data';

const SkillSection = ({ titile, list }) => {
	return (
		<div className='pb-10 xl:grid xl:place-items-center'>
			<div className='flex flex-wrap justify-center'>
				{list.map((value, id) => (
					<div
						key={id}
						className='h-10 m-3  grid place-content-center rounded-lg bg-white transform hover:scale-110'
					>
						<p className=' p-3 text-gray-700 text-md md:text-lg font-semibold'>
							{value}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

const Skills = () => {
	return (
		<div className='bg-cloud-blue flex justify-center items-center pt-10'>
			<div className='w-full xl:w-3/5 grid place-items-center px-3 md:px-6  lg:px-12 xl:px-0'>
				<h1 className='text-4xl md:text-5xl text-white font-black pb-6 flex'>
					My Tech Backpack{' '}
					<span className='hidden md:flex pl-3'> 🎒 </span>
				</h1>{' '}
				<SkillSection
					titile='Programming Languages'
					list={[...languages, ...frameworks, ...tools]}
				/>
			</div>
		</div>
	);
};

export default Skills;
