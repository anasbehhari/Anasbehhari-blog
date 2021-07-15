import { useRouter } from 'next/router'
const index = () => {
    const router = useRouter()
    const { name } = router.query
    return (
            <div className="main">
                <div className="container">
                    <div className="archive-cover">
                        <div className="archive-cover-inner cover-tag flex has-image">
                            <img
                                className="cover-image lazy"
                                loading="lazy"
                             sizes="(max-width: 432px) 400px, (max-width: 696px) 600px, (max-width: 1096px) 1000px, 1200px"
                                src=""
                                alt="tag feature image"
                            />
                            <div className="cover-content-wrapper">
                                <div className="tag-info-wrap text-center">
                                    <h1 className="tag-name h2">{name}</h1>
                                    <div className="archive-info">
                                        <span className="post-count">5 Posts</span>
                                    </div>
                                    <div className="tag-description">
                                        Proin sagittis ullamcorper ante. In lectus ipsum, semper vitae
                                        vestibulum id, mollis quis massa. Cras venenatis dolor eros, quis
                                        bibendum nisl sollicitudin at.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 js-post-list-wrap">
                            <article className="post-card flex">
                                <a
                                    href="../../dramatically-improve-your-cooking-using-just-your-imagination/index.html"
                                    className="post-img-wrap"
                                >
                                    <img
                                        className="post-img"
                                        loading="lazy"
                                       sizes="(max-width:432px) 400px, (max-width:696px) 600px, (max-width:767px) 671px, 400px"
                                        src=""
                                        alt="Dramatically improve your cooking using just your imagination"
                                    />
                                </a>
                                <div className="post-info-wrap">
                                    <div className="flex post-top-meta">
                                        <div className="tag-wrap">
                                            <a href="index.html" style={{ background: "#B43ADF" }}>
                                                Food
                                            </a>
                                        </div>
                                    </div>
                                    <h2 className="h3 post-title">
                                        <a href="../../dramatically-improve-your-cooking-using-just-your-imagination/index.html">
                                            Dramatically improve your cooking using just your imagination
                                        </a>
                                    </h2>
                                    <div className="post-excerpt">
                                        You cannot too assiduously attend to Madame Duval herself; but I
                                        would wish you to mix as little as possible with her associates,
                                        who are not likely to be among those whose acquaintance would
                                        reflect credit upon you.
                                    </div>
                                    <div className="post-meta">
                                        <time className="post-date" dateTime="2021-05-02">
                                            May 02, 2021
                                        </time>
                                        <span className="read-time">4 min read</span>
                                        <span className="visibility">Paid</span>
                                    </div>
                                </div>
                            </article>
                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="pagination-wrap text-center">
                            <button className="btn" id="load-more-tags">
                                <span>Show more posts of Tag </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default index;