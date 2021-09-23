import StaticFunction from "../utils/StaticFunction";
import axios from "axios";
const subscribe = () => {
    const handleWord = function (e) {
        e.preventDefault();
        let Word = e.target[0].value;
        let button = e.target.querySelector("button");
        button.classList.add("spinning")
        let spin = button.querySelector("i");
        let span = button.querySelector("span");
        spin.classList.toggle("hidden");
        span.innerHTML = ""
        if (Word!= "") {
            setTimeout(() => {
                axios.post('/api/word', {
                    Word
                })
                    .then(function (response) {
                        button.classList.remove("spinning")
                        if (response.data.success) {
                            spin.classList.toggle("hidden");
                            span.innerHTML = "Words Sent !"
                            e.target[0].value=""
                            button.classList.add("sucbtn")
                            setTimeout(() => {
                                button.classList.remove("sucbtn");
                                span.innerHTML = "Send now"
                            }, 2000)
                        }
                        else if (!response.data.success && response.status == 200) {
                            spin.classList.toggle("hidden");
                            button.classList.add("errcbtn")
                            span.innerHTML = "try again !"
                            setTimeout(() => {
                                button.classList.remove("errcbtn")
                                span.innerHTML = "send now"
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
        <form onSubmit={handleWord}  className="members-form cover-subscribe-form text-left" data-members-form="subscribe">
        <div className="form-field-wrap field-group-inline">
            <label htmlFor="header-form-words" className="sr-only">words</label>
            <input data-members-words type="text" className="words form-field input-field" id="header-form-words" placeholder="Anything you wanna say ?" required autoComplete="off" />
            <button className="btn form-field" type="submit">
                <span>Send now</span>
                <i className="fa fa-circle-o-notch fa-spin hidden"></i>
            </button>
        </div>
    </form>
    );
}

export default subscribe;