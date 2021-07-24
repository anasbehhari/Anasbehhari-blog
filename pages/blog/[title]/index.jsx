import { useRouter } from 'next/router'
import Head from "next/head";
import NFS from "../../components/404";
import { useEffect } from "react";
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
function index({ blog }) {
  if (blog.length > 0) {
    let title = blog[0].title;
    let data = blog[0].data;
    let author = blog[0].author;
    let date = blog[0].date;
    let readTime = blog[0].readTime;
    let views = blog[0].views;
    useEffect(() => {
      $(".con").append(data)
    })
    return (
      <>
        <Head>
          <title>{replaceAll(title, "-", " ")} | Anas Behhari's Blogs 2021</title>
        </Head>
        <div className="main">

          <div className="container">
            <div className="post-header">
              
            </div>
            <div class="con"></div>
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
    )
  }
  else {
    return <NFS />
  }
}


export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/api/blogs')
  const blogs = await res.json()

  const paths = blogs.map((blog) => ({
    params: { title: blog.title.toString() },
  }))

  return { paths, fallback: false }
}
export async function getStaticProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/blogs/${params.title}`)
  const blog = await res.json()
  return { props: { blog } }
}

export default index;