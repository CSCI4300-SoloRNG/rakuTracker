import Image from "next/image";
import styles from "../../page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Drawing from "@/app/components/Drawing";
import Button from "@/app/components/Button";
import Carousel from "@/app/components/Carousel";
import SmallButton from "@/app/components/SmallButton";

export default function Upload() {
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
                        <Drawing/>
                        </div>
                    </div>

                    {/*Form (Prompt, Tags, Time)*/}
                    <div className={styles["left-aligned-column"]}>
                        <h2 className={styles["better-header"]}>Details</h2>
                        <form>
                            <label>
                                Prompt:&nbsp;
                                <input type="text" name="prompt"/>
                            </label>
                            <br/>
                            <br/>
                            <label>
                                Tags:&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" name="tags"/>
                            </label>
                            <br/>
                            <br/>
                            <label>
                                Time:&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" name="time"/>
                            </label>
                        </form>
                        <br/>
                        <SmallButton text="Pick Image"/>
                        <br/>
                        <SmallButton text="Upload" target={"/home"}/>
                    </div>
                </div>

            </main>
            <Footer/>
        </div>
    );
}