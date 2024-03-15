import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { brands } from '@/lib/brands'
import { useState } from 'react'

export function BannersCarousel() {
	const [cursor, setCursor] = useState('cursor-grab')
	return (
		<Carousel
			opts={{ loop: true, active: true }}
			onMouseDown={() => setCursor('cursor-grabbing')}
			onMouseUp={() => setCursor('cursor-grab')}
			className={`${cursor}`}
		>
			<CarouselContent className='flex items-center'>
				<CarouselItem className='w-full basis-full'>
					<img
						src='/banners/servicios.webp'
						alt='hero image'
						className='w-full aspect-[1536/400]'
					/>
				</CarouselItem>
				<CarouselItem className='w-full basis-full'>
					<img
						src='/banners/neumatica.webp'
						alt='hero image'
						className='w-full aspect-[1536/400]'
					/>
				</CarouselItem>
				<CarouselItem className='w-full basis-full'>
					<img
						src='/banners/refrigeracion.webp'
						alt='hero image'
						className='w-full aspect-[1536/400]'
					/>
				</CarouselItem>
				<CarouselItem className='w-full basis-full'>
					<img
						src='/banners/hidraulica.webp'
						alt='hero image'
						className='w-full aspect-[1536/400]'
					/>
				</CarouselItem>
			</CarouselContent>
			{/* <CarouselPrevious />
			<CarouselNext /> */}
		</Carousel>
	)
}
