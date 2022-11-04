import Footer from "./Footer";
import "./Styles/Contact.css"

const Contact = () => {
    return ( 
        <div className="contact">
            <div className="contactHeader">
                <h1>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form action="" className="contactForm">
                <div className="firstName">
                    <label for="first_name">First name</label>
                    <input type="text" id="first_name" name="first_name" placeholder="Enter your first name"/>
                </div>
                <div className="lastName">
                    <label for="last_name">Last name</label>
                    <input type="text" id="last_name" name="last_name" placeholder="Enter your last name"/>
                </div>
                <div className="email">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="yourname@email.com"/>
                </div>
                <div className="message">
                    <label for="message">Message</label>
                    <textarea type="text" id="message" name="message" placeholder="Send me a message and I'll reply you as soon as possible..."></textarea> 
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="checkbox" name="checkbox" value="You agree to providing your data to {name} who may contact you."/>
                    <label for="checkbox">You agree to providing your data to name who may contact you.</label>
                </div>
                <div className="submit">
                    <input type="submit" id="btn__submit" name="submit" value="Send Message"/>
                </div>
            </form>
            <div className="contactFooter">
                <Footer />
            </div>
        </div>
     );
}
 
export default Contact;