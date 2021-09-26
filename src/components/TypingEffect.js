import React from 'react';
import ReactTypingEffect from 'react-typing-effect';

const tags = [
	'Backend Developer',
	'Web Developer',
	'Mobile App Developer',
	'Competitive Programmer',
];

export default function TypingEffect() {
	return (
		<ReactTypingEffect
			text={tags}
			speed={100}
			eraseSpeed={50}
			eraseDelay={2500}
			typingDelay={1000}
			cursor='▊'
		/>
	);
}
