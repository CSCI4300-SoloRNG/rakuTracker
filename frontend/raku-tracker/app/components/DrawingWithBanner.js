import Drawing from "@/app/components/Drawing";

import './DrawingWithBanner.css';

export default function DrawingWithBanner(props) {
    const convertDateString = function (dateString) {
        const dateObject = new Date(dateString);
        return `${dateObject.toLocaleString()}`
    }

    let drawing = props.drawing === undefined ? {
        time: "",
        prompt: "",
        url: "",
        _id: ""
    }: props.drawing;

    return (
        <div className={"drawing-holder"} key={drawing._id}>
            <Drawing url={drawing.url} _id={drawing._id}/>
            <button className={"meta-overlay"}>
                {`${convertDateString(drawing.time)}`}<br/>{`"${drawing.prompt}"`}
            </button>
        </div>
    )
}