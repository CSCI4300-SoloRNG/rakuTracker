"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Button from "@/app/components/Button";
import styles from "@/app/page.module.css";
import {authenticate} from "@/app/components/BackendInterface";

function onSubmitHandler(event) {
    // when the user clicks login
    event.preventDefault();
    console.log(`Logging in as ${event.target.username.value}, password: ${event.target.password.value}`);
    // TODO verify inputs
    authenticate(event.target.username.value, event.target.password.value).then(r => {
        if (r) {
            console.log("Login successful");
            location.assign("/") // redirect to home page
        } else {
            console.log("Login failed");
            // display error message
        }
    });
}

export default function Login() {
    return (
        <div>
            <Header login={false} createAccount={false} upload={false} logout={false}/>
            <div className={styles.centered}>
                <h1 className={styles["better-header-large"]}>Log in to your account.</h1>
                <form onSubmit={onSubmitHandler}>
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
                    <Button text="Login" type="submit"/>
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