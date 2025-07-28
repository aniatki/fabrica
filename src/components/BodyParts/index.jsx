import body from "/body.svg"

export default function BodyParts() {
    return (
        <div
            className={`col-span-full mx-4 md:mx-0 md:col-span-8 md:col-start-2 grid place-content-center -mt-8 mb-16`}
        >
            <img className={`intersect-once intersect:motion-scale-in-[0] motion-opacity-in-[0%] motion-blur-in-[20px] motion-delay-1000`} src={body} alt="" />
        </div>
    )
}