import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Drawing from "@/app/components/Drawing";
import CreateAccount from "@/app/components/CreateAccount";
import Carousel from "@/app/components/Carousel";

export default function Home() {
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
                        <h2>How it works</h2>
                        <p>Each day, draw something new based on a random prompt and upload it here. Over time, you can
                            see how your drawing has improved!</p>
                        <CreateAccount/>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <h2>Carousel Header</h2>
                        <Carousel/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
