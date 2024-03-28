import React from "react";

function Contact() {
	return (
		<section className="contact" id="contact">
			<h2 className="heading">
				Contact <span>Me</span>
			</h2>

			<form>
				<div className="input-group">
					<div className="input-box">
						<input type="text" placeholder="Full Name"></input>
						<input type="email" placeholder="Email"></input>
					</div>

					<div className="input-box">
						<input type="number" placeholder="Phone Number"></input>
						<input type="text" placeholder="Subject"></input>
					</div>
				</div>

				<div className="input-group-2">
					<textarea
						name=""
						id=""
						cols={30}
						rows={10}
						placeholder="Your Message"
					></textarea>
					<input type="submit" value="Send Message" className="btn"/>
				</div>
			</form>
		</section>
	);
}

export default Contact;
