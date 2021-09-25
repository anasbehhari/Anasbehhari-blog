import StaticFunction from "../utils/StaticFunction";
const subscribe = () => {
  let i = 0;
  const handleSubscription = function (e) {
    if (i == 0) {
      i++;
      e.preventDefault();
      let name = e.target[0].value;
      let email = e.target[1].value;
      let button = e.target.querySelector("button");
      button.classList.toggle("bn");
      button.classList.add("spinning");
      let spin = button.querySelector("i");
      let span = button.querySelector("span");
      spin.classList.toggle("hidden");
      span.innerHTML = "";
      if (StaticFunction.isvalidEmail(email) && name != "") {
        setTimeout(() => {
          fetch("/api/subscriber?password=" + process.env.password, {
            method: "POST",
            body: JSON.stringify({
              name,
              email,
            }),
          })
            .then((res) => res.json())
            .then(function (response) {
              console.log(response);
              button.classList.remove("spinning");
              button.classList.toggle("bn");
              spin.classList.toggle("hidden");
              i--;
              if (response.success) {
                span.innerHTML = "Subscribed";
                button.classList.add("sucbtn");
                setTimeout(() => {
                  button.classList.remove("sucbtn");
                  span.innerHTML = "Subscribe";
                }, 2000);
                return;
              }
              button.classList.add("errcbtn");
              span.innerHTML = "Already Subs";
              setTimeout(() => {
                button.classList.remove("errcbtn");
                span.innerHTML = "Subscribe";
              }, 2000);
            })
            .catch(function (error) {
              button.classList.toggle("bn");
              spin.classList.toggle("hidden");
              button.classList.add("errcbtn");
              button.classList.remove("spinning");
              span.innerHTML = "ooops!";
              i--;
              setTimeout(() => {
                button.classList.remove("errcbtn");
                span.innerHTML = "Subscribe";
              }, 2000);
            });
        }, 2000);
      }
    }
  };
  return (
    <section className="email-subs">
      <div className="container">
        <div className="email-subs-wrap text-center">
          <h2 className="h1 email-subs-section-title">
            Subscribe to newsletter
          </h2>
          <div className="email-subs-section-description">
            Stay up to date! Get all the latest posts delivered straight to your
            inbox.
          </div>
          <div className="form-wrap">
            <form
              onSubmit={handleSubscription}
              className="subscribe-form text-left"
              data-members-form="subscribe"
            >
              <div className="form-field-wrap field-group-inline">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  data-members-name
                  type="text"
                  className="name form-field input-field"
                  id="name"
                  placeholder="Your name"
                  required
                  autoComplete="off"
                />
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  data-members-email
                  type="email"
                  className="email form-field input-field"
                  id="email"
                  placeholder="Your email address"
                  required
                  autoComplete="off"
                />
                <button className="btn form-field lop" type="submit">
                  <span>Subscribe</span>
                  <i className="fa fa-circle-o-notch fa-spin hidden"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default subscribe;
