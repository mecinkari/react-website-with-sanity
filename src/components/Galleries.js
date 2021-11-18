// Another query
// *[_type == "post" && *[_type == "category" && title == "Undefined"][0]._id in categories[]._ref]{title, publishedAt, slug, mainImage{asset->{_id, url}}, categories[]->{title, "id":_id}}
import { useEffect, useState } from "react";
import myClient from '../client.js'
import Modal from "./Modal.js";

function Latest() {
	const [data, setData] = useState(null)
	const [modal, setModal] = useState(false)
	const [modalImg, setModalImg] = useState('')

	const clickImage = (url) => {
		setModalImg(url)
		setModal(true)
	}

	useEffect(() => {
		myClient.fetch(`*[_type == "gallery"]|order(_createdAt desc){_id, mainImage{asset->{_id, url}}}`).then((data) => setData(data)).catch(console.error)
	}, [])

	if (!data) {
		return (
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-6 gap-12">
				<div className="aspect-w-1 aspect-h-1">
					<div className="w-full h-full object-top object-cover lg:w-full bg-blue-400 animate-pulse lg:h-full"></div>
				</div>
				<div className="aspect-w-1 aspect-h-1">
					<div className="w-full h-full object-top object-cover lg:w-full bg-blue-400 animate-pulse lg:h-full"></div>
				</div>
				<div className="aspect-w-1 aspect-h-1">
					<div className="w-full h-full object-top object-cover lg:w-full bg-blue-400 animate-pulse lg:h-full"></div>
				</div>
				<div className="aspect-w-1 aspect-h-1">
					<div className="w-full h-full object-top object-cover lg:w-full bg-blue-400 animate-pulse lg:h-full"></div>
				</div>
			</div>
		)
	}

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-6 gap-12">
			<Modal modal={modal} setModal={setModal} modalImg={modalImg} setModalImg={setModalImg} />
			{data && data.map((post, index) => (
				<div onClick={() => clickImage(post.mainImage.asset.url)} className="aspect-w-1 cursor-pointer group transition-all duration-150 transform hover:scale-105 relative aspect-h-1" key={index}>
					<div className="absolute group-hover:opacity-0 transition-all duration-150 opacity-5 top-0 left-0 w-full h-full bg-black z-10"></div>
					<img className="w-full h-full object-top object-cover lg:w-full lg:h-full" alt={post._id} src={post.mainImage.asset.url} />
				</div>
			))}
		</div>
	)
}

export default Latest