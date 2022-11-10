import  Link  from 'next/link';

function Nav() {
    return (
        <>
            <nav className="tm-nav">
                <ul>
                    <li className="active">
                        <Link href={"/info"}><span className="tm-nav-deco"></span>Intro</Link>
                    </li>
                    <li>
                        <Link href={"/gallery"} ><span className="tm-nav-deco"></span>Gallery</Link>
                    </li>
                    <li>
                        <Link href={"/contact"}><span className="tm-nav-deco"></span>Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;