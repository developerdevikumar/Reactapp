import React from 'react';
import VisionItem from './VisionItem';
function VisonList() {
    return (
        <div  className="row tm-welcome-row">
            <div className="row tm-welcome-row-2">
            <VisionItem image="../assets/img/img-3x2-01.jpg"
                tittle="Best collection"
                details="Aliquam purus arcu, congue a gravida ac, facilisis vel erat. Maecenas pretium sem" />
                 <VisionItem image="../assets/img/img-3x2-01.jpg"
                tittle="Best collection"
                details="Aliquam purus arcu, congue a gravida ac, facilisis vel erat. Maecenas pretium sem" />
                 <VisionItem image="../assets/img/img-3x2-01.jpg"
                tittle="Best collection"
                details="Aliquam purus arcu, congue a gravida ac, facilisis vel erat. Maecenas pretium sem" />
                 <VisionItem image="../assets/img/img-3x2-01.jpg"
                tittle="Best collection"
                details="Aliquam purus arcu, congue a gravida ac, facilisis vel erat. Maecenas pretium sem" />
                </div>
        </div>
    )
}


export default VisonList;
