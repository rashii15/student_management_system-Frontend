
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home(){
    return (
        <>
        <div className="container">
            <Navbar></Navbar>
        </div>

        <div className="container">
            <div className="row">
                <h1>
                    Welcome to the Student Management System!!!
                </h1>
            </div>
        </div>

        <div className="container">
            <Footer></Footer>
        </div>
        
        

        </>
    )
}
export default Home;
