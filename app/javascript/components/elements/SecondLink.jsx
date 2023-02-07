import React, { useEffect, useState } from 'react';

const Second = (props) => {
    const [title, setTitle] = useState("");
    const [path, setPath] = useState("");

    useEffect(() => {
        if (props.title) setTitle(props.title);
        if (props.path) setPath(props.path)
    })

    function navigate() {
        console.log("DEBUG - Navigate called.")
        props.navigateToPath(path);
    }

    return (
        <span className={`navigation-span secondary ${props.activeIndex === path ? "active" : ""}`} onClick={navigate}><span className='light-gray bold inline' style={{ width: props.activeIndex === path ? "0px" : "8px", transition: "0.25s all ease" }}>|</span> { title }</span>
    )
}

export default Second;