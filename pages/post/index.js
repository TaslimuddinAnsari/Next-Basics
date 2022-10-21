import Link from "next/link";

function postList({ posts }) {
    return (
        <>
            <h2>List of Post</h2>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <Link href={`post/${post.id}`} passHref>
                                <h2>{post.id} {post.title}</h2>
                            </Link>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default postList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json();
    return {
        props: {
            posts: data.slice(0, 3)
        }
    }

}