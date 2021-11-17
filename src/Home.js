import Jumbotron from "./components/Jumbotron";
import Latest from "./components/Latest";
import jumbotronImage from './assets/2021-11-16-1241.png'

function Home() {
    return (
        <div className="container mx-auto">
            <Jumbotron jumbotronImage={jumbotronImage} title="Mecinkari" subtitle="Digital Illustrator | Web Developer" />
            <div className="px-4 md:px-0">
                <p className="text-2xl text-center">Latest Arts</p>
                <hr className="border my-6 max-w-md mx-auto" />
                <Latest />
            </div>
        </div>
    );
}

export default Home;