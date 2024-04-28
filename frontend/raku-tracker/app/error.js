'use client'

import Header from "@/app/components/Header";
import styles from "@/app/page.module.css";
import Footer from "@/app/components/Footer";
import SmallButton from "@/app/components/SmallButton";

export default function Error({
                                  error,
                                  reset,
                              }) {
    return (
        <div>
            <Header login={false} createAccount={false} upload={false} logout={false}/>
            <main>
                <div className={styles["outer-container"]}>
                    <div className={styles["better-h1"]}>
                        <h1 className={styles["better-header-large"]}>Oopsie woopsie, something went wrong!
                            pwease pwess this button to wetuwn to the home page :3</h1>
                    </div>
                    <SmallButton target="/" text="Home"></SmallButton>
                </div>
            </main>
            <Footer/>
        </div>
    )
}