

function Contact(){

function handleForm(e){
    e.preventDefault();
    console.log("This is submitted")
    // The goal is to be able to send the data to me through the email. 

    // window.location.href = 'mailto:sherlynea8622@gmail.com'}
    }
    return (
        <>
        <div>
        <h2 className="font-semibold">Contact Me</h2>
        <form action="" id="forminput" onSubmit = {handleForm}>
            <h3 className="labelinput">Leave a Message</h3>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name"/>
            <br />
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" required autoComplete="on" />
            <br />
            <label htmlFor="message" >Leave a Comment</label>
            <textarea name="message" id="message"></textarea>
            <br />
            <button type="submit" className="px-2 py-2">Send</button>
        </form>
    </div>
</>
    )
}

export default Contact; 