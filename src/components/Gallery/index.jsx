
export default function Grid() {
    return (
        <div id="projetos" className='col-span-full md:col-span-8 px-2 md:px-0 md:col-start-2 mt-32 grid grid-cols-8 gap-4 max-w-full mx-auto'>

            <img
                src="https://images.pexels.com/photos/1304469/pexels-photo-1304469.jpeg"
                alt=""
                className='object-cover shadow-2xl col-span-full row-span-1 sm:col-span-4 md:col-span-3 md:row-span-6 md:col-start-1 md:row-start-1' />

            <img
                src="https://picsum.photos/600"
                alt=""
                className='shadow-2xl col-span-full row-span-1 sm:col-span-4 md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-1' />

            <img
                src="https://images.pexels.com/photos/1433270/pexels-photo-1433270.jpeg"
                alt=""
                className='shadow-2xl col-span-full row-span-1 sm:col-span-4 md:col-span-2 md:row-span-3 md:col-start-7 md:row-start-1' />

            <img
                src="https://images.pexels.com/photos/1433271/pexels-photo-1433271.jpeg"
                alt=""
                className='shadow-2xl col-span-full md:col-span-2 sm:col-span-4 md:row-span-3 md:col-start-4 md:row-start-4' />

            <img
                src="https://picsum.photos/600"
                alt=""
                className='shadow-2xl col-span-full md:col-span-3 sm:col-span-4 md:row-span-3 md:col-start-6 md:row-start-4' />

            <video
                autoPlay={true}
                muted
                loop
                src="https://videos.pexels.com/video-files/1086524/1086524-hd_1280_720_25fps.mp4"
                className='object-cover shadow-2xl col-span-full sm:col-span-full md:col-span-4 md:row-span-2 col-start-1 md:row-start-7'
            >
            </video>

            <video
                autoPlay={true}
                muted
                loop
                src="https://videos.pexels.com/video-files/4125976/4125976-uhd_1440_2732_25fps.mp4"
                className='shadow-2xl col-span-full sm:-order-1 sm:col-span-4 md:col-span-4 md:row-span-5 md:col-start-5 md:row-start-7'
            >
            </video>

            <img
                src="https://picsum.photos/400/600"
                alt=""
                className='shadow-2xl col-span-full sm:col-span-4 md:col-span-2 md:row-span-3 col-start-1 md:row-start-9' />

            <img
                src="https://picsum.photos/400/600"
                alt=""
                className='shadow-2xl col-span-full sm:col-span-4 md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-9' />
        </div>
    )
}