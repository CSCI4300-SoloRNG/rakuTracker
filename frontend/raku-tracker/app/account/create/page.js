"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Button from "@/app/components/Button";
import styles from "@/app/page.module.css";
import {authenticate, createAccount} from "@/app/components/BackendInterface";

function onSubmitHandler(event) {
    // when the user clicks login
    event.preventDefault();
    console.log(`Creating account as email: ${event.target.email.value}, username: ${event.target.username.value}, password: ${event.target.password.value}`);
    // TODO verify inputs
    createAccount(event.target.email.value, event.target.username.value, event.target.password.value).then(r => {
        if (r) {
            console.log("Account creation successful");
            location.assign("/account/login") // redirect to login page
        } else {
            console.log("Account creation failed");
            // TODO handle error
        }
    }).catch(e => {
        console.log(e);
        // TODO handle error
    });
}

export default function CreateAccount() {
    return (
        <div>
            <Header login={false} createAccount={false} upload={false} logout={false}/>
            <div className={styles.centered}>
                <h1 className={styles["better-header-large"]}>Create an account.</h1>
                <form onSubmit={onSubmitHandler}>
                    <label>
                        Email:&nbsp;
                        <input type="email" name="email"/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Username:&nbsp;
                        <input type="text" name="username"/>
                    </label>
                    <br/>
                    <br/>
                    <label>
                        Password:&nbsp;&nbsp;
                        <input type="password" name="password"/>
                    </label>
                    <br/>
                    <br/>
                    <Button text="Sign Up" type="submit"/>
                    <br/>
                    <br/>
                    Already have an account?
                    <Button text="Login to existing account" target="/account/login"/>
                </form>
            </div>
            <Footer/>
        </div>
    );
}