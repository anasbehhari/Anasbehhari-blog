import Head from "next/head";
const blogs = () => {
    return (
        <>
            <h2 className="post-title " style={{marginTop:"4rem" , textAlign:"center"}}>
                Blogs
            </h2>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 js-post-list-wrap">
                            <h2 className="h4 section-title">
                                <span>Latest posts</span>
                            </h2>
                            <article className="post-card flex">
                                <a
                                    href="self-observation-is-the-first-step-of-inner-unfolding/index.html"
                                    className="post-img-wrap"
                                >
                                    <img
                                        className="post-img"
                                        loading="lazy"
                                       sizes="(max-width:432px) 400px, (max-width:696px) 600px, (max-width:767px) 671px, 400px"
                                        src=""
                                        alt="Self-observation is the first step of inner unfolding"
                                    />
                                </a>
                                <div className="post-info-wrap">
                                    <div className="flex post-top-meta">
                                        <div className="tag-wrap">
                                            <a href="tag/lifestyle/index.html">Lifestyle</a>
                                        </div>
                                        <div className="featured-icon" aria-label="Featured post icon">
                                            <svg>
                                                <use xlinkHref="#i-star" />
                                            </svg>
                                        </div>
                                    </div>
                                    <h2 className="h3 post-title">
                                        <a href="self-observation-is-the-first-step-of-inner-unfolding/index.html">
                                            Self-observation is the first step of inner unfolding
                                        </a>
                                    </h2>
                                    <div className="post-excerpt">
                                        Almost instantly the whole truth of the transaction seemed to rush
                                        upon her mind, and her wrath was inconceivably violent. She asked
                                        me a thousand questions in a breath; but, fortunately, was too
                                        vehement to attend to my embarrassment, which must otherwise have
                                        betrayed my knowledge of the deceit. Revenge
                                    </div>
                                    <div className="post-meta">
                                        <time className="post-date" dateTime="2021-05-02">
                                            May 02, 2021
                                        </time>
                                        <span className="read-time">3 min read</span>
                                        <span className="visibility">Public</span>
                                        &nbsp;
                                        <div className="seen">
                                            <svg
                                                version="1.1"
                                                id="Capa_1"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                                x="0px"
                                                y="0px"
                                                viewBox="0 0 16 16"
                                                style={{ enableBackground: "new 0 0 16 16" }}
                                                xmlSpace="preserve"
                                            >
                                                <g>
                                                    <circle style={{ fill: 'currentcolor' }} cx={8} cy="7.99" r={1} />
                                                    <path
                                                        style={{ fill: 'currentcolor' }} d="M8,2.981c-5.003,0-8,5.009-8,5.009s2.985,5.029,8,5.029s8-5.029,8-5.029S13.003,2.981,8,2.981z M8,10.99c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S9.657,10.99,8,10.99z" />
                                                </g>
                                            </svg>
                                            <span>80</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                         
                            <article className="post-card flex">
                                <a
                                    href="autumn-is-a-second-spring-when-every-leaf-is-a-flower/index.html"
                                    className="post-img-wrap"
                                >
                                    <img
                                        className="post-img"
                                        loading="lazy"
                                        sizes="(max-width:432px) 400px, (max-width:696px) 600px, (max-width:767px) 671px, 400px"
                                        src=""
                                        alt="Autumn is a second spring when every leaf is a flower"
                                    />
                                </a>
                                <div className="post-info-wrap">
                                    <div className="flex post-top-meta">
                                        <div className="tag-wrap">
                                            <a href="tag/nature/index.html">Nature</a>
                                        </div>
                                    </div>
                                    <h2 className="h3 post-title">
                                        <a href="autumn-is-a-second-spring-when-every-leaf-is-a-flower/index.html">
                                            Autumn is a second spring when every leaf is a flower
                                        </a>
                                    </h2>
                                    <div className="post-excerpt">
                                        She then expatiated very warmly upon the advantages I should reap
                                        from her plan; talked in a high style of my future grandeur;
                                        assured me how heartily I should despise almost every body and
                                        every thing I had hitherto seen; predicted my marrying into some
                                        family of the
                                    </div>
                                    <div className="post-meta">
                                        <time className="post-date" dateTime="2021-05-02">
                                            May 02, 2021
                                        </time>
                                        <span className="read-time">4 min read</span>
                                        <span className="visibility">Public</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="pagination-wrap text-center">
                        <button className="btn" id="load-more-posts">
                            <span>Load more posts</span>
                        </button>
                    </div>
                </div>
            </div>
        </>

    );
}

export default blogs;