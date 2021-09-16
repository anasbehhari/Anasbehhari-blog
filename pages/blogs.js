import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import Article from "./components/Article";
import NFD from "../pages/404";
import StaticFunction from "../utils/StaticFunction";
import { useState } from "react";
const blogs = ({ Blogs, error }) => {
    const [BlogList, setBlogList] = useState([]);
    const handleMorePosts = event => {
        let offset = document.querySelectorAll(".Blog-post").length;
        if (offset == Blogs.length) {
            axios.get("http://localhost:3000/api/blogs?offset=" + offset + "&max=3")
                .then(res => {
                    if (res.data.length >= 1 && !res.data.blogs) {
                        res.data.forEach(blog => {
                            setBlogList(BlogList.concat(<Article key={BlogList.length} blog={blog} />));
                        });
                    }
                })
                .catch(err => {
                    alert("oooooops!");
                })
        }
    };

    if (Blogs) {
        return (
            <>
                <Head>
                    <title> welcome to Anas Behhari | blogging posts for {StaticFunction.Dateit(new Date())} | {new Date().getFullYear() - 1 + "-" + new Date().getFullYear()}</title>
                </Head>
                <h2 className="post-title " style={{ marginTop: "4rem", textAlign: "center" }}>
                    Blogs
                </h2>
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 js-post-list-wrap Blogs-con">
                                <h2 className="h4 section-title">
                                    <span>Latest posts</span>
                                </h2>
                                {Blogs.map(blog => (
                                    <Article blog={blog} key={blog._id} />
                                ))}
                                {BlogList}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="pagination-wrap text-center">
                            {Blogs.length > 5 ? <button className="btn" id="load-more-posts" onClick={handleMorePosts}>
                                <span>Load more blogs</span>
                            </button> : ""}
                        </div>
                    </div>
                </div>
            </>

        );
    }
    else {
        return <NFD />
    }

}
blogs.getInitialProps = async ctx => {
    try {
        const res = await axios.get('http://localhost:3000/api/blogs?offset=0&max=5');
        const Blogs = res.data;
        return { Blogs };
    } catch (error) {
        return { error };
    }
};
export default blogs;