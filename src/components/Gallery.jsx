import GalleryItem from "./GalleryItem"
import { useContext } from "react"
import { DataContext } from "../context/DataContext"

export default function Gallery(props) {
    const data = props.data.result.read()

    const display = data.map((item, index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return (
        <div>
            {display}
        </div>
    )
}
