import React, { useState, useEffect } from 'react'

const TextEffect = ({ title, activateColor, deactivateColor }) => {

    const [activate, setActivate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActivate(!activate)
        }, 1000);
        return () => { clearInterval(interval) };
    }, [activate]);

    return (
        <span style={
            {
                color: activate ? activateColor : deactivateColor
            }
        }>
            {title}
        </span>
    )
}



export default TextEffect

