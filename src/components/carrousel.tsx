import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export function Carrousel() {
	return (
		<Swiper
			slidesPerView={1}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false
			}}
			pagination={{
				clickable: true
			}}
			navigation={false}
			modules={[Autoplay, Pagination, Navigation]}
		>
			<SwiperSlide>
				<img
					src='/hero.jpg'
					alt='hero image'
					className='w-full h-auto max-h-[600px] aspect-[1536/600]'
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='/hero.jpg'
					alt='hero image'
					className='w-full h-auto max-h-[600px] aspect-[1536/600]'
				/>
			</SwiperSlide>
			<SwiperSlide>
				<img
					src='/hero.jpg'
					alt='hero image'
					className='w-full h-auto max-h-[600px] aspect-[1536/600]'
				/>
			</SwiperSlide>
		</Swiper>
	)
}
