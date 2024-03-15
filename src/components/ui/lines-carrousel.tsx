import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious
} from '@/components/ui/carousel'

import CardLines from '../CardLines'

export default () => {
	return (
		<Carousel opts={{ loop: true }}>
			<CarouselContent className='flex items-center'>
				<CarouselItem className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
					<CardLines name='Neumática' img_url='/lines/icon-lineas.png' href='/' />
				</CarouselItem>
				<CarouselItem className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
					<CardLines name='Hidráulica' img_url='/lines/icon-hidra.png' href='/' />
				</CarouselItem>
				<CarouselItem className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
					<CardLines
						name='Refrigeración Industrial'
						img_url='/lines/icon-refrigeracion.png'
						href='/'
					/>
				</CarouselItem>
				<CarouselItem className='md:basis-1/2 lg:basis-1/3 xl:basis-1/4'>
					<CardLines name='Servicios' img_url='/lines/icon-servicios.png' href='/' />
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

/* 
<div className='max-w-[400px] sm:max-w-[700px] md:max-w-[850px] lg:max-w-[1100px] xl:max-w-[1400px]'>
			<Swiper
				spaceBetween={15}
				slidesPerView={1}
				navigation
				breakpoints={{
					640: {
						slidesPerView: 2
					},
					768: {
						slidesPerView: 3
					},
					1024: {
						slidesPerView: 4
					}
				}}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				modules={[Navigation]}
			>
				<SwiperSlide>
					<CardLines name='Neumática' img_url='/icon-lineas.png' href='/' />
				</SwiperSlide>
				<SwiperSlide>
					<CardLines
						name='Refrigeración Industrial'
						img_url='/product3.png'
						href='/'
					/>
				</SwiperSlide>
				<SwiperSlide>
					<CardLines name='Hidráulica' img_url='/product2.png' href='/' />
				</SwiperSlide>
				<SwiperSlide>
					<CardLines name='Servicios' img_url='/product4.png' href='/' />
				</SwiperSlide>
			</Swiper>
		</div>

*/
