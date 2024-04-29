"use client"
import React, {useEffect, useState} from 'react';
import SmallButton from "@/app/components/SmallButton";
import FilePickerButton from "@/app/components/FilePickerButton";

const UploadForm = ({onUpload, onImageSelect, showFilePicker, defaultPrompt, defaultTime, defaultTags}) => {

    console.log(`defaultPrompt: ${defaultPrompt}, defaultTime: ${defaultTime}, defaultTags: ${defaultTags}`);
    const [img, setImg] = useState('');
    const [prompt, setPrompt] = useState(defaultPrompt || '');
    const [tags, setTags] = useState(defaultTags || '');
    const [time, setTime] = useState(defaultTime || '');

    useEffect(() => {
        setPrompt(defaultPrompt || '');
        setTags(defaultTags || '');
        setTime(defaultTime || '');
    }, [defaultPrompt, defaultTags, defaultTime]);

    const submitHandler = (event) => {
        event.preventDefault();
        // TODO verify inputs
        console.log("submitHandler");
        if (prompt.trim().length === 0) {
            return;
        }
        console.log("calling onUpload");
        onUpload({img, prompt, tags, time});

        //TODO
        location.assign("/") // redirect to home page
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
                    type="datetime-local"
                    name="time"
                    id="time"
                    value={time}
                    onChange={(event) => setTime(event.target.value)}
                />
            </label>
            <br/>
            {showFilePicker &&
                <FilePickerButton text="Pick Image" onChange={
                    (e) => {
                        let image = e.target.files[0];
                        let imageURL = URL.createObjectURL(image);
                        setImg(imageURL);
                        console.log(`Pick Image: setting img to ${imageURL}`);
                        onImageSelect(imageURL);
                    }
                }/>
            }
            <br/><SmallButton type="submit" text={showFilePicker ? "Upload" : "Save"}/>
        </form>
    );
}

export default UploadForm;