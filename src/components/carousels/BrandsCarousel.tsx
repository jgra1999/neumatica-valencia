import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'
import { brands } from '@/lib/brands'

export function BrandsCarousel() {
	return (
		<Carousel opts={{ loop: true }} className='max-w-[90%]'>
			<CarouselContent className='flex items-center'>
				{brands.map((brand, index) => (
					<CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
						<img
							src={brand.image}
							alt={`logo de marca de repuestos ${brand.alt}`}
							className='w-64 lg:w-72 xl:w-80'
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}
