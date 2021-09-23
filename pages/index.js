import Head from 'next/head'
import Link from 'next/link'
import Subscribe from './components/Subscribe';
import Page_404 from "./404";
import Article from './components/Article';
const index = ({ data, error }) => {
    if(error) {
        return <Page_404 />
    }
         return (
        <>
            <Head>
                <title>welcome to Anas Behhari | blogging website {new Date().getFullYear()-1 +"-"+ new Date().getFullYear()} </title>
            </Head>
            <section className="home-cover-area">
                <div className="container">
                    <div className="row home-cover-wrap has-cover-image">
                        <div className="col-lg-5">
                            <div className="cover-img-container">
                                <div className="cover-img-wrap">
                                    <div className="front">
                                        <img loading="lazy" src="/assets/images/profile-anasbehhari.png" alt="Arun Roy cover image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="home-cover-content-wrap">
                                <h1 className="heading-large">Hay, I am Anas</h1>
                                <div className="intro-description">
                                    An Front-End web developer From <b>Morocco 🇲🇦</b> and I love
                                    billards 🎱 &amp; snooker . On this site I write about my learning
                                    and experience.
                                </div>
                                <form className="members-form cover-subscribe-form text-left" data-members-form="subscribe">
                                    <div className="form-field-wrap field-group-inline">
                                        <label htmlFor="header-form-words" className="sr-only">words</label>
                                        <input data-members-words type="text" className="words form-field input-field" id="header-form-words" placeholder="Your Have some words ? ...Type Here" required autoComplete="off" />
                                        <button className="btn form-field" type="submit">
                                            <span>Send now</span>
                                        </button>
                                    </div>
                                    <div className="message-container">
                                        <div className="notification success form-notification">
                                            <a className="notification-close" aria-label="close notification"><span className="close-icon"><svg>
                                                <use xlinkHref="#i-close" />
                                            </svg></span></a>
                                            <strong>Great!</strong> Check your inbox and click the
                                            link to confirm your subscription
                                        </div>
                                        <div className="notification error form-notification">
                                            <a className="notification-close" aria-label="close notification"><span className="close-icon"><svg>
                                                <use xlinkHref="#i-close" />
                                            </svg></span></a>
                                            <strong>Error!</strong> Please enter a valid email
                                            address!
                                        </div>
                                    </div>
                                </form>
                                <div className="social-links-wrap flex">
                                    <span className="title">Follow:</span>
                                    <div className="social-links flex">
                                        <a href="https://twitter.com/Anas21358753" target="_blank" rel="noreferrer" aria-label="twitter link"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
                                            </path>
                                        </svg>
                                        </a>
                                        <a href="https://www.facebook.com/gbjsolution" target="_blank" rel="noreferrer" aria-label="facebook link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z">
                                                </path>
                                            </svg>
                                        </a>
                                        <a href="https://instagram.com/anas_behhari" target="_blank" rel="noreferrer" aria-label="instagram link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z">
                                                </path>
                                            </svg>
                                        </a>
                                        <a href="https://github.com/anasbehhari" target="_blink" aria-label="github link">
                                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 js-post-list-wrap">
                            <h2 className="h4 section-title"><span>Most Popular posts</span></h2>
                            {data.popular.map(pop => (
                              <Article key={pop._id} blog={pop} star={true} />
                            ))}
                            <h2 className="h4 section-title"><span>Latest posts</span></h2>
                            {data.latest.map(lat => (
                              <Article key={lat._id} blog={lat} star={false}  />
                           
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="pagination-wrap text-center" id="pagination-wrap">
                            <Link href="/blogs">
                                <button className="btn" id="load-more">
                                    <span>Show more blogs</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe/>
          </>
    );
    }
    
   

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/api/blogs/lts-pop`);
    const data = await res.json();
    if (data) {
      return {
        props: {
          data,
        },
      };
    }
    return {
      props: {
        error: "Something went wrong try refresh ! ",
      },
    };
  }
export default index;