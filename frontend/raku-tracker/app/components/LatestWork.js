import Drawing from "@/app/components/Drawing";
import {getDrawings} from "@/app/components/BackendInterface";
import {useEffect, useState} from "react";
import './LatestWork.css';

export default function LatestWork() {
    const [drawing, setDrawing] = useState({});

    useEffect(() => {
        getDrawings().then(drawings => {
            console.log(`use effect: drawings: ${drawings}`);
            if (drawings === undefined || drawings === null) {
                drawings = [{}];
            } else {
                // only keep first drawing
                drawings = drawings[drawings.length - 1];
            }
            setDrawing(drawings);
        });
    }, []);

    return (
        <div className={"latest-work"}>
            <Drawing _id={drawing._id} url={drawing.url}/>
            <button className={"meta-overlay"}>Date・Title・Prompt</button>
        </div>);
}