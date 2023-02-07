import React, { useEffect, useState } from 'react';

const First = (props) => {
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
        <span className={`navigation-span first ${props.activeIndex === path ? "active" : ""}`} onClick={navigate}>{ title }</span>
    )
}

export default First;