import React from 'react'
import { useState } from 'react'
import usePosts, { QueryObject } from './hooks/usePosts'

const PostList = () => {
    const pageSize = 10
    const [userId, setUserId] = useState<number>()
    // const [page, setPage] =  useState<number>(1)
    const { data, isLoading, error, fetchNextPage, isFetchingNextPage } = usePosts({userId, pageSize})

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
                {data.pages.map((page, index) => 
                    <React.Fragment key={index}>
                        {page.map(page => <li key={page.id} className="list-group-item">{page.title}</li>)}
                    </React.Fragment>
                )}
            </ul>
            <button 
            disabled={isFetchingNextPage} 
            className="btn btn-primary my-3 ms-1" 
            onClick={() => fetchNextPage()}>{isFetchingNextPage ? 'loading...' : 'Load More'}</button>
        </>
    )
}

export default PostList

function userState(): { userId: any; setUserId: any } {
    throw new Error('Function not implemented.')
}
