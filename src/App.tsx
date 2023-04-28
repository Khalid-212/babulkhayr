import "./App.css";
import logo from "./assets/logo.png";

function App() {
  const refgenerator = () => {
    const ref = "negade-tx-" + Math.random().toString(36).substring(7);
    return ref;
  }
  // console.log(refgenerator());
  return (
    <>
      <div className="header">
        <div className="header_Left">
          <div className="logo">
            {/* <h1>BH</h1> */}
            <img className="logo_img" src={logo} alt="logo" />
          </div>
        </div>
        <div className="header_Right">
          <div className="nav">Home</div>
          <div className="nav">About</div>
          <div className="nav">Contact</div>
        </div>
      </div>
      <div className="banner">
        <div className="bannerText">Your Donations Can Save Many Lives</div>
      </div>
      <div id="form" className="form">
        <h3>
        Donation form
        </h3>
        <div className="fields">
          <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
            <input
              type="hidden"
              name="public_key"
              value="CHAPUBK_TEST-cnZ1kYeKYPtxPvHzrP0iZPjdnvmqO3Bg"
            />
            <input type="hidden" name="tx_ref" value={refgenerator()} />
            <input type="hidden" name="currency" value="ETB" />
            <input type="hidden" name="email" value="khalid.ibr212@gmail.com" />
            <div className="flex">
            <span>First name</span>
            <input required placeholder="First Name" type="text" name="first_name" />
            </div>
            <div className="flex">
            <span>Last name</span>
            <input placeholder="Last Name" required type="text" name="last_name" />
            </div>
            <div className="flex last">
              <span>Amount</span>

            <input required placeholder="enter Amount here" type="number" name="amount" />
            </div>
            <input type="hidden" name="title" value="Let us do this" />
            <input
              type="hidden"
              name="description"
              value="Paying with Confidence with cha"
            />
            <input
              type="hidden"
              name="logo"
              value="https://yourcompany.com/logo.png"
            />
            <input
              type="hidden"
              name="callback_url"
              value="http://localhost:5173/"
            />
            <input
              type="hidden"
              name="return_url"
              value="http://localhost:5173/"
            />
            <input type="hidden" name="meta[title]" value="test" />
            <button type="submit">Donate Now</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
