import { 
    brothers, 
    cat, 
    dory, 
    dragon, 
    family, 
    lotus, 
    // mystic, 
    // puppy, 
    // sketch, 
    // snake, 
    spider, 
    star, 
    tiger 
} from '../../assets/projects'

export default function Grid() {
    return (
        <div id="projetos" className='col-span-full md:col-span-8 px-2 md:px-0 md:col-start-2 mt-32 grid grid-cols-8 gap-4 max-w-full mx-auto'>

            <img
                src={dragon}
                alt=""
                className='object-cover shadow-2xl col-span-full row-span-1 sm:col-span-4 md:col-span-3 md:row-span-6 md:col-start-1 md:row-start-1
                intersect-once intersect:motion-preset-expand motion-duration-500 motion-delay-0
                ' />

            <img
                src={family}
                alt=""
                className='object-cover shadow-2xl col-span-full row-span-1 sm:col-span-4 md:col-span-3 md:row-span-3 md:col-start-4 md:row-start-1
                intersect-once intersect:motion-preset-expand motion-duration-500 motion-delay-250
                ' />

            <img
                src={lotus}
                alt=""
                className='object-cover shadow-2xl col-span-full row-span-1 sm:col-span-4 md:col-span-2 md:row-span-3 md:col-start-7 md:row-start-1
                intersect-once intersect:motion-preset-expand motion-duration-500 motion-delay-250
                ' />

            <img
                src={spider}
                alt=""
                className='object-cover shadow-2xl col-span-full md:col-span-2 sm:col-span-4 md:row-span-3 md:col-start-4 md:row-start-4
                intersect-once intersect:motion-preset-expand motion-duration-500 motion-delay-250
                ' />

            <img
                src={brothers}
                alt=""
                className='object-cover shadow-2xl col-span-full md:col-span-3 sm:col-span-4 md:row-span-3 md:col-start-6 md:row-start-4
                intersect-once intersect:motion-preset-expand motion-duration-500 motion-delay-250
                ' />

            <img
                src={star}
                alt=""
                className='object-cover shadow-2xl col-span-full sm:col-span-full md:col-span-4 md:row-span-2 col-start-1 md:row-start-7
                intersect-once intersect:motion-preset-expand motion-duration-500 motion-delay-250'
            />

            <img
                src={tiger}
                className='object-cover shadow-2xl col-span-full sm:-order-1 sm:col-span-4 md:col-span-4 md:row-span-5 md:col-start-5 md:row-start-7
                intersect-once intersect:motion-preset-expand motion-duration-500 motion-delay-250
                '
            />

            <img
                src={cat}
                alt=""
                className='object-cover shadow-2xl col-span-full sm:col-span-4 md:col-span-2 md:row-span-3 col-start-1 md:row-start-9
                intersect-once intersect:motion-preset-expand motion-duration-500 motion-delay-250
                ' />

            <img
                src={dory}
                alt=""
                className='object-cover shadow-2xl col-span-full sm:col-span-4 md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-9
                intersect-once intersect:motion-preset-expand motion-duration-500 motion-delay-250
                ' />
        </div>
    )
}