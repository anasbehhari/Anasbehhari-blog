import Link from "next/link";
const Search = () => {
    return (
        <div className="search-popup js-search-popup">
            <div className="search-popup-bg" />
            <a className="close-button" id="search-close" aria-label="Close search">
                <svg>
                    <use xlinkHref="#i-close" />
                </svg>
            </a>
            <div className="popup-inner">
                <div className="inner-container">
                    <form className="search-form" id="search-form">
                        <div className="search-form-box flex">
                            <input type="text" className="search-input" placeholder="Type to search" id="search-input" aria-label="Type to search" role="searchbox" />
                        </div>
                    </form>
                    <div className="search-close-note">Press ESC to close.</div>
                    <div className="search-result" id="search-results" />
                    <div className="suggested-tags tag-wrap" id="suggested-tags">
                        <h2 className="h6">See posts by Popular tags</h2>
                        <div className="tag-list">
                            <Link href="/tag/inspiration" style={{ background: '#9d6805' }}>Inspiration</Link>
                            <a href="/tag/lifestyle">Lifestyle</a>
                            <a href="/tag/nature">Nature</a>
                            <a href="/tag/health">Health</a>
                            <a href="/tag/travel" style={{ background: '#e10689' }}>Travel</a>
                            <a href="/tag/food" style={{ background: '#b43adf' }}>Food</a>
                            <a href="/tag/technology" style={{ background: '#2d841f' }}>Technology</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Search;