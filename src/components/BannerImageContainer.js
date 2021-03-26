import React from 'react';

function BannerImageContainer({imageClass}) {
    return (
            <div className="row">
                <div className="col-12">
                    <div className={`${ imageClass }`}></div>
                </div>
            </div>
    )
}
export default BannerImageContainer;
