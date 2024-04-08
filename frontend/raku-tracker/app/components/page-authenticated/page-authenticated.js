import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Drawing from "@/app/components/Drawing";
import Button from "@/app/components/Button";
import Carousel from "@/app/components/Carousel";

export default function Home() {

    return (
        <div>
            <Header/>
            <main>
                <div class={styles.container}>
                    <div class={styles["left-content"]}>
                        {/*Look at the bullsh*t I have to do to comment this*/}
                        {/*erm. I mean, Left Content*/}
                        <div class={styles["better-h1"]}>
                            <h1 class={styles["better-header-large"]}>Improve your drawing skills daily!</h1>
                            <br/>
                            <Drawing/>
                        </div>
                    </div>
                    <div class={styles["right-content"]}>
                        {/*Right Content*/}
                        <div class={styles["info-modal"]}>
                            <h2 class={styles["better-header"]}>How it works</h2>
                            <p>Each day, draw something new based on a random prompt and upload it here. Over time, you can see how your drawing has improved!</p>
                            <br/>
                            <Button text={"Create Account"}/>
                        </div>
                    </div>
                </div>
            </main>
            <div className="row">
                    <div className="box">
                        <div className="column">
                            <h2>Most Recent Prompts</h2>
                            <Carousel/>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}
