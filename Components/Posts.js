import Post from "./Post"

function Posts() {

    const postsa= [
        {
        id: '234',
        avatar='https://yt3.ggpht.com/yti/APfAmoE_KFUTP635S10XQ06Hl03euB2pKI6NyNOPqDzTEA=s108-c-k-c0x00ffffff-no-rj',
        username="_shouvik__",
        img='https://yt3.ggpht.com/yti/APfAmoE_KFUTP635S10XQ06Hl03euB2pKI6NyNOPqDzTEA=s108-c-k-c0x00ffffff-no-rj',
        caption='This a the demo freaking comment.',
    },
    {
        id: '234',
        avatar='https://yt3.ggpht.com/yti/APfAmoE_KFUTP635S10XQ06Hl03euB2pKI6NyNOPqDzTEA=s108-c-k-c0x00ffffff-no-rj',
        username="_shouvik__",
        img='https://yt3.ggpht.com/yti/APfAmoE_KFUTP635S10XQ06Hl03euB2pKI6NyNOPqDzTEA=s108-c-k-c0x00ffffff-no-rj',
        caption='This a the demo freaking comment.'
    }
    ]

    return (
        <div>
            {
                postsa.map(post=>(
                    <Post key=  {posts.id}
                                id={posts.id}
                                username={posts.username}
                                profilepic={posts.avatar}
                                img={posts.img}
                                comment={posts.comment} />
                ))
            }
        </div>
    )
}

export default Posts
