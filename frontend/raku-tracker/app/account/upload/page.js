import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Drawing from "@/app/components/Drawing";
import Button from "@/app/components/Button";
import Carousel from "@/app/components/Carousel";

export default function Upload() {
    return (
        <div>
            <Header/>
            <main className="container">
                <div className="row">
                    <div className="column">
                        <h2>Improve your drawing skills daily!!</h2>
                        <Drawing/>
                    </div>
                    <div className="column">
                        <div className="box">
                            <h2>How it works</h2>
                            <p>Each day, draw something new based on a random prompt and upload it here. Over time, you
                                can
                                see how your drawing has improved!</p>
                        </div>
                        <Button text={"Create Account"}/>
                    </div>
                </div>
                <div className="row">
                    <div className="box">
                        <div className="column">
                            <h2>Most Recent Prompts</h2>
                            <Carousel/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}