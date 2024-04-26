"use client"
import React, {useState} from 'react';
import styles from "../../page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Drawing from "@/app/components/Drawing";
import UploadForm from "@/app/components/UploadForm";
import {uploadDrawing} from "@/app/components/BackendInterface";

export default function Upload() {
    const [drawingUrl, setDrawingUrl] = useState([]);
    const [initialDrawingUrl, setInitialDrawingUrl] = useState([
        "https://media.discordapp.net/attachments/274311798646374401/1219887367721320509/tumblr_ntrb8rAsbv1qecd9qo6_1280.jpg?ex=661f64a4&is=660cefa4&hm=413f06ac8c5951704ea63afcff0b8978e410969fbe0d2a8e784ebee18aabf3a3&=&format=webp&width=902&height=662"
    ]);

    const uploadHandler = (data) => {
        console.log("uploadHandler");
        // TODO upload drawing to server
        uploadDrawing(data);
        console.log(data);
    };

    const updatePreview = (imgUrl) => {
        console.log("updatePreview");
        console.log(imgUrl);
        setDrawingUrl(imgUrl);
        setInitialDrawingUrl(imgUrl);
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
                            <Drawing img={initialDrawingUrl}/>
                        </div>
                    </div>

                    {/*Form (Prompt, Tags, Time)*/}
                    <div className={styles["left-aligned-column"]}>
                        <h2 className={styles["better-header"]}>Details</h2>
                        <UploadForm onUpload={uploadHandler} onImageSelect={updatePreview}/>
                    </div>
                </div>

            </main>
            <Footer/>
        </div>
    );
}