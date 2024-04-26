// interface for communicating with the backend
"use client"
import axios from 'axios';
import {getCookie} from 'cookies-next'


function blobUrlToFile(blobUrl) {
    let fileName = `${blobUrl.name}.${blobUrl.extension}`;
    return new File([blobUrl.blob], fileName);
}


// upload drawing to database
export async function uploadDrawing(drawing) {
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

export async function authenticate(username, password) {
    // TODO hash username and password

    let response;
    try {
        // TODO send hashed username and password to server
        // TODO check response from server.

        // TODO this is placeholder!!!
        response = {"ok": true, "data": {"token": "1234567890"}};
    } catch (e) {
        // if error, catch and return false.
        console.log(e);
        return false;
    }

    if (response.ok && response.data.token !== undefined) {
        // if success, store token and return true
        // TODO may need httponly, secure, samesite. may also need to change maxage or use expires
        document.cookie = `auth_token=${response.data.token}; path=/; max-age=86400;`;
        return true;
    } else {
        return false;
    }
}

export async function isLoggedIn() {
    // TODO send auth request to backend
    //TODO placeholder
    let response = {"ok": getCookie("auth_token") !== undefined};
    return response.ok;
}