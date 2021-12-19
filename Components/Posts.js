import Post from "./Post"

function Posts() {

    const posts = [
        {
            id: '123',
            username: 'shouvik',
            userImage: 'https://yt3.ggpht.com/yti/APfAmoE_KFUTP635S10XQ06Hl03euB2pKI6NyNOPqDzTEA=s108-c-k-c0x00ffffff-no-rj',
            img: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            caption: "This is the best build",
        },
        {
            id: '124',
            username: 'shouvik',
            userImage: 'https://yt3.ggpht.com/yti/APfAmoE_KFUTP635S10XQ06Hl03euB2pKI6NyNOPqDzTEA=s108-c-k-c0x00ffffff-no-rj',
            img: 'https://i.pinimg.com/736x/99/f7/af/99f7aff8f0170fef28eea7a38754739e--landscape-wallpapers-amazing-sunsets.jpg',
            caption: "This is the best build",
        }
    ]
    return (
        <div>
            {posts.map(post=>(
                <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImage={post.userImage}
                img={post.img}
                caption={post.caption} />
            ))}
        </div>
    )
}

export default Posts

