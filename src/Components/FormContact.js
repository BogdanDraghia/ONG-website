import React from "react"
import "../Style/form.scss"

const Form = () => {
  return (
    <div className="ContainerC2">
      <div className="ContactTitleBox">
        <h2>Contact me</h2>
        <h3>For More Enquiries Please Fill Out This Form:</h3>
      </div>
      <div className="ContactInfo">
        <div className="ContactInfo-Item">
          <div className="ContactInfoIcon"></div>
          <div className="ContactInfoTittle">Locatie</div>
          <div className="ContactInfoData">
            Braila, Str Mihai Bravu, nr.172,Ap.2
          </div>
        </div>
        <div className="ContactInfo-Item">
          <div className="ContactInfoIcon"></div>
          <div className="ContactInfoTittle">Numar telefon</div>
          <div className="ContactInfoData">0741358280</div>
        </div>
        <div className="ContactInfo-Item">
          <div className="ContactInfoIcon"></div>
          <div className="ContactInfoTittle">Telefon birou/fix</div>
          <div className="ContactInfoData">0339109197</div>
        </div>
        <div className="ContactInfo-Item">
          <div className="ContactInfoIcon"></div>
          <div className="ContactInfoTittle">Adresa email</div>
          <div className="ContactInfoData">club_voltin@yahoo.com</div>
        </div>
      </div>
      <div className="ContactBox">
        <div className="ContactBoxForm">
          <div className="FormBox">
            <div className="formFlex">
              <form
                className="formm"
                action="https://formspree.io/f/mwkwbqdy"
                method="post"
              >
                <div className="form-group first">
                  <label htmlFor="fname">Your Full Name : </label>
                  <input
                    type="text"
                    id="fname"
                    name="Name"
                    placeholder="Your First name"
                    required
                  />
                </div>
                <div className="form-group second">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="text"
                    id="Email"
                    name="Email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group first">
                  <label htmlFor="Country">Country</label>
                  <input
                    type="text"
                    id="Country"
                    name="Country"
                    placeholder="From where you are from"
                  />
                </div>
                <div className="form-group second">
                  <label htmlFor="Subject">Subject</label>
                  <input
                    type="text"
                    id="Subject"
                    name="Subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group textareaa2">
                  <label htmlFor="subjectext">Your message</label>
                  <textarea
                    id="subjectext"
                    name="Message"
                    placeholder="Write something.."
                    required
                  ></textarea>
                </div>
                <input type="submit" class="Button1" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
