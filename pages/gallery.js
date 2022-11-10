import React from 'react';
import Nav from "../components/Nav";

function Gallery() {
    return (
        <>
            <div class="tm-section">
                <Nav />
                <div class="tm-content-container">
                    <div class="tm-content tm-content-2">
                        <p>
                            This gallery contains a beautiful hover effect and pop-up larger
                            images. Please mention TemplateMo site to your friends.
                        </p>

                        <div class="container-fluid">
                            <div class="row tm-gallery" id="tmGallery">
                                <div class="col-sm-6 tm-gallery-item">
                                    <figure class="effect-bubba">
                                        <img src="/assets/img/gallery/gallery-img-01.jpg" alt="Gallery item" class="img-fluid" />
                                        <figcaption>
                                            <h2>Fresh <span>Bubba</span></h2>
                                            <p>Bubba likes to appear out of thin air.</p>
                                            <a href="/assets/img/gallery/gallery-img-01.jpg">View more</a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="col-sm-6 tm-gallery-item">
                                    <figure class="effect-bubba">
                                        <img src="/assets/img/gallery/gallery-img-02.jpg" alt="Gallery item" class="img-fluid" />
                                        <figcaption>
                                            <h2>Fresh <span>Bubba</span></h2>
                                            <p>Bubba likes to appear out of thin air.</p>
                                            <a href="/assets/img/gallery/gallery-img-02.jpg">View more</a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="col-sm-6 tm-gallery-item">
                                    <figure class="effect-bubba">
                                        <img src="/assets/img/gallery/gallery-img-03.jpg" alt="Gallery item" class="img-fluid" />
                                        <figcaption>
                                            <h2>Fresh <span>Bubba</span></h2>
                                            <p>Bubba likes to appear out of thin air.</p>
                                            <a href="/assets/img/gallery/gallery-img-03.jpg">View more</a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="col-sm-6 tm-gallery-item">
                                    <figure class="effect-bubba">
                                        <img src="/assets/img/gallery/gallery-img-04.jpg" alt="Gallery item" class="img-fluid" />
                                        <figcaption>
                                            <h2>Fresh <span>Bubba</span></h2>
                                            <p>Bubba likes to appear out of thin air.</p>
                                            <a href="/assets/img/gallery/gallery-img-04.jpg">View more</a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="col-sm-6 tm-gallery-item">
                                    <figure class="effect-bubba">
                                        <img src="/assets/img/gallery/gallery-img-05.jpg" alt="Gallery item" class="img-fluid" />
                                        <figcaption>
                                            <h2>Fresh <span>Bubba</span></h2>
                                            <p>Bubba likes to appear out of thin air.</p>
                                            <a href="/assets/img/gallery/gallery-img-05.jpg">View more</a>
                                        </figcaption>
                                    </figure>
                                </div>
                                <div class="col-sm-6 tm-gallery-item">
                                    <figure class="effect-bubba">
                                        <img src="/assets/img/gallery/gallery-img-06.jpg" alt="Gallery item" class="img-fluid" />
                                        <figcaption>
                                            <h2>Fresh <span>Bubba</span></h2>
                                            <p>Bubba likes to appear out of thin air.</p>
                                            <a href="/assets/img/gallery/gallery-img-06.jpg">View more</a>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Gallery;