import styles from "./page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Drawing from "@/app/components/Drawing";
import Button from "@/app/components/Button";
import Link from 'next/link';

export default function Home() {

    return (
        <div>
            <Header login={true} createAccount={false}/>
            <main>
                <div className={styles.container}>
                    <div className={styles["left-content"]}>
                        {/*Look at the bullsh*t I have to do to comment this*/}
                        {/*erm. I mean, Left Content*/}
                        <div className={styles["better-h1"]}>
                            <h1 className={styles["better-header-large"]}>Improve your drawing skills daily!</h1>
                            <br/>
                            <Drawing/>
                        </div>
                    </div>
                    <div className={styles["right-content"]}>
                        {/*Right Content*/}
                        <div className={styles["info-modal"]}>
                            <h2 className={styles["better-header"]}>How it works</h2>
                            <p>Each day, draw something new based on a random prompt and upload it here. Over time, you
                                can see how your drawing has improved!</p>
                            <br/>
                            <Button text={"Create Account"}/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
