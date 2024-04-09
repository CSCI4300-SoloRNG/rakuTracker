import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Button from "@/app/components/Button";
import styles from "@/app/page.module.css";


export default function Login() {
    return (
        <div>
            <Header/>
            <div class={styles.centered}>
                <h1 class={styles["better-header-large"]}>Log in to your account.</h1>
                <form>
                    <label>
                        Username:&nbsp;   
                        <input type="text" name="username" />
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Password:&nbsp;&nbsp;
                        <input type="text" name="password" />
                    </label>
                    <br/>
                    <br/>
                    <Button text="Login" />
                    <br/>
                    <br/>
                    Don't have an account?
                    <Button text="Create Account" />
                </form>
            </div>
            <Footer/>
        </div>
    );
}