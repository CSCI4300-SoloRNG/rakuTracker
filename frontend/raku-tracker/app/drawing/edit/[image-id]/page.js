"use client"
import React, {useState} from 'react';
import styles from "../../../page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Drawing from "@/app/components/Drawing";
import UploadForm from "@/app/components/UploadForm";
import {editDrawing, uploadDrawing} from "@/app/components/BackendInterface";

export default function Edit({params}) {

    const uploadHandler = (data) => {
        console.log("uploadHandler");
        // TODO upload drawing to server
        editDrawing(data);
        console.log(data);
    };

    // TODO get drawing data from server
    // params.image-id

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
                            <Drawing/>
                        </div>
                    </div>

                    {/*Form (Prompt, Tags, Time)*/}
                    <div className={styles["left-aligned-column"]}>
                        <h2 className={styles["better-header"]}>Details</h2>
                        <UploadForm onUpload={uploadHandler}/>
                    </div>
                </div>

            </main>
            <Footer/>
        </div>
    );
}