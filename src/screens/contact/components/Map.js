import React from 'react';


function Map() {
    return (
        <div>
             <div className="row pb-5">
                  <div className="mapouter">
                      <div className="gmap_canvas">
                          <iframe width="100%" height="440" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0025656727275!2d77.5708723148213!3d12.907556290897896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15657c8e000b%3A0x84a3ce06f708d790!2sJaya%20Prakash%20Nagar!5e0!3m2!1sen!2sin!4v1616581779231!5m2!1sen!2sin" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                      </div>
                  </div>
                </div>
                <div className="row pt-5 pb-5 mb-5">
                    <div className="col-md-6 tm-contact-l">
                        <h3 className="tm-article-title tm-color-primary">Fusce consectetur justo urna</h3>
                        <p className="mb-4">Phasellus scelerisque, leo id dictum consectetur, dui felis ultrices ligula, at tristique sem elit ac eros.</p>
                        <ul className="tm-ul-hyphen">
                            <li>Etiam varius faucibus elit, id ultrices</li>
                            <li>Nam condimentum tortor id dui</li>
                            <li>Quis faucibus lacus faucibus</li>
                            <li>Sed urna est, vulputate quis efficitur</li>
                        </ul>
                    </div>
                    <div className="col-md-6 tm-contact-r">
                        <h3 className="tm-article-title tm-color-primary">Nulla euismod nisi in ligula</h3>
                        <p className="mb-4">Etiam iaculis urna finibus ante pharetra eleifend. Nulla
                        euismod nisi in ligula feugiat, in gravida erat tempus.
                        Nullam velit ante, semper in rhoncus non, fringilla vel
                        erat. In gravida dapibus massa non laoreet.</p>
                        <p>className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                    </div>
                </div>
        </div>
    )
}

export default Map;
