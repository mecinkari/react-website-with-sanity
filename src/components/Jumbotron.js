import jumbotronImage from '../assets/2021-11-16-1241.png'

function Jumbotron() {
    return (
        <div className="w-full relative mb-6">
            <div className="absolute top-0 flex justify-center items-center left-0 w-full h-full bg-black bg-opacity-60">
                <div className="text-center p-6 text-white">
                    <h1 className="text-4xl font-bold">Mecinkari</h1>
                    <p className="leading-loose text-lg">Digital Illustrator | Web Programmer</p>
                </div>
            </div>
            <img src={jumbotronImage} alt="jumbotron image" className="object-cover object-top h-96 w-full" />
        </div>
    )
}

export default Jumbotron