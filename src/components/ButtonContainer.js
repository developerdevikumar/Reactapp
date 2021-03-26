import React from 'react'

function ButtonContainer(buttonclass) {
    return (
        <React.Fragment>

<div class="row tm-welcome-row-2">
                    <div class="col-lg-4 tm-dotted-box-container">
                        <article class="tm-dotted-box">
                            <a className= { `${ buttonclass }`}></a>
                        </article>
                    </div>
                    </div>
        </React.Fragment>
    )
}

export default ButtonContainer
