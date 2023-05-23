import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"

export default Image = () => {
    let [imageId, setImageId] = useState(237);
    let image = `https://picsum.photos/id/${imageId}/200/300`
    let [counter, setCounter] = useState(100);
    console.log(useState(100))

    let likeButton = () => {
        counter += 1;
        setCounter(counter)
    }

    let dislikeButton = () => {
        counter -= 1;
        setCounter(counter)
    }

    let resetButton = () => {
        counter = 100
        setCounter(counter)
    }

    let nextImage = () => {
        imageId += 1
        setImageId(imageId)
    }

    let previousImage = () => {
        imageId -= 1
        setImageId(imageId)
    }

    let resetImage = () => {
        imageId = 237
        setImageId(imageId)
    }


    return (
        <div className='container text-center bg-light'>
            <img style={{ height: "600px", width: "450px" }} src={image} />
            <h1>{counter}</h1>
            <div>
                <input className='btn btn-primary' type="button" value="Like Me" onClick={likeButton} />
                <input className='btn btn-success' type="button" value="Reset" onClick={resetButton} />
                <input className='btn btn-warning' type="button" value="Dislike Me" onClick={dislikeButton} />
            </div>
            <div>
                <input className='btn btn-dark' type="button" value="Previous Image" onClick={previousImage} />
                <input className='btn btn-success' type="button" value="Reset Image" onClick={resetImage} />
                <input className='btn btn-dark' type="button" value="Next Image" onClick={nextImage} />
            </div>
        </div>
    )
}
