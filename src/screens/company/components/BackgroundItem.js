import React from 'react'

function BackgroundItem({text}) {
    return (
        <div class="col-md-6">
        <img src="../assets/img/img-3x1-01.jpg" alt="Image" class="img-fluid mb-5" />
        <p class="tm-article-text">{text}</p>
        <p>{text}</p>
    </div>

    )
}

export default BackgroundItem
