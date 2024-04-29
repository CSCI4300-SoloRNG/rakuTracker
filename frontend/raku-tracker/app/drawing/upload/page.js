"use client"
import React, {useState} from 'react';
import styles from "../../page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Drawing from "@/app/components/Drawing";
import UploadForm from "@/app/components/UploadForm";
import {uploadDrawing} from "@/app/components/BackendInterface";

export default function Upload() {
    const [drawingUrl, setDrawingUrl] = useState("");


    const uploadHandler = (data) => {
        console.log("uploadHandler");
        uploadDrawing(data).then(r => {
            console.log(r);
            location.assign("/");
            // TODO show success message?
            return r;
        }).catch(e => {
            console.log(e);
            // TODO show error message
            return false;
        });
        console.log(data);
    };

    const updatePreview = (imgUrl) => {
        console.log("updatePreview");
        console.log(imgUrl);
        setDrawingUrl(imgUrl);
    }

    return (
        <div>
            <Header login={false} createAccount={false} upload={false} logout={true}/>
            <main className={styles["outer-container"]}>
                {/**/}
                <h1 className={`${styles["better-leader-large"]} ${styles["centered"]}`}>Upload</h1>

                {/**/}
                <div className={styles["middle-aligned-row"]}>

                    {/*preview, upload button*/}
                    <div className={styles["centered-column"]}>
                        <h2 className={`${styles["better-header"]}`}>Preview</h2>
                        <div>
                            <Drawing img={drawingUrl}/>
                        </div>
                    </div>

                    {/*Form (Prompt, Tags, Time)*/}
                    <div className={styles["left-aligned-column"]}>
                        <h2 className={styles["better-header"]}>Details</h2>
                        <UploadForm onUpload={uploadHandler} onImageSelect={updatePreview} showFilePicker={true}/>
                    </div>
                </div>

            </main>
            <Footer/>
        </div>
    );
}