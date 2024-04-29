import Header from "@/app/components/Header";
import styles from "@/app/page.module.css";
import Drawing from "@/app/components/Drawing";
import Button from "@/app/components/Button";
import Footer from "@/app/components/Footer";
import {isLoggedIn} from "@/app/components/BackendInterface";

export default function NotFoundPage() {
    // TODO const authenticated = isLoggedIn().then();
    const authenticated = false;
    return (
        <div>
            {authenticated ? <Header login={false} createAccount={false} upload={true} logout={true}/> :
                <Header login={true} createAccount={true} upload={false} logout={false}/>}
            <main>
                <div className={styles["outer-container"]}>
                    <div className={styles["better-h1"]}>
                        <h1 className={styles["better-header-large"]}>
                            Uh oh!! 404 ewwow, page not fouwd ｡･ﾟﾟ･(థ Д థ。)･ﾟﾟ･｡
                        </h1>
                    </div>
                    <Drawing img="https://media.tenor.com/tNUmI0dD6VEAAAAj/despair.gif"/>
                </div>
            </main>
            <Footer/>
        </div>
    );
}