import Jumbotron from "./components/Jumbotron"
import Galleries from "./components/Galleries"

function Gallery() {
    const jumbotronImage = 'https://cdn.sanity.io/images/kk2d333s/production/fecb53f910e468ce62c889ec25e934638463dbad-2000x1500.png'

    return (
        <div className="container mx-auto">
            <Jumbotron jumbotronImage={jumbotronImage} center={true} title="Gallery" subtitle="Place where I put my arts" />
            <div className="px-4 md:px-0">
                <p className="text-2xl text-center">Latest Arts</p>
                <hr className="border my-6 max-w-md mx-auto" />
                <Galleries />
            </div>
        </div>
    )
}

export default Gallery