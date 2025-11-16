import { Link } from "react-router-dom";

function Navbar(){
    return (
        <>
        <div className="container"> <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> <svg className="bi me-2" width="40" height="32" aria-hidden="true"></svg> <span className="fs-4">Simple header</span> </a> <ul className="nav nav-pills"> <li className="nav-item"><Link to="/home" className="nav-link active" aria-current="page">Home </Link></li> <li className="nav-item"><Link to="/features" className="nav-link">Features</Link></li> <li className="nav-item"><Link to="/view" className="nav-link">View</Link></li> <li className="nav-item"><a href="#" className="nav-link">About</a></li> </ul> </header> </div>
    </>
    )
}
export default Navbar;