
function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle fz-38">Save time, save money!</h1>
        <span className="mailDesc fz-16">Sign up and we'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList