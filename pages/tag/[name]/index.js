import axios from "axios";
import NFD from "../../404";
import CheckVisibility from '../../Functions/checkVisibility';
import Head from "next/head";
import Article from "../../components/Article"
import { useState } from "react";
const index = ({ tag, error }) => {
    const [BlogListTags, setBlogListTags] = useState([]);
    let secure = 0;
    const handleMorePosts = event => {
        let offset = document.querySelectorAll(".blog-post-tag").length;
        if (secure < 2) {
            axios.get("http://localhost:3000/api/blogs?offset=" + offset + "&max=5&tag=" + tag.name)
                .then(res => {
                    if (res.data.length >= 1 && !res.tag.Blogs) {
                        res.data.forEach(blog => {
                            setBlogListTags(BlogListTags.concat(<div className="blog-post-tag" key={BlogListTags.length}> <Article blog={blog} /> </div>));
                        });
                    }
                    else {
                        secure++;
                    }
                })
                .catch(err => {
                    console.log(err)
                    alert("oooooops!");
                })
        }

    };
    if (!error) {
        return (

            <div className="main">
                <Head>
                    <title>{tag.Tag.name} Tag | All posts and blogs related.</title>
                </Head>
                <div className="container" style={{ marginTop: "3rem" }}>
                    <div className="archive-cover">
                        <div className="archive-cover-inner cover-tag flex has-image" style={{padding:"7rem 2rem"}}>
                            <img
                                className="cover-image lazy"
                                loading="lazy"
                                sizes="(max-width: 432px) 400px, (max-width: 696px) 600px, (max-width: 1096px) 1000px, 1200px"
                                src={tag.Tag.image}
                                alt="tag feature image"
                            />
                            <div className="cover-content-wrapper">
                                <div className="tag-info-wrap text-center">
                                    <h1 className="tag-name h2">{tag.Tag.name}</h1>
                                    <div className="archive-info">
                                        <span className="post-count"><b>{tag.Blogs.length} posts available </b></span>
                                    </div>
                                    <div className="tag-description">
                                        {tag.Tag.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <h2 className="h4 section-title"><span>Latest posts</span></h2>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 js-post-list-wrap">
                            {tag.Blogs.map(blog => (
                                <div key={blog._id} className="blog-post-tag">
                                    <Article blog={blog} />
                                </div>
                            ))}
                            {BlogListTags}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="pagination-wrap text-center">
                            {tag.Blogs.length > 5 ? <button className="btn" id="load-more-tags" onClick={handleMorePosts}> <span>Show more posts of Tag </span> </button> : ""}
                        </div>
                    </div>
                </div>
                <CheckVisibility />

            </div>
        );
    }
    else {
        console.log(error);
        return <NFD />
    }
}

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/tags')
    const tags = await res.json()
  
    const paths = tags.map((tag) => ({
      params: { name: tag.name.toString() },
    }))
  
    return { paths, fallback: false }
  }
  export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/tags/${params.name}?blogs=true&max=5`)
    const tag = await res.json()
    return { props: { tag } }
  }
  
export default index;