import Postitem from "./Postitem";


function PostList({posts, title, remove}) {

    return (

        <div>
            <h1 style={{ textAlign: 'center' }}>{title}</h1>
            {posts.map((post, index) =>
                <Postitem remove={remove} number={index + 1} post={post} key={post.id} />)}

        </div>
    )
}

export default PostList;