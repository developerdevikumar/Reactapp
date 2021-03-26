import React from 'react';

function BannerTextContainer({backgroundColor, text}) {
    return (
        <>
            <section className="tm-wellcome-row">
                <div className="row">
                    <div className="col-12">
                        <h2 className={`tm-section-header tm-header-floating ${ backgroundColor }`}>{text}</h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerTextContainer;
