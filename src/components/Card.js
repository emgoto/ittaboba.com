import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

function Card({title, preview, image}) {
    return (
        <div className="card-div">
            <GatsbyImage style={{
                position: "relative",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "10em",
                overflow: "hidden"
            }}
            alt="" image={image} />
            <h2 style={{
                fontSize: "24px",
                fontWeight: "700",
                padding: "10px"
            }}>{title}</h2>
            <p className="card-p">{preview}</p>
        </div>
    )
}

export default Card