function Modal({ modalImg, setModalImg, modal, setModal }) {
    const clickModal = () => {
        setModalImg('')
        setModal(false)
        console.log('CLosed modal')
    }

    return (
        <div onClick={() => clickModal()} className={`fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-opacity-90 bg-black p-2 z-10 ${modal === false ? 'hidden' : ''}`}>
            <div className="h-full w-auto relative">
                <div className="fixed top-0 left-0 w-full h-full opacity-0 bg-black"></div>
                <img className="h-full w-auto" alt={modalImg} src={modalImg} />
            </div>
        </div>
    )
}

export default Modal