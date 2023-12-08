import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark border-bottom" data-bs-theme="dark">
            <Link href={"/"}><i class="fa-solid fa-house"></i> Home</Link>
            <Link href={"/about"}><i class="fa-solid fa-circle-user"></i> About</Link>
            <Link href={"/portfolio"}><i class="fa-solid fa-briefcase"></i> Portfolio</Link>
            <Link href={"/contact"}><i class="fa-solid fa-address-book"></i> Contact</Link>
        </nav>
    );
}