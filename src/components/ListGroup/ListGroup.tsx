
import { MouseEvent, useState } from "react"
import styled from 'styled-components'

const List = styled.ul`
    list-style: none;
    padding: 0;
`
interface ListItemProps {
    active: boolean
}
const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${(props) => props.active ? "blue" : "none"}
`

interface Props {
    items: string[]
    heading: string
    onSelectItem: (item: string) => void
}

function ListGroup({items, heading, onSelectItem}: Props) {
    // items = []

    const getMessage = () => {
        return items.length === 0 ? <p>No item found</p> : null
    }

    const message = items.length === 0 ? <p>No item found</p> : null

    const handleClick = (event: MouseEvent) => console.log(event)

    // let selectedIndex = 0

    // Hook
    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
        <>
            <h1>heading</h1>
            {getMessage()}
            {/* {message} */}
            {/* {items.length === 0 ? <p>No item found</p> : null} */}
            {/* {items.length === 0 && <p>No item found</p>} */}
            <List>
                {items.map((item, index) =>
                    <ListItem
                        key={item}
                        active={selectedIndex === index}
                        onClick={() => { 
                            setSelectedIndex(index)
                            onSelectItem(item)
                        }}
                    >
                        {item}
                    </ListItem>)}
            </List>
        </>
    )

}

export default ListGroup