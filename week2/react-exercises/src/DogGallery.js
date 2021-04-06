import React, {useState} from 'react'

export const DogGallery = () => {
    const [dogPhotos, setDogPhotos] = useState([]);

    const getDogPhoto = () => {
        return (
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => setDogPhotos([...dogPhotos, data]))
            .catch(error => console.log(error))
        )}
    return (
        <div>
            <Button onClick={getDogPhoto} />
            {dogPhotos.message === undefined ? "Get your first dog by clicking button!" : <DogPhoto dogPhotos={dogPhotos} />}
        </div>
    )
}

const DogPhoto = (props) => {
    return (
        <div>
            <img src={props.dogPhotos.message} alt="cuteDoggs"/>
        </div>
    )
}

const Button = (props) => <button onClick={props.onClick}>Get a dog!</button>