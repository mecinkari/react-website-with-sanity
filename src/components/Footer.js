function Footer() {
	const socialLinks = [
		{
			title: 'Github',
			href: 'https://github.com/mecinkari'
		},
		{
			title: 'Twitter',
			href: 'https://twitter.com/mecinkari'
		}
	]

	return (
		<footer className="px-2 md:px-0 py-4 container mx-auto w-full border-t mt-auto">
			<div className="grid grid-cols-3">
				<div>
					<p className="text-xl font-bold mb-3">Social Links</p>
					<ol className="list-inside divide-y">
						{socialLinks.map((link, index) => {
							return <li key={index}><a target="_blank" rel="noreferrer" className="py-2 px-4 block" href={link.href} >{link.title}</a></li>
						})}
					</ol>
				</div>
			</div>
		</footer>
	)
}

export default Footer