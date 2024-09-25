import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface Post {
    id: number
    userId: number
    title: string
    body: string
}

// 把所有要查询的参数封装在对象中
export interface QueryObject {
    userId: number | undefined
    // page: number
    pageSize: number
}

const usePosts = (query: QueryObject) => useInfiniteQuery<Post[], Error>({
    // user/1/posts 遵循url设计规则
    //queryKey: userId ? ['userId', userId, 'posts'] : ['posts'],
    queryKey: ['posts', query],
    queryFn: ({ pageParam = 1 }) => axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _start: (pageParam - 1) * query.pageSize,
                _limit: query.pageSize
            }
        })
        .then(res => res.data),
    staleTime: 1* 60 * 1000,
    keepPreviousData: true, // 这个页面更新的时候，先用之前的数据，就不会出现页面加载跳来跳去的，提高用户体验
    getNextPageParam: (lastPage, allPages) => lastPage.length > 0 ? allPages.length + 1 : undefined
})

export default usePosts