
const axios = require('axios');
import Link from "next/link";
import NFD from "../pages/404";
const tags = ({ data, error }) => {
    if (!error) {
        return (
            <div className="main">
                <div className="container">
                    <div className="centered-page-header text-center">
                        <h1 className="title" style={{ marginTop: "5rem" }}>
                            Tags
                        </h1>
                        <div className="description">
                            Here you'll find all the Tags were used on this site.
                        </div>
                    </div>
                    <div className="row">

                        {data.map(el => (
                            <Link href={`/tag/${el.name}`}>
                                <div className="col-xl-4 col-lg-6 col-md-6 tag-card-wrap">
                                    <a className="tag-card flex">
                                        <div className="tag-info-wrap">
                                            <h2 className="tag-name h5">{el.name}</h2>
                                        </div>
                                        <div className="tag-image-wrap">
                                            <img
                                                src={el.image}
                                                loading="lazy"
                                                alt="Food"
                                            />
                                        </div>
                                    </a>
                                </div>

                            </Link>
                        ))}


                    </div>
                </div>
            </div>

        );
    }
    else {
        return <NFD />
    }
}
tags.getInitialProps = async ctx => {
    try {
        const res = await axios.get('/api/tags/');
        const data = res.data;
        return { data };
    } catch (error) {
        return { error };
    }
};
export default tags;