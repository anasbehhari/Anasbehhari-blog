const tags = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="centered-page-header text-center">
                    <h1 className="title" style={{ marginTop: "5rem" }}>
                        Tags
                    </h1>
                    <div className="description">
                        Here you'll find all the Tags were used on this site.
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 tag-card-wrap">
                        <a href="/tag/Inspiration" className="tag-card flex">
                            <div className="tag-info-wrap">
                                <h2 className="tag-name h5">Inspiration</h2>
                                <div className="post-count">7 posts</div>
                            </div>
                            <div className="tag-image-wrap">
                                <img
                                    src=""
                                    loading="lazy"
                                    alt="Inspiration"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 tag-card-wrap">

                        <a href="/tag/Food" className="tag-card flex">
                            <div className="tag-info-wrap">
                                <h2 className="tag-name h5">Food</h2>
                                <div className="post-count">7 posts</div>
                            </div>
                            <div className="tag-image-wrap">
                                <img
                                    src=""
                                    loading="lazy"
                                    alt="Food"
                                />
                            </div>
                        </a>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 tag-card-wrap">

                        <a href="/tag/Nature" className="tag-card flex">
                            <div className="tag-info-wrap">
                                <h2 className="tag-name h5">Nature</h2>
                                <div className="post-count">7 posts</div>
                            </div>
                            <div className="tag-image-wrap">
                                <img
                                    src=""
                                    loading="lazy"
                                    alt="Nature"
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default tags;