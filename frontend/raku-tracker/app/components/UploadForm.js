"use client"
import React, {useState} from 'react';
import SmallButton from "@/app/components/SmallButton";

const UploadForm = ({onUpload}) => {
    const [img, setImg] = useState('');
    const [prompt, setPrompt] = useState('');
    const [tags, setTags] = useState('');
    const [time, setTime] = useState('');
    const id = crypto.randomUUID();

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("submitHandler");
        if (prompt.trim().length === 0) {
            return;
        }
        console.log("calling onUpload");
        onUpload({img, prompt, tags, time, id});
        setImg('');
        setPrompt('');
        setTags('');
        setTime('');
    };

    return (
        <form onSubmit={submitHandler}>
            <label>
                Prompt:&nbsp;
                <input
                    type="text"
                    name="prompt"
                    id="prompt"
                    value={prompt}
                    onChange={(event) => setPrompt(event.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label>
                Tags:&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    name="tags"
                    id="tags"
                    value={tags}
                    onChange={(event) => setTags(event.target.value)}
                />
            </label>
            <br/>
            <br/>
            <label>
                Time:&nbsp;&nbsp;&nbsp;&nbsp;
                <input
                    type="text"
                    name="time"
                    id="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                />
            </label>
            <br/>
            <SmallButton text="Pick Image"/>
            <br/>
            <SmallButton type="submit" text="Upload" target={"/home"}/>
        </form>
    );
}

export default UploadForm;