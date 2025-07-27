export default function Tips({ list }) {
    return (
        list.map((el, index) => (
            index % 2 === 0 ? (
                <span key={index} className='font-medium tracking-tight text-amber-600'>
                    {el}
                </span>
            ) : (
                <p key={index} className='font-medium tracking-tight text-gray-700 mb-4'>
                    {el}
                </p>
            )
        ))
    )
}