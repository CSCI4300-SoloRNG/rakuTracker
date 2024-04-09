import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Button from "@/app/components/Button";
import styles from "@/app/page.module.css";
import SmallButton from "@/app/components/SmallButton";


export default function Login() {
    return (
        <div>
            <Header login={false} createAccount={false} upload={false} logout={false}/>
            <div className={styles.centered}>
                <h1 className={styles["better-header-large"]}>Log in to your account.</h1>
                <form>
                    <label>
                        Username:&nbsp;
                        <input type="text" name="username"/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Password:&nbsp;&nbsp;
                        <input type="text" name="password"/>
                    </label>
                    <br/>
                    <br/>
                    <Button text="Login" target={"/home"}/>
                    <br/>
                    <br/>
                    Don't have an account?
                    <Button text="Create Account"/>
                </form>
            </div>
            <Footer/>
        </div>
    );
}