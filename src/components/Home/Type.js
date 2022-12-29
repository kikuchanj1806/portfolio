import React from "react";
import TypeWriter from "typewriter-effect"

function Type() {
    return (
        <TypeWriter
            options={{
                strings: ["Developer",
                    "Deep Learning Engineer",
                    "MERN Stack Developer",
                    "Open Source Contributor",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    )
}

export default Type;