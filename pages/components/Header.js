import Link from "next/link";
const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-inner justify-space-between">
        <div className="header-logo flex">
          <Link href="/">
            <a  className="logo-img theme-light-logo">
              <img src="/assets/images/anasbehhari-logo.png" alt="Anas Behhari" />
            </a>
          </Link>
          <Link href="/">
            <a  className="logo-img theme-dark-logo">
              <img src="/assets/images/anasbehhari-logo.png" alt="Anas Behhari" />
            </a>
          </Link>
          
        </div>
        <input
          id="mobile-menu-toggle"
          className="mobile-menu-checkbox"
          type="checkbox"
        />
        <label
          htmlFor="mobile-menu-toggle"
          className="mobile-menu-icon"
          aria-label="menu toggle button"
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
          <span className="sr-only">Menu toggle button</span>
        </label>
        <div className="header-right flex">
          <nav
            className="header-nav"
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className="header-nav-list no-style-list" role="menu">
              <li className="nav-item" role="menuitem">
                <Link href="/">Home</Link>
              </li>
              <li className="nav-item" role="menuitem">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="nav-item" role="menuitem">
                <Link href="/portfolio">portfolio</Link>
              </li>
              <li className="submenu-parent">
                <a href="#">
                  More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 18c-.39 0-.78-.132-1.097-.398L.617 9.03a1.713 1.713 0 112.194-2.633l9.208 7.673 9.192-7.397a1.715 1.715 0 012.15 2.671l-10.286 8.277A1.714 1.714 0 0112 18z" />
                  </svg>
                </a>
                <ul className="no-style-list">
                  <li className="nav-item" role="menuitem">
                    <Link href="/tags">Tags</Link>
                  </li>
                  <li className="nav-item" role="menuitem">
                    <Link href="/monthly-archive">Monthly archive</Link>
                  </li>
                  <li className="nav-item" role="menuitem">
                    <Link href="/yearly-archive">Yearly archive</Link>
                  </li>
                  <li className="nav-item" role="menuitem">
                    <Link href="/contact">contact</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item" role="menuitem">
                <a
                  className="btn btn-menuitem"
                  href="https://twitch.tv/anasbehhari"
                  target="_blank"
                  rel="noreferrer"
                >
                  Twitch Tv
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="mdi-twitch"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M7 2L3.43 5.57V18.43H7.71V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.71V3.43H19.14Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <ul className="icon-items-wrap flex">
            <li>
            <a
              className="nav-icon search-icon flex js-search-button"
              aria-label="Open search"
            >
              <span>
                <svg>
                  <use xlinkHref="#i-search" />
                </svg>
              </span>
            </a>
            
            </li>
            <li>
            <a
              className="nav-icon theme-icon flex js-toggle-dark-light"
              aria-label="Toggle theme"
            >
              <div className="toggle-mode flex">
                <div className="light">
                  <svg>
                    <use xlinkHref="#i-sun" />
                  </svg>
                </div>
                <span className="dark">
                  <svg>
                    <use xlinkHref="#i-moon" />
                  </svg>
                </span>
              </div>
            </a>
          
            </li>
           </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
