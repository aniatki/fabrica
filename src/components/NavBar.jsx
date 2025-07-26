export default function NavBar() {
    const navItems = [
        "Studio",
        "Projects",
        "Contact",
        "About me",
    ]

    return (
        <nav className='col-span-8 md:col-start-2'>

            <ul className='flex justify-between items-center h-20'>

                <li className="text-2xl font-bold tracking-tighter"><a href="">fabricio's tattoo</a></li>

                {navItems.map((el, index) => (
                    <li key={index}>
                        <a
                            href=""
                            className='hidden font-semibold tracking-tight sm:block'
                        >{el}
                        </a>
                    </li>
                ))}
                <div>
                    🍔
                </div>
            </ul>
        </nav>
    )
}