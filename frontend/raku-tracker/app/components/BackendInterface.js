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
    axios.post(
        "http://localhost:42069/api/drawing", {
            url: drawing.img,
            time: drawing.time,
            prompt: drawing.prompt,
            tags: drawing.tags
        }, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }
    ).then(response => {
       console.log(response);
       // TODO return ID?
       return response.status === 200;
    }).catch(error => {
        console.log(error);
        //TODO error page
        return false;
    });
}

export async function authenticate(username, password) {
    let response;
    try {
        // TODO send username and password to server
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

export async function createAccount(email, username, password) {
    let response;
    try {
        // TODO send username and password to server
        // TODO check response from server.

        // TODO this is placeholder!!!
        response = {"ok": true};
    } catch (e) {
        // if error, catch and return false.
        console.log(e);
        return false;
    }

    return response.ok;
}

export async function isLoggedIn() {
    // TODO send auth request to backend
    //TODO placeholder
    let response = {"ok": getCookie("auth_token") !== undefined};
    return response.ok;
}