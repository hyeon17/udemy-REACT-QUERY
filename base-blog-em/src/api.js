export async function fetchPosts(pageNum = 1) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`);
		return response.json();
	} catch (error) {
		throw new Error(error);
	}
}

export async function fetchComments(postId) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
		return response.json();
	} catch (error) {
		throw new Error(error);
	}
}

export async function deletePost(postId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { method: 'DELETE' });
	return response.json();
}

export async function updatePost(postId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
		method: 'PATCH',
		data: { title: 'REACT QUERY FOREVER!!!!' },
	});
	return response.json();
}
