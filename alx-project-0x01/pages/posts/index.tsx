import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

interface PostsPageProps {
    posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [post, setPost] = useState<PostData | null>(null);
    const [allPosts, setAllPosts] = useState<PostProps[]>(posts);

    const handleAddPost = (newPost: PostData) => {
        const postToAdd: PostProps = {
            ...newPost,
            id: allPosts.length + 1
        };
        setAllPosts([postToAdd, ...allPosts]);
        setPost(postToAdd);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold text-gray-800">Post Content</h1>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-700 px-6 py-2 rounded-full text-white hover:bg-blue-800 transition"
                    >
                        Add Post
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {allPosts.map((post: PostProps) => (
                        <PostCard
                            key={post.id}
                            userId={post.userId}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                        />
                    ))}
                </div>
            </main>
            <Footer />

            {isModalOpen && (
                <PostModal
                    onClose={() => setModalOpen(false)}
                    onSubmit={handleAddPost}
                />
            )}
        </div>
    );
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return {
        props: {
            posts
        }
    };
}

export default Posts;