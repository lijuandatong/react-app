import React, { useState } from 'react'
import { IoMdHeart, IoIosHeartEmpty  } from "react-icons/io";

interface Props {
    onClick: () => void
}

const Like = ({onClick}: Props) => {
    const [selected, setSelected] = useState(false)

    const toggle = () => {
        setSelected(!selected)
        onClick()
    }

    if(selected)
        return (
            <IoMdHeart  color='#ff6b81' size={20} onClick={toggle}/>
        )
    return (
        <IoIosHeartEmpty onClick={toggle}/>
    )

}

export default Like