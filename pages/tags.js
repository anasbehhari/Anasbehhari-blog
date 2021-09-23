import Head from "next/head";
import Link from "next/link";
import Page_404 from "./404";
import StaticFunction from "../utils/StaticFunction";
const tags = ({ data, error }) => {
  if (!error) {
    return (
      <>
        <Head>
          <title>
            welcome to Anas Behhari | blogging Tags  |
            {StaticFunction.Dateit(new Date())} |
            {new Date().getFullYear() - 1 + "-" + new Date().getFullYear()}
          </title>
        </Head>
        <div className="main">
          <div className="container">
            <div className="centered-page-header text-center">
              <h1 className="title" style={{ marginTop: "2rem" }}>
                Tags
              </h1>
              <div className="description">
                Here you'll find all the Tags were used on this site.
              </div>
            </div>
            <div className="row">
              {data.map((el) => (
                <Link passHref href={`/tag/${el.name}`} key={el.name}>
                  <div className="col-xl-4 col-lg-6 col-md-6 tag-card-wrap">
                    <a className="tag-card flex">
                      <div className="tag-info-wrap">
                        <h2 className="tag-name h5">{el.name}</h2>
                      </div>
                      <div className="tag-image-wrap">
                        <img src={el.image} loading="lazy" alt="Food" />
                      </div>
                    </a>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Page_404 />;
  }
};

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/tags`);
  const data = await res.json();
  if (data) {
    return {
      props: {
        data
      },
    };
  }
  return {
    props: {
      error: "Something went wrong try refresh ! ",
    },
  };
}
export default tags;
