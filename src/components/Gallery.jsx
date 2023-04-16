import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import GalleryItem from "./GalleryItem"


export default function Gallery({ data }) {
    const data =useContext(DataContext)
    
    const galleryItems = data.map((item, index) => {
        return <GalleryItem item={ item } key={ index } />
    });

    return (
        <div>
            { galleryItems }
        </div>
    )
}