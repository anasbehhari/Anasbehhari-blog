import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import '../styles/screen.minf18e.css'

function MyApp({ Component,pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0 shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.gstatic.com/" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <meta name="description" content="An Front-End web developer From Morocco 🇲🇦 and I love billards 🎱 & snooker . On this site I write about my learning and experience." />
        <link rel="canonical" href="index.html" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta property="og:site_name" content="Behhari's Blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Anas Behhari" />
        <meta property="og:description" content="An Front-End web developer From Morocco 🇲🇦 and I love billards 🎱 & snooker . On this site I write about my learning and experience." />
        <meta property="og:url" content="https://instagram.com/anas_behhari" />
        <meta property="og:image" content="/assets/images/back-images-ass-20021.png" />
        <meta property="article:publisher" content="https://www.facebook.com/profile.php?id=100003805688276" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anas Behhari" />
        <meta name="twitter:description" content="An Front-End web developer From Morocco 🇲🇦 and I love billards 🎱 & snooker . On this site I write about my learning and experience." />
        <meta name="twitter:url" content="https://twitter.com/Anas21358753" />
        <meta name="twitter:image" content="/assets/images/back-images-ass-20021.png" />
        <meta name="twitter:site" content="@Anas21358753" />
        <meta property="og:image:width" content={1200} />
        <meta property="og:image:height" content={627} />
      </Head>
      <div className="site-wrap">
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="global-icons" style={{ display: 'none' }}>
          <symbol id="i-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19.083 17.196l4.526 4.528A1.332 1.332 0 0122.667 24a1.33 1.33 0 01-.943-.39l-4.528-4.527a10.602 10.602 0 01-6.53 2.25C4.787 21.333 0 16.548 0 10.667 0 4.785 4.785 0 10.667 0c5.881 0 10.666 4.785 10.666 10.667 0 2.461-.846 4.724-2.25 6.529zm-8.416-14.53c-4.412 0-8 3.589-8 8 0 4.413 3.588 8 8 8s8-3.587 8-8c0-4.411-3.588-8-8-8z" />
          </symbol>
          <symbol id="i-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M9.036 7.976a.75.75 0 00-1.06 1.06L10.939 12l-2.963 2.963a.75.75 0 101.06 1.06L12 13.06l2.963 2.964a.75.75 0 001.061-1.06L13.061 12l2.963-2.964a.75.75 0 10-1.06-1.06L12 10.939 9.036 7.976z">
            </path>
            <path fillRule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z">
            </path>
          </symbol>
          <symbol id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g data-name="Layer 2">
              <g data-name="person">
                <rect opacity={0} />
                <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
                <path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" />
              </g>
            </g>
          </symbol>
          <symbol id="i-moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.228 23.999l.114.001a12.31 12.31 0 008.762-3.624 12.269 12.269 0 002.803-4.315 1.2 1.2 0 00-1.531-1.557c-3.678 1.339-7.836.426-10.593-2.326a10.078 10.078 0 01-2.33-10.564A1.2 1.2 0 007.899.08a12.271 12.271 0 00-4.792 3.292c-4.24 4.722-4.103 12.278.31 16.843A12.311 12.311 0 0012.227 24zM4.892 4.975a9.882 9.882 0 011.65-1.474c-.475 3.772.797 7.633 3.544 10.376 2.75 2.743 6.62 4.008 10.394 3.538-.32.448-.678.87-1.071 1.262A9.932 9.932 0 0112.34 21.6l-.092-.001a9.928 9.928 0 01-7.109-3.053C1.585 14.868 1.473 8.78 4.892 4.975z" />
          </symbol>
          <symbol id="i-sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M10.8 1.2v2.4a1.2 1.2 0 102.4 0V1.2a1.2 1.2 0 10-2.4 0zM18.876 7.028a1.195 1.195 0 01-1.697-.03 1.2 1.2 0 01.029-1.696l1.727-1.668a1.202 1.202 0 011.668 1.728l-1.727 1.666zM12 16.8c2.647 0 4.8-2.153 4.8-4.8S14.647 7.2 12 7.2A4.805 4.805 0 007.2 12c0 2.647 2.153 4.8 4.8 4.8zM5.124 16.972l-1.727 1.666a1.2 1.2 0 001.668 1.728l1.727-1.668a1.2 1.2 0 00-1.668-1.726zM17.18 17.002c.46-.477 1.22-.49 1.696-.03l1.727 1.666a1.2 1.2 0 01-1.668 1.728l-1.727-1.668a1.2 1.2 0 01-.029-1.696zM12 19.2a1.2 1.2 0 00-1.2 1.2v2.4a1.2 1.2 0 102.4 0v-2.4a1.2 1.2 0 00-1.2-1.2zM5.065 3.634a1.2 1.2 0 00-1.668 1.728l1.727 1.666a1.195 1.195 0 001.697-.03 1.2 1.2 0 00-.029-1.696L5.065 3.634zM3.6 10.8a1.2 1.2 0 110 2.4H1.2a1.2 1.2 0 110-2.4h2.4zM22.8 10.8h-2.4a1.2 1.2 0 100 2.4h2.4a1.2 1.2 0 100-2.4z" />
          </symbol>
          <symbol id="i-twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
            </path>
          </symbol>
          <symbol id="i-star" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
          </symbol>
        </svg>
        <Header />
        <>
          <Component {...pageProps} />
        </>
        <Footer />
      </div>
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
                <a href="tag/inspiration/index.html" style={{ background: '#9d6805' }}>Inspiration</a>
                <a href="tag/lifestyle/index.html">Lifestyle</a>
                <a href="tag/nature/index.html">Nature</a>
                <a href="tag/health/index.html">Health</a>
                <a href="tag/travel/index.html" style={{ background: '#e10689' }}>Travel</a>
                <a href="tag/food/index.html" style={{ background: '#b43adf' }}>Food</a>
                <a href="tag/technology/index.html" style={{ background: '#2d841f' }}>Technology</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="/assets/js/app.js"></script>
      <script src="/assets/js/app.bundle.minf18e.js"></script>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js" ></script>
    </>
  )
}

export default MyApp
