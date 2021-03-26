import React from 'react'

function AboutItem({image, tittle, details, button}) {
    return (

<div className="col-lg-4 tm-dotted-box-container">
        <article class="tm-dotted-box">
            <i class="fas fa-3x fa-binoculars tm-article-icon">{image}</i>
            <h3 class="tm-article-title">{tittle}</h3>
            <p class="tm-article-text">{details}</p>
            <a class="tm-btn tm-btn-rounded tm-article-link" >{button}</a>
        </article>

</div>
    )
}

export default AboutItem
