import Link from "next/link";

const Page_404 = (props) => {
  return (
    <div className="main">
      <div
        className="error-content-wrap text-center"
        style={{ marginTop: "5rem" }}
      >
        <div className="error-code">404</div>
        <h1 className="error-message h3">Page not found</h1>
        <p className="message-manual">
          Maybe the URL is incorrect, or the page no longer exist.
        </p>
        <Link href="/" className="btn">
          <a>Return to home page</a>
        </Link>
      </div>
    </div>
  );
};

export default Page_404;
