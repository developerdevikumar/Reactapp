import React from 'react'

function ButtonTextContainer(backgroundColor,text) {
    return (
        <>
<div class="row tm-welcome-row-2">
                    <div class="col-lg-4 tm-dotted-box-container">
                        <article class="tm-dotted-box">
                            <a className={` tm-btn tm-btn-rounded tm-article-link ${ backgroundColor }`}>{text}</a>
                        </article>
                    </div>
                    </div>
        </>
    )
}

export default ButtonTextContainer
