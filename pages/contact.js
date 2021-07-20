import Head from "next/head";
const contact = () => {
    return (
        <>
            <Head>
                <title>Anas Behhari | Contact us  </title>
            </Head>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <article className="single-post">
                                <header className="post-header">
                                    <h1 className="post-title" style={{ marginTop: "5rem" }}>
                                        Contact
                                    </h1>
                                </header>
                                <div className="post-content">
                                    <p>
                                        Hello! Do you have any question or suggestion about this site,
                                        or just want to say Hi? Send me a message using below form. I
                                        will get back to you as soon as possible.
                                    </p>
                                    {/*kg-card-begin: html*/}
                                    <form action="https://formspree.io/your@email.com" method="POST">
                                        <input type="text" name="name" placeholder="Full name" />
                                        <input type="email" name="_replyto" placeholder="Email" />
                                        <input type="text" name="subject" placeholder="Subject" />
                                        <textarea
                                            name="message"
                                            placeholder="Message"
                                            defaultValue={""}
                                        />
                                        <input
                                            className="btn btn-primary full"
                                            type="submit"
                                            defaultValue="Send Message"
                                            rows={4}
                                        />
                                    </form>
                                    {/*kg-card-end: html*/}
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
                                <div className="message-container">
                                    <div className="notification success form-notification">
                                        <a
                                            className="notification-close"
                                            href=""
                                            aria-label="close notification"
                                        >
                                            <span className="close-icon">
                                                <svg>
                                                    <use xlinkHref="#i-close" />
                                                </svg>
                                            </span>
                                        </a>
                                        <strong>Great!</strong> Check your inbox and click the link to
                                        confirm your subscription.
                                    </div>
                                    <div className="notification error form-notification">
                                        <a
                                            className="notification-close"
                                            href=""
                                            aria-label="close notification"
                                        >
                                            <span className="close-icon">
                                                <svg>
                                                    <use xlinkHref="#i-close" />
                                                </svg>
                                            </span>
                                        </a>
                                        <strong>Error!</strong> Please enter a valid email address!
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default contact;