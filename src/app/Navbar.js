export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark border-bottom" data-bs-theme="dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul class="navbar-nav me-auto mb-lg-0 mb-3 d-flex justify-content-center">
                        <li class="nav-item active">
                            <a className="navbar-brand" href="#"><i class="fa-solid fa-code"></i> Home</a>
                        </li>
                        <li class="nav-item  flex-grow-1">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact</a>
                        </li>
                        <li class="nav-item d-flex align-items-center">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                {/* <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label> */}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}