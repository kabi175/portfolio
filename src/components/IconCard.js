import React from 'react';
import { Icon } from '@iconify/react';

export default function IconCard({ url, id, icon, svg }) {
	return (
		<>
			<a
				href={url}
				target='_blank'
				rel='noreferrer'
				key={id}
				className='transform hover:scale-125 text-3xl p-3'
			>
				{svg ? (
					<Icon width={40} icon={icon} />
				) : (
					<span className={icon} />
				)}
			</a>
		</>
	);
}
