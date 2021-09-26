import React from 'react';

import { links } from '../data';
import IconCard from './IconCard';
export default function Icons() {
	return (
		<div className='flex'>
			{links.map(({ url, icon, svg }, id) => {
				return <IconCard url={url} id={id} icon={icon} svg={svg} />;
			})}
		</div>
	);
}
