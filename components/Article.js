import StaticFunction from "../utils/StaticFunction";
import Link from "next/link";
const Article = props => {
    return (
        <article className="post-card flex Blog-post" key={props.blog.title}>
            <a href={"/blog/" + props.blog.title} className="post-img-wrap">
                <img className="post-img" loading="lazy" sizes="(max-width:432px) 400px, (max-width:696px) 600px, (max-width:767px) 671px, 400px"
                    src={props.blog.image} alt={props.blog.title} />
            </a>
            <div className="post-info-wrap">
                <div className="flex post-top-meta">
                    <div className="tag-wrap">
                        {props.blog.Tags.map(tag => (<Link key={Math.random()} style={{ backgroundColor: `${tag.color}`}} href={"/tag/" + tag}>{tag}</Link>))}
                    </div>
                    {
                        props.star==true ? <div className="featured-icon" aria-label="Featured post icon"> <svg> <use xlinkHref="#i-star" /> </svg> </div> : ""
                    }

                </div>
                <h2 className="h3 post-title">
                    <Link href={"/blog/" + props.blog.title}>
                        {StaticFunction.replaceAll(props.blog.title, "-", " ")}
                    </Link>
                </h2>
                <div className="post-excerpt">
                    {props.blog.brief}
                </div>
                <div className="post-meta">
                    <time className="post-date" dateTime={StaticFunction.Dateit(new Date(props.blog.creationDate))}>{StaticFunction.Dateit(new Date(props.blog.creationDate))}</time>
                    <span className="read-time">{props.blog.readTime} read</span>
                    <span className="visibility">Public</span>
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
                            xmlSpace="preserve"
                        >
                            <g>
                                <circle className="current-clr-fill" cx={8} cy="7.99" r={1} />
                                <path
                                    className="current-clr-fill" d="M8,2.981c-5.003,0-8,5.009-8,5.009s2.985,5.029,8,5.029s8-5.029,8-5.029S13.003,2.981,8,2.981z M8,10.99c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S9.657,10.99,8,10.99z" />
                            </g>
                        </svg>
                        <span>{props.blog.views}</span>
                    </div>
                </div>
            </div>
        </article>

    );
}

export default Article;