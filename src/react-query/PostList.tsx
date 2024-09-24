import { useState } from 'react'
import usePosts, { QueryObject } from './hooks/usePosts'

const PostList = () => {
    const pageSize = 10
    const [userId, setUserId] = useState<number>()
    const [page, setPage] =  useState<number>(1)
    const {data: posts, isLoading, error} = usePosts({userId, page, pageSize})

    if(isLoading) return <p>loading...</p>

    if(error) return <p>{error.message}</p>

    return (
        <>
            <select onChange={(event) => setUserId(parseInt(event.target.value))} className="form-select mb-3" value={userId}>
                <option value=""></option>
                <option value="1">user1</option>
                <option value="2">user2</option>
                <option value="3">user3</option>
            </select>
            <ul className="list-group">
                {posts?.map(post => <li key={post.id} className="list-group-item">{post.title}</li>)}
            </ul>
            <button disabled={page === 1} className="btn btn-primary my-3" onClick={() => setPage(page - 1)}>Previous</button>
            <button className="btn btn-primary my-3 ms-1" onClick={() => setPage(page + 1)}>Next</button>
        </>
    )
}

export default PostList

function userState(): { userId: any; setUserId: any } {
    throw new Error('Function not implemented.')
}
