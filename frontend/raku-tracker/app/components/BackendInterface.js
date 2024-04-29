// interface for communicating with the backend
"use client"
import axios from 'axios';
import {getCookie} from 'cookies-next'

axios.defaults.withCredentials = true


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
            url: drawing.url,
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
        return response.status === 200;
    }).catch(error => {
        console.log(error);
        //TODO error page
        return false;
    });
}


// upload drawing to database
export async function editDrawing(drawing) {
    console.log("editDrawing");
    console.log(drawing);
    const response = await axios.put(
        `http://localhost:42069/api/drawing/${drawing._id}`, drawing, {
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }
    ).catch(error => {
        console.log(error);
        //TODO error page
        return false;
    });
    console.log(response);
    return response.status === 200;
}

export async function getDrawing(image_id) {
    console.log("getDrawing");
    const response = await axios.get(
        `http://localhost:42069/api/drawing/${image_id}`
    ).then(response => {
        return response;
    }).catch(error => {
        console.log(error);
        //TODO error page
        return false;
    });

    console.log(response);
    // TODO check if okay first
    return response.data
}

export async function getDrawings(limit = 5) {
    console.log("getDrawings");
    // TODO apply limit
    const response = await axios.get(
        `http://localhost:42069/api/drawing/`
    ).then(response => {
        return response;
    }).catch(error => {
        console.log(error);
        //TODO error page
        return false;
    });
    console.log(response);
    // TODO check if okay first
    console.log(`get drawings: response.data: ${response.data}`);
    return response.data
}

export async function authenticate(username, password) {
    // TODO send username and password to server

    const response = await axios.post("http://localhost:42069/api/login/", {
        "username": username,
        "password": password
    }, {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }).catch(error => {
        console.log(error);
        return false;
    });
    console.log(response);

    if (
        response.status !== 200 || response.data.token === undefined) {
        return false;
    }

    // if success, store token and return true
    // TODO may need httponly, secure, samesite. may also need to change maxage or use expires
    document.cookie = `auth_token=${response.data.token}; path=/; max-age=86400;`;
    return true;

}

export async function createAccount(email, username, password) {
    const response = await axios.post("http://localhost:42069/api/user/signup", {
        "email": email,
        "username": username,
        "password": password
    }, {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }).catch(error => {
        console.log(error);
        return false;
    });
    console.log(response);

    return response.status === 200;
}

export async function isLoggedIn() {
    if (getCookie("auth_token") === undefined) {
        return false;
    }
    console.log("verifying cookie");
    const response = await axios.post("http://localhost:42069/api/cookieJwtAuth", {
        token: getCookie("auth_token")
    }, {
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    }).catch(error => {
        console.log(error);
        return false;
    });
    console.log(response);
    return response.status === 200;
}