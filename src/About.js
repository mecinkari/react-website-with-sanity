import { useEffect, useState } from 'react/cjs/react.development';
import jumbotronImage from './assets/2021-8-14-0445 no text.png'
import Jumbotron from './components/Jumbotron';
import myClient from './client.js';
import BlockContent from '@sanity/block-content-to-react'

function About() {
	const [author, setAuthor] = useState(null)

	const serializers = {
		types: {
			code: (props) => {
				<pre data-language={props.node.language}>
					<code>{props.node.code}</code>
				</pre>
			}
		}
	}

	useEffect(() => {
		myClient.fetch(`*[_type == "author"][0]{name, bio, "authorImage": image.asset->url}`).then((data) => setAuthor(data)).catch(console.error)
	}, [])

	if (!author) {
		return (
			<div className="container mx-auto">
				<div className="px-4 md:px-0">
					<Jumbotron jumbotronImage={jumbotronImage} title="About Me" subtitle="You really wanna know about me?" />
				</div>
			</div>
		)
	}

	return (
		<div className="container mx-auto">
			<div className="px-4 md:px-0">
				<Jumbotron jumbotronImage={jumbotronImage} title="About Me" subtitle="You really wanna know about me?" />
				<div className="max-w-prose mx-auto">
					<img className="w-48 mx-auto rounded-full shadow-lg" src={author.authorImage} />
				</div>
				<div className="prose lg:prose-lg prose-blue my-8 mx-auto">
					{/* <p>I'm Mecinkari but you guys can call me <b>Tamcin</b> for short. I'm a beginner web developer ans beginner digital illustrator.</p>
					<p>That's it. I don't know what else should I said, <i>lol</i></p> */}
					<BlockContent blocks={author.bio} serializers={serializers} />
				</div>
			</div>
		</div>
	);
}

export default About;
