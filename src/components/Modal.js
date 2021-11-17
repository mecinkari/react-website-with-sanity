function Modal({ modalImg, setModalImg, modal, setModal }) {
    const clickModal = () => {
        setModalImg('')
        setModal(false)
        console.log('CLosed modal')
    }

    return (
        <div onClick={() => clickModal()} className={`fixed flex justify-center items-center top-0 left-0 w-screen h-screen bg-opacity-90 bg-black p-2 z-10 ${modal === false ? 'hidden' : ''}`}>
            <img className="h-full w-auto" alt={modalImg} src={modalImg} />
        </div>
    )
}

export default Modal