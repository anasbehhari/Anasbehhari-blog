import StaticFunction from "../../utils/StaticFunction";
import axios from "axios";
const subscribe = () => {
    const handleSubscription = function (e) {
        e.preventDefault();
        let name = e.target[0].value;
        let email = e.target[1].value;
        let button = e.target.querySelector("button");
        button.classList.add("spinning")
        let spin = button.querySelector("i");
        let span = button.querySelector("span");
        spin.classList.toggle("hidden");
        span.innerHTML = ""
        if (StaticFunction.isvalidEmail(email) && name != "") {
            setTimeout(() => {
                axios.post('/api/subscriber', {
                    name,
                    email
                })
                    .then(function (response) {
                        button.classList.remove("spinning")
                        if (response.data.success) {
                            spin.classList.toggle("hidden");
                            span.innerHTML = "Subscribed"
                            button.classList.add("sucbtn")
                            setTimeout(() => {
                                button.classList.remove("sucbtn");
                                span.innerHTML = "Subscribe"
                            }, 2000)
                        }
                        else if (!response.data.success && response.status == 200) {
                            spin.classList.toggle("hidden");

                            button.classList.add("errcbtn")
                            span.innerHTML = "Already Subs"
                            setTimeout(() => {
                                button.classList.remove("errcbtn")
                                span.innerHTML = "Subscribe"

                            }, 2000)
                        }
                    })
                    .catch(function (error) {
                        spin.classList.toggle("hidden");
                        button.classList.add("errcbtn")
                        button.classList.remove("spinning")
                        button.innerHTML = "ooops!"
                        setTimeout(() => button.classList.remove("errcbtn"), 1500)

                    });
            }, 2000)
        }

    }
    return (
        <section className="email-subs">

            <div className="container">
                <div className="email-subs-wrap text-center">
                    <h2 className="h1 email-subs-section-title">Subscribe to newsletter</h2>
                    <div className="email-subs-section-description">
                        Stay up to date! Get all the latest posts delivered straight to
                        your inbox.
                    </div>
                    <div className="form-wrap">
                        <form onSubmit={handleSubscription} className="subscribe-form text-left" data-members-form="subscribe">
                            <div className="form-field-wrap field-group-inline">
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input data-members-name type="text" className="name form-field input-field" id="name" placeholder="Your name" required autoComplete="off" />
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input data-members-email type="email" className="email form-field input-field" id="email" placeholder="Your email address" required autoComplete="off" />
                                <button className="btn form-field lop" type="submit"  >
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
}

export default subscribe;