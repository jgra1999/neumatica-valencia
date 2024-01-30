import React from 'react'

interface Props {
	name: string
}

export default function SideMenuOptions({ name }: Props) {
	return (
		<li>
			<a href='#' className='hover:text-primary text-lg font-medium'>
				{name}
			</a>
		</li>
	)
}
