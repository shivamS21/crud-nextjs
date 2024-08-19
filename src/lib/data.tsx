type POST = {
    id: string;
    title: string;
    desc: string;
    date: Date;
}

let posts: POST[] = [
    {
        id: '1',
        title: 'Introduction to Next.js',
        desc: 'A comprehensive guide to get started with Next.js.',
        date: new Date('2024-08-01'),
    },
    {
        id: '2',
        title: 'Understanding React Hooks',
        desc: 'An in-depth look at React Hooks and how to use them.',
        date: new Date('2024-08-05'),
    },
    {
        id: '3',
        title: 'Styling in React',
        desc: 'Exploring different ways to style React components.',
        date: new Date('2024-08-10'),
    },
];


// handlers for CRUD operations
export  const getPosts = () => posts;

export const addPost = async (post: POST) => {
    posts.push(post);
    console.log(posts);
    return { success: true, message: "Post added successfully", post };
}

export const deletePost = async (id: string) => {
    posts = posts.filter((post)=> post.id !== id);
    console.log("after deletion", posts);
    return {success: true, message: "Post delected successfully"};
}

export const updatePost = (id: string, title: string, desc: string) => {
    const post = posts.find((post)=>post.id===id);
    if (post) {
        post.title = title;
        post.desc = desc;
        return {success: true, message: "Post updated successfully", post};
    } else {
        return {success: false, message: "Post deletion un-successfull"};
    }
}

export const getById = (id: string) => {
    const post = posts.find((post)=> post.id===id);
    return {sucess: true, message: "post retrieved successfully", post};
}