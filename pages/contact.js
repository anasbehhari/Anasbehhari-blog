import Head from "next/head";
const Contact = () => {
  let i = 0;
  let j = 0;
  const handleContact = function (e) {
    if (i == 0) {
      i++;
      e.preventDefault();
      let name = e.target.name.value;
      let email = e.target.email.value;
      let message = e.target.message.value;
      let subject = e.target.subject.value;
      let button = e.target.querySelector("button");
      button.classList.add("bn");
      button.classList.add("spinning");
      let spin = button.querySelector("i");
      let span = button.querySelector("span");
      spin.classList.toggle("hidden");
      span.innerHTML = "";
      if (name && email && message && subject && j < 2) {
        setTimeout(() => {
          fetch("/api/contact?password=" + process.env.password, {
            method: "POST",
            body: JSON.stringify({
              name,
              email,
              message,
              subject,
            }),
          })
            .then((res) => res.json())
            .then((response) => {
              j++;
              button.classList.remove("spinning");
              button.classList.remove("bn");

              if (response.success) {
                spin.classList.toggle("hidden");
                span.innerHTML = "sent !";
                button.classList.add("sucbtn");
                i--;
                setTimeout(() => {
                  button.classList.remove("sucbtn");
                  span.innerHTML = "Subscribe";
                }, 2000);
              }
            })
            .catch((err) => {
              button.classList.remove("bn");
              spin.classList.toggle("hidden");
              button.classList.add("errcbtn");
              button.classList.remove("spinning");
              button.innerHTML = "ooops!";
              i--;
              setTimeout(() => button.classList.remove("errcbtn"), 1500);
            });
        }, 2000);
      }
    }
  };
  return (
    <>
      <Head>
        <title>Anas Behhari | Contact us </title>
      </Head>
      <div className="main">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <article className="single-post">
                <header className="post-header">
                  <h1 className="post-title" style={{ marginTop: "5rem" }}>
                    Contact
                  </h1>
                </header>
                <div className="post-content">
                  <p>
                    Hello! Do you have any question or suggestion about this
                    site, or just want to say Hi? Send me a message using below
                    form. I will get back to you as soon as possible.
                  </p>

                  <form onSubmit={handleContact}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full name"
                      required={true}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required={true}
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required={true}
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      defaultValue={""}
                      required={true}
                    />
                    <button className="btn form-field lop" type="submit">
                      <span>Send Message</span>
                      <i className="fa fa-circle-o-notch fa-spin hidden"></i>
                    </button>
                  </form>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
