import { useEffect, useState } from 'react';
import { defaultPosts, IPost } from '../../services/post.interface.ts';
import { getAllPosts } from '../../services/postService';
import Styled from './styles.ts';
import Header from '../../components/Header/index.tsx';
import { CardWithModal } from '../../components/CardWithModal/index.tsx';

function Home() {
	const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = useState(defaultPosts);

	useEffect(() => {
		(async () => {
			await getAllPosts().then((response) => {
				setPosts(response.data);
			});
		})();
	}, []);

	return (
		<>
			<Header />
			<Styled.Container>
				{posts
					.sort((a, b) => {
						const firstTitle = a.title.toLowerCase(),
							secondTitle = b.title.toLowerCase();
						return firstTitle == secondTitle ? 0 : firstTitle > secondTitle ? 1 : -1;
					})
					.map((post) => {
						return <CardWithModal key={post.id} id={post.id} title={post.title} body={post.body}></CardWithModal>;
					})}
				
			</Styled.Container>
		</>
	);
}

export default Home;
