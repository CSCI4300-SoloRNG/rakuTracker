import Image from "next/image";
import styles from "@/app/page.module.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Drawing from "@/app/components/Drawing";
import Tag from "@/app/components/Tag";
import Carousel from "@/app/components/Carousel";

export default function Home() {

    return (
        <div>
            <Header/>
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
                                </div>                            
                        </div>
                    </div>
                    <div className={styles["right-content"]}>
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
                <div className={styles.container}>                
                    <div className={styles["info-modal-lower"]}>
                    <div className="box">
                        <div className="column">
                            <h2>Library</h2>
                            <p>View and edit previous works, manage versions, or track progress</p>
                            <Carousel/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </main>
            <Footer/>
        </div>
    );
}
