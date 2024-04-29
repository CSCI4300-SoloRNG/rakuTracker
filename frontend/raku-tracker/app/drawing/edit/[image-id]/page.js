"use client"
import React, {useEffect, useState} from 'react';
import styles from "../../../page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Drawing from "@/app/components/Drawing";
import UploadForm from "@/app/components/UploadForm";
import {editDrawing, getDrawing, uploadDrawing} from "@/app/components/BackendInterface";

export default function Edit({params}) {

    const [drawing, setDrawing] = useState({
        time: "",
        prompt: "",
        url: "",
        tags: [],
    });

    const uploadHandler = (data) => {
        console.log("uploadHandler");
        console.log(data);
        editDrawing(data).then(r => {
            console.log(r);
            if(r){
                location.assign("/")
                // TODO show success message?
            }
            // TODO show error message
            return r;
        }).catch(e => {
            console.log(e);
            // TODO show error message
            return false;
        });
    };

    // TODO get drawing data from server
    // params.image-id

    useEffect(() => {
        // Fetch drawing data from server
        getDrawing(params["image-id"]).then(drawing => {
            console.log(`use effect: drawing: ${drawing}`);
            if(drawing === undefined || drawing === null) {
                drawing = {
                    time: "",
                    prompt: "",
                    url: "",
                    tags: [],
                };
            }
            setDrawing(drawing);
        });
    }, []); // Empty dependency array ensures this effect runs only once, on component mount

    console.log(`drawing (from edit page): ${drawing}`);
    return (
        <div>
            <Header login={false} createAccount={false} upload={false} logout={true}/>
            <main className={styles["outer-container"]}>
                {/**/}
                <h1 className={`${styles["better-leader-large"]} ${styles["centered"]}`}>Edit</h1>

                {/**/}
                <div className={styles["middle-aligned-row"]}>

                    {/*preview, upload button*/}
                    <div className={styles["centered-column"]}>
                        <h2 className={`${styles["better-header"]}`}>Image</h2>
                        <div>
                            <Drawing url={drawing.url}/>
                        </div>
                    </div>

                    {/*Form (Prompt, Tags, Time)*/}
                    <div className={styles["left-aligned-column"]}>
                        <h2 className={styles["better-header"]}>Details</h2>
                        <UploadForm onUpload={uploadHandler} defaultPrompt={drawing.prompt} defaultTags={drawing.tags}
                                    defaultTime={drawing.time} _id={drawing._id}/>
                    </div>
                </div>

            </main>
            <Footer/>
        </div>
    );
}