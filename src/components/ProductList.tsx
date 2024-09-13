import React, { useEffect, useState } from 'react'

// ({category}: {category: string}) 简单写法，不用创建一个interface了
const ProductList = ({category}: {category: string}) => {
    const [products, setProducts] = useState<string[]>([])

    useEffect(() => {
        console.log('fetching products in ', category)
        setProducts(['Clothing', 'Household'])
    }, [category])
    return (
        <div>ProductList</div>
    )
}

export default ProductList