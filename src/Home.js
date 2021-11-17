import Jumbotron from "./components/Jumbotron";
import Latest from "./components/Latest";


function Home() {

    return (
        <div className="container mx-auto">
            <Jumbotron />
            <div className="px-4 md:px-0">
                <p className="text-2xl text-center">Latest Arts</p>
                <hr className="border my-6 max-w-md mx-auto" />
                <Latest />
            </div>
        </div>
    );
}

export default Home;