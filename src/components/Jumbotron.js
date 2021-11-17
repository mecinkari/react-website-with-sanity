function Jumbotron({ jumbotronImage, center = false, title, subtitle }) {
    return (
        <div className="w-full relative mb-6">
            <div className="absolute top-0 flex justify-center items-center left-0 w-full h-full bg-black bg-opacity-60">
                <div className="text-center p-6 text-white">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="leading-loose text-lg">{subtitle}</p>
                </div>
            </div>
            <img src={jumbotronImage} alt="jumbotron" className={`object-cover ${center === true ? "object-center" : "object-top"} h-48 md:h-96 w-full`} />
        </div>
    )
}

export default Jumbotron