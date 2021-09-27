import React from 'react';

import { links } from '../data';
import IconCard from './IconCard';
export default function Icons() {
	return (
		<div className='flex flex-row flex-wrap '>
			{links.map((obj, id) => {
				return <IconCard id={id} {...obj} />;
			})}
		</div>
	);
}
