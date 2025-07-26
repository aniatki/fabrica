
export default function Grid() {
    return (
        <div className='col-span-8 col-start-2 mt-8 grid grid-cols-8 gap-4 max-w-full mx-auto'>

            <img
                src="https://images.pexels.com/photos/1304469/pexels-photo-1304469.jpeg"
                alt=""
                className='object-cover shadow-2xl col-span-3 row-span-6 col-start-1 row-start-1' />

            <img
                src="https://picsum.photos/600"
                alt=""
                className='shadow-2xl col-span-3 row-span-3 col-start-4 row-start-1' />

            <img
                src="https://images.pexels.com/photos/1433270/pexels-photo-1433270.jpeg"
                alt=""
                className='shadow-2xl col-span-2 row-span-3 col-start-7 row-start-1' />

            <img
                src="https://images.pexels.com/photos/1433271/pexels-photo-1433271.jpeg"
                alt=""
                className='shadow-2xl col-span-2 row-span-3 col-start-4 row-start-4' />

            <img
                src="https://picsum.photos/600"
                alt=""
                className='shadow-2xl col-span-3 row-span-3 col-start-6 row-start-4' />

            <video
                autoPlay={true}
                muted
                loop
                src="https://videos.pexels.com/video-files/1086524/1086524-hd_1280_720_25fps.mp4"
                className='object-cover shadow-2xl col-span-4 row-span-2 col-start-1 row-start-7'
            >
            </video>

            <video
                autoPlay={true}
                muted
                loop
                src="https://videos.pexels.com/video-files/4125976/4125976-uhd_1440_2732_25fps.mp4"
                className='shadow-2xl col-span-4 row-span-5 col-start-5 row-start-7'
            >
            </video>

            <img
                src="https://picsum.photos/400/600"
                alt=""
                className='shadow-2xl col-span-2 row-span-3 col-start-1 row-start-9' />

            <img
                src="https://picsum.photos/400/600"
                alt=""
                className='shadow-2xl col-span-2 row-span-3 col-start-3 row-start-9' />
        </div>
    )
}