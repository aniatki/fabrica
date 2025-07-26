import { useEffect, useRef, useState } from 'react'

export default function NavBar() {
    const navItems = ["Studio", "Projects", "Contact", "About me"]
    const [open, setOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setOpen(false)
            }
        }

        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }

        if (open) {
            document.addEventListener('keydown', handleKeyDown)
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open])

    return (
        <nav className='col-span-8 md:col-start-2 text-gray-800'>

            <ul className='flex justify-between items-center h-20'>

                <li className="text-2xl font-bold tracking-tighter"><a href="">fabricio's tattoo</a></li>

                {navItems.map((el, index) => (
                    <li key={index}>
                        <a
                            onClick={() => setOpen(false)}
                            href=""
                            className='hidden font-semibold tracking-tight sm:block'
                        >{el}
                        </a>
                    </li>
                ))}
                <div className="block sm:hidden">
                    <div className="relative z-50">
                        <button
                            onClick={() => setOpen(!open)}
                            className="flex flex-col gap-2 p-2 rounded focus:outline-none cursor-pointer"
                        >
                            <span className="w-10 h-1 bg-black rounded-full transition-transform duration-300"></span>
                            <span className="w-10 ml-4 h-1 bg-black rounded-full transition-transform duration-300"></span>
                        </button>

                        {open && (
                            <>
                                <div
                                    className="fixed top-0 left-0 w-full h-full bg-transparent z-40"
                                    onClick={() => setOpen(false)}
                                />

                                <div
                                    ref={menuRef}
                                    className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50"
                                >
                                    <ul className="flex flex-col gap-6 text-center">
                                        {navItems.map((el, index) => (
                                            <li key={index}>
                                                <a
                                                    href="#"
                                                    onClick={() => setOpen(false)}
                                                    className="text-6xl font-semibold hover:text-gray-500"
                                                >
                                                    {el}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </ul>
        </nav>
    )
}