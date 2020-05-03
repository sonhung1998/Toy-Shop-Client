import React, { useState, useEffect } from 'react'

const TextEffect = () => {

    const [activate, setActivate] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActivate(!activate)
        }, 1000);
        return () => { clearInterval(interval) };
    }, [activate]);

    return (
        <span>
            {
                !activate
                    ? <img
                        src={require('../../../Public/Images/Icon/home_icon_activate.png')}
                        width={70}
                        alt="home_car_logo" />
                    : <img
                        src={require('../../../Public/Images/Icon/home_icon.png')}
                        width={70}
                        alt="home_car_logo" />

            }
        </span>

    )
}



export default TextEffect

