import React from 'react';
import { Icon } from '@iconify/react';

export default function IconCard({ url, id, icon, svg, name }) {
	return (
		<div className='relative group flex flex-col items-center'>
			<a
				href={url}
				target='_blank'
				rel='noreferrer'
				key={id}
				className='text-4xl'
			>
				{svg ? (
					<Icon width={45} icon={icon} />
				) : (
					<span className={icon} />
				)}
			</a>
			<div className='invisible group-hover:hidden bg-white'>
				<span className='shadow-lg border-4 px-2 text-sm'>{name}</span>
			</div>
			<div className='hidden group-hover:flex bg-white'>
				<span className='shadow-lg border-4 px-2 text-sm'>{name}</span>
			</div>
		</div>
	);
}
