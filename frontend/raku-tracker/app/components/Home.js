"use client"
import Header from "@/app/components/Header";
import styles from "@/app/page.module.css";
import Drawing from "@/app/components/Drawing";
import Tag from "@/app/components/Tag";
import Carousel from "@/app/components/Carousel";
import Footer from "@/app/components/Footer";
import Button from "@/app/components/Button";
import {isLoggedIn} from "@/app/components/BackendInterface";
import {useEffect, useState} from "react";


function authenticatedHomepage() {
    return (
        <div>
            <Header login={false} createAccount={false} upload={true} logout={true}/>
            <main>
                <div className={styles["outer-container"]}>
                    <div className={styles.container}>
                        <div className={styles["left-content-small"]}>
                            {/*Look at the bullsh*t I have to do to comment this*/}
                            {/*erm. I mean, Left Content*/}
                            <div className={styles["better-h1"]}>
                                <h1 className={styles["better-header-large"]}>Latest Work</h1>
                                <br/>
                                <div className={styles["latest-work"]}>
                                    <Drawing/>
                                    <button className={styles["meta-overlay"]}>Date・Title・Prompt</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles["right-content-main"]}>
                            {/*Right Content*/}
                            <div className={styles["info-modal"]}>
                                <h2 className={styles["better-header"]}>Current Areas of Focus</h2>
                                <div className={styles["tag-container"]}>
                                    <Tag text={"Debug Tag"}/>
                                    <Tag text={"Longer Debug Tag"} color={"#8d3872"}/>
                                    <Tag text={"Super Duper Long Debug Tag"} color={"#115e46"}/>
                                    <Tag text={"Debug Tag"}/>
                                    <Tag text={"Debug Tag"}/>
                                    <Tag text={"Debug Tag"}/>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className={styles["info-modal-lower"]}>
                        <h2>Library</h2>
                        <p>View and edit previous works, manage versions, or track progress</p>
                        <Carousel/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

function unauthenticatedHomepage() {
    return (
        <div>
            <Header login={true} createAccount={false} upload={false} logout={false}/>
            <main>
                <div className={styles.container}>
                    <div className={styles["left-content"]}>
                        {/*Look at the bullsh*t I have to do to comment this*/}
                        {/*erm. I mean, Left Content*/}
                        <div className={styles["better-h1"]}>
                            <h1 className={styles["better-header-large"]}>Improve your drawing skills daily!</h1>
                            <br/>
                            <Drawing url={"https://lh3.googleusercontent.com/drive-viewer/AKGpihYP_KEg2Tbfjo5ZefSLuwWh9XPUtmyXHAvrE5Bu2SNPIkoOprCHhPX0SUWrXK2dUzH5EH_0jH288tXucx13b7AsrjirCDOE_Q=s1600-rw-v1"}/>
                        </div>
                    </div>
                    <div className={styles["right-content"]}>
                        {/*Right Content*/}
                        <div className={styles["info-modal"]}>
                            <h2 className={styles["better-header"]}>How it works</h2>
                            <p>Each day, draw something new based on a random prompt and upload it here. Over time, you
                                can see how your drawing has improved!</p>
                            <br/>
                            <Button text={"Create Account"} target={"/account/create"}/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default function Home() {
    const [authStatus, setAuthStatus] = useState(false);

    useEffect(() => {
        // Function to check authentication status
        const checkAuthStatus = async () => {
            try {
                isLoggedIn().then(r => {
                    console.log(r);
                    setAuthStatus(r);
                });
            } catch (error) {
                console.error('Error checking authentication status:', error);
                setAuthStatus(false);
            }
        };

        checkAuthStatus();
    }, []);
    return authStatus ? authenticatedHomepage() : unauthenticatedHomepage();
}