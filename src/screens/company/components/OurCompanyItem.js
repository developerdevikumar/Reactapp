import React from 'react'

function OurCompanyItem({imageclass, text}) {
    return (
<div class="col-12 tm-media tm-media-v-center">
                            <i class={`"fab fa-5x fa-accusoft tm-about-icon" ${imageclass}`}></i>
                            <div>
                                <p><a rel="nofollow" target="_parent" ></a>{text}</p>
                            </div>
                        </div>
    )
}

export default OurCompanyItem
