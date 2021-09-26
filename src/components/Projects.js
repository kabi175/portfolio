import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data';

function Projets() {
	return (
		<div className='w-full flex flex-col items-center py-10 px-5 md:px-7'>
			<h1 className='text-5xl font-bold text-black self-center'>
				Projects
			</h1>
			<div className='w-full xl:w-11/12 flex flex-row flex-wrap justify-center pt-8'>
				{projects.map(
					(
						{ title, description, language, repoUrl, demoUrl },
						id
					) => (
						<ProjectCard
							key={id}
							title={title}
							description={description}
							language={language}
							repoUrl={repoUrl}
							demoUrl={demoUrl}
						/>
					)
				)}
			</div>
		</div>
	);
}

export default Projets;
