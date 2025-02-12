import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPosts, deletePost, updatePost } from './api';
import { PostDetail } from './PostDetail';
const maxPostPage = 10;

export function Posts() {
	const [currentPage, setCurrentPage] = useState(1);
	const [selectedPost, setSelectedPost] = useState(null);

	// replace with useQuery
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ['posts', currentPage],
		queryFn: () => fetchPosts(currentPage),
	});

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>{error.toString()}</div>;
	}

	return (
		<>
			<ul>
				{data?.map((post) => (
					<li key={post.id} className='post-title' onClick={() => setSelectedPost(post)}>
						{post.title}
					</li>
				))}
			</ul>
			<div className='pages'>
				<button
					disabled={currentPage <= 0}
					onClick={() => {
						setCurrentPage(currentPage - 1);
					}}>
					Previous page
				</button>
				<span>Page {currentPage}</span>
				<button
					disabled={currentPage >= maxPostPage}
					onClick={() => {
						setCurrentPage(currentPage + 1);
					}}>
					Next page
				</button>
			</div>
			<hr />
			{selectedPost && <PostDetail post={selectedPost} />}
		</>
	);
}
