import React from 'react'
import { Image } from 'astro:assets'

interface Props {
	name: string
	href: string
	img_url: string
}

export default function CardLines({ href, name, img_url }: Props) {
	return (
		<div className='flex justify-center'>
			<a
				href={href}
				className='bg-white flex flex-col gap-y-5 items-center rounded-md shadow-xl p-3 w-72 mb-6'
			>
				<img src={img_url} className='w-48' alt='product image' />
				<h3 className='font-semibold text-xl text-center'>{name}</h3>
			</a>
		</div>
	)
}
