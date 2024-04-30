import Drawing from "@/app/components/Drawing";

import './DrawingWithBanner.css';

export default function DrawingWithBanner(props) {
    const convertDateString = function (dateString) {
        const dateObject = new Date(dateString);
        return `${dateObject.toLocaleString()}`
    }

    if(props.drawing === undefined) {
        props.drawing = {
            time: "",
            prompt: "",
            url: "",
            _id: ""
        }
    }

    return (
        <div className={"drawing-holder"} key={props.drawing._id}>
            <Drawing url={props.drawing.url} _id={props.drawing._id}/>
            <button className={"meta-overlay"}>
                {`${convertDateString(props.drawing.time)}`}<br/>{`"${props.drawing.prompt}"`}
            </button>
        </div>
    )
}