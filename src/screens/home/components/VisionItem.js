import React from 'react'
function VisionItem({image, tittle, details}) {
    return (
        <article className="col-lg-6 tm-media">
            <img src={image}/>
            <div className="tm-media-body">
                <a href="#" className="tm-article-link"><h3 className="tm-article-title text-uppercase">{tittle}</h3></a>
                <p>{details}</p>
            </div>
        </article>
    )
}

export default VisionItem
