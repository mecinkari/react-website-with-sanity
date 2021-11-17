function Modal({ modalImg, setModalImg, modal, setModal }) {
    const clickModal = () => {
        setModalImg('')
        setModal(false)
        console.log('CLosed modal')
    }

    return (
        <div onClick={() => clickModal()} className={`fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-opacity-90 bg-black z-10 ${modal === false ? 'hidden' : ''}`}>
            <img className="h-full w-auto" src={modalImg} />
        </div>
    )
}

export default Modal