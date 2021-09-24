import axios from "axios";
const subscribe = () => {
  let i = 0;
  const handleWord = function (e) {
    if (i == 0) {
      i++;
      e.preventDefault();
      let Word = e.target[0].value;
      let button = e.target.querySelector("button");
      button.classList.toggle("bn");
      button.classList.add("spinning");
      let spin = button.querySelector("i");
      let span = button.querySelector("span");
      spin.classList.toggle("hidden");
      span.innerHTML = "";
      if (Word != "") {
        setTimeout(() => {
          axios
            .post("/api/word?password=" + process.env.password, {
              Word,
            })
            .then(function (response) {
              button.classList.remove("spinning");
              button.classList.toggle("bn");

              if (response.data.success) {
                spin.classList.toggle("hidden");
                span.innerHTML = "Words Sent !";
                i--;
                e.target[0].value = "";
                button.classList.add("sucbtn");
                setTimeout(() => {
                  button.classList.remove("sucbtn");
                  span.innerHTML = "Send now";
                }, 2000);
              } else if (!response.data.success && response.status == 200) {
                spin.classList.toggle("hidden");
                button.classList.add("errcbtn");
                span.innerHTML = "try again !";
                i--;

                setTimeout(() => {
                  button.classList.remove("errcbtn");
                  span.innerHTML = "send now";
                }, 2000);
              }
            })
            .catch(function (error) {
              button.classList.toggle("bn");
              spin.classList.toggle("hidden");
              button.classList.add("errcbtn");
              button.classList.remove("spinning");
              i--;

              button.innerHTML = "ooops!";
              setTimeout(() => button.classList.remove("errcbtn"), 1500);
            });
        }, 2000);
      }
    }
  };
  return (
    <form
      onSubmit={handleWord}
      className="members-form cover-subscribe-form text-left"
      data-members-form="subscribe"
    >
      <div className="form-field-wrap field-group-inline">
        <label htmlFor="header-form-words" className="sr-only">
          words
        </label>
        <input
          data-members-words
          type="text"
          className="words form-field input-field"
          id="header-form-words"
          placeholder="Anything you wanna say ?"
          required
          autoComplete="off"
        />
        <button className="btn form-field" type="submit">
          <span>Send now</span>
          <i className="fa fa-circle-o-notch fa-spin hidden"></i>
        </button>
      </div>
    </form>
  );
};

export default subscribe;
