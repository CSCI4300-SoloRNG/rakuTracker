// interface for communicating with the backend

import axios from 'axios';
import Drawing from './Drawing';


function blobUrlToFile(blobUrl) {
    let fileName = `${blobUrl.name}.${blobUrl.extension}`;
    return new File([blobUrl.blob], fileName);
}


// upload drawing to database
export default async function uploadDrawing(drawing) {
    console.log("uploadDrawing");
    console.log(drawing);

    let formData = new FormData();
    formData.append('img', blobUrlToFile(drawing.img));
    formData.append('prompt', drawing.prompt);
    formData.append('tags', drawing.tags);
    formData.append('time', drawing.time);
    formData.append('id', drawing.id);

    const response = await axios.post(
        "http://localhost:42069/s/", formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    );
    console.log(response.data);
    return response.data;
}
