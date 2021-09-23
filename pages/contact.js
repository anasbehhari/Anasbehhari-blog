import Head from "next/head";
const Contact = () => {
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
                                   
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
       </>
    );
}

export default Contact;