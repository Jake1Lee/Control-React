import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function Contact() {

  return (
    <>
<div className="center m-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
         
              <div className="row">
                <div className="col-md-9 col-lg-7">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Tell us your problem</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                   
                    <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-control" name="FName" id="fname" placeholder="First Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input type="text" className="form-control" name="LName" id="lname" placeholder="Last Name" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="text" className="form-control" name="Email" id="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="text" className="form-control" name="Subject" id="subject" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea name="message" className="form-control" id="Message" cols="30" rows="3" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="submit" value="Submit" className="btn btn-primary" />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}
