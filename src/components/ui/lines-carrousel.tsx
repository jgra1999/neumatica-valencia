import { Swiper, SwiperSlide } from 'swiper/react'
import CardLines from '../CardLines'
import { Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

export default () => {
	return (
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
	)
}

{
	/* <Swiper
			spaceBetween={10}
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
			modules={[Pagination, Navigation]}
		>
			<SwiperSlide>
				<CardLines name='Neumática' img_url='/product1.png' href='/' />
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
		</Swiper> */
}
