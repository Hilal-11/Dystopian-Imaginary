import React from 'react'
import { useParams } from 'react-router-dom';
import { data } from '../config/GenerativeImages'
function ImageDetails() {

    const params = useParams();
    const imageId = params.id;

    const imageInfo = data.flatMap(response =>
        response.data.feed_creations.filter(creation => creation.user_id === imageId)
    );
    console.log(imageInfo)

  return (
    <div>
        <h1>{imageId}</h1>
    </div>
  )
}

export default ImageDetails