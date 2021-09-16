import { useRouter } from 'next/router'
import Head from "next/head";
import NFS from "../../components/404";
import { useEffect } from "react";
import StaticFunction from '../../../utils/StaticFunction';
import Subscribe from '../../components/Subscribe';
function index({ blog }) {
  if (blog.length > 0) {
    let title = blog[0].title;
    let data = blog[0].data;
    let date = blog[0].creationDate;
    let readTime = blog[0].readTime;
    date = new Date(date)
    useEffect(() => {
      $(".post-content").append(data)
    })
    return (
      <>
        <Head>
          <title>{StaticFunction.replaceAll(title, "-", " ")} | Anas Behhari's Blogs 2021</title>
        </Head>
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <article className="art-1">
                  <header className="post-header">
                    <h1 className="post-title">
                      {StaticFunction.replaceAll(title, "-", " ")}
                    </h1>
                    <div className="post-meta flex" style={{ alignItems: 'center' }}>
                      <div className="author-list flex" style={{ alignItems: 'center' }}>
                        <a href="">
                          <img src="http://www.gravatar.com/avatar/021e64775176cc4c7018e5e867f17de2?s=250&amp;d=mm&amp;r=x" style={{ width: "2rem", borderRadius: "50%", marginRight: ".5rem" }} />
                        </a>
                        <time className="post-date" dateTime="2021-05-02">{StaticFunction.Dateit(date)}</time>
                        <div className="l"></div>
                        <div className="read-time">{readTime} read</div>
                        <div className="l"></div>
                        <div className="seen"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" style={{ enableBackground: 'new 0 0 16 16' }} xmlSpace="preserve"><g><circle style={{ fill: 'currentcolor' }} cx={8} cy="7.99" r={1} /><path style={{ fill: 'currentcolor' }} d="M8,2.981c-5.003,0-8,5.009-8,5.009s2.985,5.029,8,5.029s8-5.029,8-5.029S13.003,2.981,8,2.981z M8,10.99c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S9.657,10.99,8,10.99z" /></g></svg><span>80</span></div>
                      </div>
                    </div>
                  </header>
                  <div className="post-content"></div>
                </article>
              </div>
              <div className="related-posts-wrap">
                <h3 className="section-title h5 text-center">You might also like</h3>
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <article className="related-post-card">
                      <a href="index.html" className="post-img-wrap">
                        <img className="post-img" loading="lazy" sizes="(max-width: 432px) 400px, (max-width: 575px) 600px, (max-width: 628px) 250px, 400px" src="../content/images/size/w400/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg" alt="Self-observation is the first step of inner unfolding" />
                      </a>
                      <div className="post-info-wrap">
                        <h2 className="h5 post-title"><a href="index.html">Self-observation is the first step of
                          inner unfolding</a></h2>
                        <div className="post-meta">
                          <time className="post-date" dateTime="2021-05-02">May 02, 2021</time>
                          <span className="read-time">3 min read</span>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <article className="related-post-card">
                      <a href="index.html" className="post-img-wrap">
                        <img className="post-img" loading="lazy" sizes="(max-width: 432px) 400px, (max-width: 575px) 600px, (max-width: 628px) 250px, 400px" src="../content/images/size/w400/2021/05/tengyart-pNq5uxt-f7k-unsplash.jpg" alt="Self-observation is the first step of inner unfolding" />
                      </a>
                      <div className="post-info-wrap">
                        <h2 className="h5 post-title"><a href="index.html">Self-observation is the first step of
                          inner unfolding</a></h2>
                        <div className="post-meta">
                          <time className="post-date" dateTime="2021-05-02">May 02, 2021</time>
                          <span className="read-time">3 min read</span>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Subscribe />
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