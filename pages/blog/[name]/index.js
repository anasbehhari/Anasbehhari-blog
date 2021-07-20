import { useRouter } from 'next/router'
const index = () => {
    const router = useRouter()
    const { name } = router.query
    return (
        <>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <article className="single-post">
                                <header className="post-header">
                                    <h1 className="post-title">
                                        {name}
                                    </h1>
                                    <div className="post-meta flex">
                                        <div className="author-list flex">
                                            <a
                                                className="author-image"
                                                href="../author/biswajit/index.html"
                                                aria-label="Anas Behhari"
                                            >
                                                <img
                                                    src="/assets/images/profile-anasbehhari.png"
                                                    loading="lazy"
                                                    alt="Anas Behhari"
                                                />
                                            </a>
                                            <a
                                                href="../author/biswajit/index.html"
                                                className="author-name"
                                            >
                                                Anas Behhari
                                            </a>
                                            &nbsp;
                                        </div>
                                        <time className="post-date" dateTime="2021-05-02">
                                            May 02, 2021
                                        </time>

                                        <span className="read-time">3 min read</span>
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
                                </header>
                                <div className="featured-image-wrap">
                                    <img
                                        className="featured-image"
                                        loading="lazy"
                                        src=""
                                        alt="Self-observation is the first step of inner unfolding"
                                    />
                                </div>
                                <div className="post-content">
                                    <p>
                                        Almost instantly the whole truth of the transaction seemed to
                                        rush upon her mind, and her wrath was inconceivably violent. She
                                        asked me a thousand questions in a breath; but, fortunately, was
                                        too vehement to attend to my embarrassment, which must otherwise
                                        have betrayed my knowledge of the deceit. Revenge was her first
                                        wish; and she vowed she would go the next morning to Justice
                                        Fielding, and inquire what punishment she might lawfully inflict
                                        upon the Captain for his assault.
                                    </p>
                                    <figure className="kg-card kg-image-card kg-card-hascaption">
                                        <img
                                            src="https://images.unsplash.com/photo-1521335751419-603f61523713?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
                                            className="kg-image"
                                            loading="lazy"
                                        />
                                        <figcaption>
                                            Photo by
                                            <a href="https://unsplash.com/@austindistel?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit">
                                                Austin Distel
                                            </a>
                                            /
                                            <a href="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit">
                                                Unsplash
                                            </a>
                                        </figcaption>
                                    </figure>
                                    <p>
                                        I believe we were an hour at Bishopsgate Street before poor
                                        Madame Duval could allow any thing to be mentioned but her own
                                        story; at any length, however, Mr. Branghton told her, that M.
                                        Du Bois, and all his own family, were waiting for her at his
                                        house. A hackney-coach was then called, and we proceeded to Snow
                                        Hill.
                                    </p>
                                    <h3 id="i-ll-never-forget-the-advice-my-father-gave-me">
                                        I'll never forget the advice my father gave me
                                    </h3>
                                    <p>
                                        Mr. Branghton's house is small and inconvenient; though his
                                        shop, which takes in all the ground floor, is large and
                                        commodious. I believe I told you before, that he is a
                                        silver-smith.
                                    </p>
                                    <blockquote>
                                        Inspiration is a message from your unconscious wisdom telling
                                        you to go out there and be the fullest, most positive expression
                                        of you who you REALLY are
                                    </blockquote>
                                    <ul>
                                        <li>
                                            We were conducted up two pairs of stairs: for the dining-room,
                                            Mr. Branghton told us, was let. His two daughters, their
                                            brother, M. Du Bois, and a young man, were at tea.{" "}
                                        </li>
                                        <li>
                                            They had waited some time for Madame Duval, but I found they
                                            had not any expectation that I should accompany her; and the
                                            young ladies.
                                        </li>
                                        <li>
                                            I believe, were rather more surprised than pleased when I made
                                            my appearance; for they seemed hurt that I should see their
                                            apartment.
                                        </li>
                                        <li>
                                            Indeed, I would willingly have saved them that pain, had it
                                            been in my power.
                                        </li>
                                    </ul>
                                    <figure className="kg-card kg-image-card kg-card-hascaption">
                                        <img
                                            src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
                                            className="kg-image"
                                            alt="success"
                                            loading="lazy"
                                        />
                                        <figcaption>
                                            Photo by{" "}
                                            <a href="https://unsplash.com/@brucemars?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit">
                                                bruce mars
                                            </a>{" "}
                                            /{" "}
                                            <a href="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit">
                                                Unsplash
                                            </a>
                                        </figcaption>
                                    </figure>
                                    <p>
                                        The first person who saw me was M. Du Bois, "Ah, mon Dieu!"
                                        exclaimed he, "voila Mademoiselle!"
                                    </p>
                                    <p>"Goodness," cried young Branghton, "if there isn't Miss!"</p>
                                    <p>
                                        "Lord, so there is!" said Miss Polly; "well, I'm sure I should
                                        never have dreamed of Miss's coming."
                                    </p>
                                    <h3 id="quitters-never-win-winners-never-quit-">
                                        Quitters never win. Winners never quit!
                                    </h3>
                                    <p>
                                        "Nor I neither, I'm sure," cried Miss Branghton, "or else I
                                        would not have been in this room to see her: I'm quite ashamed
                                        about it;-only not thinking of seeing any body but my
                                        aunt-however, Tom, it's all your fault; for, you know very well
                                        I wanted to borrow Mr. Smith's room, only you were so grumpy you
                                        would not let me."
                                    </p>
                                    <figure className="kg-card kg-image-card kg-card-hascaption">
                                        <img
                                            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=2000&fit=max&ixid=eyJhcHBfaWQiOjExNzczfQ"
                                            className="kg-image"
                                            alt
                                            loading="lazy"
                                        />
                                        <figcaption>
                                            Photo by{" "}
                                            <a href="https://unsplash.com/@freestocks?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit">
                                                freestocks.org
                                            </a>
                                            /{" "}
                                            <a href="https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit">
                                                Unsplash
                                            </a>
                                        </figcaption>
                                    </figure>
                                    <p>
                                        "Lord, what signifies?" said her brother; "I dare be sworn Miss
                                        has been up two pair of stairs before now;-ha'n't you, Miss?"
                                    </p>
                                    <p>
                                        I begged that I might not give them the least disturbance; and
                                        assured them that I had not any choice in regard to what room we
                                        sat in.
                                    </p>
                                    <p>
                                        "Well," said Miss Polly, "when you come next, Miss, we'll have
                                        Mr. Smith's room: and it's a very pretty one, and only up one
                                        pair of stairs, and nicely furnished, and every thing."
                                    </p>
                                </div>
                                <div className="post-footer">
                                    <div className="tag-wrap">
                                        <a href="../tag/lifestyle/index.html">Lifestyle</a>
                                    </div>
                                    <div className="share-wrap">
                                        <div className="share-title h5 text-center">
                                            React to this article:
                                        </div>
                                        <div className="share-links flex">
                                            <div className="reaction">
                                                <a
                                                >
                                                    <svg
                                                        enableBackground="new 0 0 32 32"
                                                        id="Like"
                                                        version="1.1"
                                                        viewBox="0 0 32 32"
                                                        xmlSpace="preserve"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={24}
                                                        height={24}

                                                    >
                                                        <path
                                                            d="M29.845,17.099l-2.489,8.725C26.989,27.105,25.804,28,24.473,28H11c-0.553,0-1-0.448-1-1V13  c0-0.215,0.069-0.425,0.198-0.597l5.392-7.24C16.188,4.414,17.05,4,17.974,4C19.643,4,21,5.357,21,7.026V12h5.002  c1.265,0,2.427,0.579,3.188,1.589C29.954,14.601,30.192,15.88,29.845,17.099z"
                                                            id="XMLID_254_"
                                                        />
                                                        <path
                                                            d="M7,12H3c-0.553,0-1,0.448-1,1v14c0,0.552,0.447,1,1,1h4c0.553,0,1-0.448,1-1V13C8,12.448,7.553,12,7,12z   M5,25.5c-0.828,0-1.5-0.672-1.5-1.5c0-0.828,0.672-1.5,1.5-1.5c0.828,0,1.5,0.672,1.5,1.5C6.5,24.828,5.828,25.5,5,25.5z"
                                                            id="XMLID_256_"
                                                        />
                                                    </svg>
                                                </a>
                                                <span>100</span>
                                            </div>
                                            <div className="reaction">
                                                <a>
                                                    <svg
                                                        enableBackground="new 0 0 32 32"
                                                        id="Dislike"
                                                        version="1.1"
                                                        viewBox="0 0 32 32"
                                                        xmlSpace="preserve"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                                        width={24}
                                                        height={24}

                                                    >
                                                        <path
                                                            d="M2.156,14.901l2.489-8.725C5.012,4.895,6.197,4,7.528,4h13.473C21.554,4,22,4.448,22,5v14  c0,0.215-0.068,0.425-0.197,0.597l-5.392,7.24C15.813,27.586,14.951,28,14.027,28c-1.669,0-3.026-1.357-3.026-3.026V20H5.999  c-1.265,0-2.427-0.579-3.188-1.589C2.047,17.399,1.809,16.12,2.156,14.901z"
                                                            id="XMLID_259_"
                                                        />
                                                        <path
                                                            d="M25.001,20h4C29.554,20,30,19.552,30,19V5c0-0.552-0.446-1-0.999-1h-4c-0.553,0-1,0.448-1,1v14  C24.001,19.552,24.448,20,25.001,20z M27.001,6.5c0.828,0,1.5,0.672,1.5,1.5c0,0.828-0.672,1.5-1.5,1.5c-0.828,0-1.5-0.672-1.5-1.5  C25.501,7.172,26.173,6.5,27.001,6.5z"
                                                            id="XMLID_260_"
                                                        />
                                                    </svg>
                                                </a>
                                                <span>12.3K</span>
                                            </div>


                                        </div>
                                    </div>
                                    <div className="about-author flex">
                                        <div className="avatar-wrap">
                                            <a href="../author/biswajit/index.html" title="Anas Behhari">
                                                <img
                                                    className="avatar"
                                                    src="/assets/images/profile-anasbehhari.png"
                                                    loading="lazy"
                                                    alt="Anas Behhari"
                                                />
                                            </a>
                                        </div>
                                        <div className="author-info">
                                            <h3 className="name h5">
                                                <a href="../author/biswajit/index.html">Anas Behhari</a>
                                            </h3>
                                            <div className="bio">
                                                is a very simple person. He likes to use <b>CSS</b> and likes more to share
                                                his expreiences and lifestyle with others. <br /> Be like <b>Anas </b> 😅
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="related-posts-wrap">
                    <h3 className="section-title h5 text-center">You might also like</h3>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <article className="related-post-card">
                                <a href="index.html" className="post-img-wrap">
                                    <img
                                        className="post-img"
                                        loading="lazy"
                                        srcSet="/content/images/size/w250/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg 250w,
                          /content/images/size/w400/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg 400w,
                          /content/images/size/w600/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg 600w,
                          /content/images/size/w1000/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg 1000w,"
                                        sizes="(max-width: 432px) 400px, (max-width: 575px) 600px, (max-width: 628px) 250px, 400px"
                                        src="../content/images/size/w400/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg"
                                        alt="Self-observation is the first step of inner unfolding"
                                    />
                                </a>
                                <div className="post-info-wrap">
                                    <h2 className="h5 post-title">
                                        <a href="index.html">
                                            Self-observation is the first step of inner unfolding
                                        </a>
                                    </h2>
                                    <div className="post-meta">
                                        <time className="post-date" dateTime="2021-05-02">
                                            May 02, 2021
                                        </time>
                                        <span className="read-time">3 min read</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <article className="related-post-card">
                                <a
                                    href="../all-the-money-in-the-world-cant-buy-you-back-good-health/index.html"
                                    className="post-img-wrap"
                                >
                                    <img
                                        className="post-img"
                                        loading="lazy"
                                        sizes="(max-width: 432px) 400px, (max-width: 575px) 600px, (max-width: 628px) 250px, 400px"
                                        src="../content/images/size/w400/2021/05/joyce-mccown-IG96K_HiDk0-unsplash.jpg"
                                        alt="All the money in the world can't buy you back good health"
                                    />
                                </a>
                                <div className="post-info-wrap">
                                    <h2 className="h5 post-title">
                                        <a href="../all-the-money-in-the-world-cant-buy-you-back-good-health/index.html">
                                            All the money in the world can't buy you back good health
                                        </a>
                                    </h2>
                                    <div className="post-meta">
                                        <time className="post-date" dateTime="2020-10-09">
                                            Oct 09, 2020
                                        </time>
                                        <span className="read-time">3 min read</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <article className="related-post-card">
                                <a
                                    href="../life-is-too-important-to-be-taken-seriously/index.html"
                                    className="post-img-wrap"
                                >
                                    <img
                                        className="post-img"
                                        loading="lazy"
                                        sizes="(max-width: 432px) 400px, (max-width: 575px) 600px, (max-width: 628px) 250px, 400px"
                                        src=""
                                        alt="Life is too important to be taken seriously"
                                    />
                                </a>
                                <div className="post-info-wrap">
                                    <h2 className="h5 post-title">
                                        <a href="../life-is-too-important-to-be-taken-seriously/index.html">
                                            Life is too important to be taken seriously
                                        </a>
                                    </h2>
                                    <div className="post-meta">
                                        <time className="post-date" dateTime="2020-06-23">
                                            Jun 23, 2020
                                        </time>
                                        <span className="read-time">3 min read</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <article className="related-post-card">
                                <a
                                    href="../my-wish-is-to-stay-always-like-this-living-quietly-in-a-corner-of-nature/index.html"
                                    className="post-img-wrap"
                                >
                                    <img
                                        className="post-img"
                                        loading="lazy"
                                        sizes="(max-width: 432px) 400px, (max-width: 575px) 600px, (max-width: 628px) 250px, 400px"
                                        src=""
                                        alt="My wish is to stay always like this, living quietly in a corner of nature"
                                    />
                                </a>
                                <div className="post-info-wrap">
                                    <h2 className="h5 post-title">
                                        <a href="../my-wish-is-to-stay-always-like-this-living-quietly-in-a-corner-of-nature/index.html">
                                            My wish is to stay always like this, living quietly in a
                                            corner of nature
                                        </a>
                                    </h2>
                                    <div className="post-meta">
                                        <time className="post-date" dateTime="2020-01-05">
                                            Jan 05, 2020
                                        </time>
                                        <span className="read-time">3 min read</span>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <section className="email-subs">
                <div className="container">
                    <div className="email-subs-wrap text-center">
                        <h2 className="h1 email-subs-section-title">Subscribe to newsletter</h2>
                        <div className="email-subs-section-description">
                            Stay up to date! Get all the latest posts delivered straight to your
                            inbox.
                        </div>
                        <div className="form-wrap">
                            <form
                                className="subscribe-form text-left"
                                data-members-form="subscribe"
                            >
                                <div className="form-field-wrap field-group-inline">
                                    <label htmlFor="name" className="sr-only">
                                        Name
                                    </label>
                                    <input
                                        data-members-name
                                        type="text"
                                        className="name form-field input-field"
                                        id="name"
                                        placeholder="Your name"
                                        required
                                        autoComplete="off"
                                    />
                                    <label htmlFor="email" className="sr-only">
                                        Email
                                    </label>
                                    <input
                                        data-members-email
                                        type="email"
                                        className="email form-field input-field"
                                        id="email"
                                        placeholder="Your email address"
                                        required
                                        autoComplete="off"
                                    />
                                    <button className="btn form-field" type="submit">
                                        <span>Subscribe</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}

export default index;