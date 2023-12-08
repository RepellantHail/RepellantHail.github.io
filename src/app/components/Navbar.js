import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark border-bottom" data-bs-theme="dark">
            <Link href={"/"}><i class="fa-solid fa-laptop-code"></i> Home</Link>
            <Link href={"/about"}>About</Link>
        </nav>
    );
}