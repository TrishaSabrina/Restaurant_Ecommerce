import React, { useEffect } from 'react';

const ContactUs = () => {

    return (

        <div>
            <div className="row mt-5">
                <h1 className="menu text-center" style={{ color: 'purple' }}>Contact Us:</h1>
                <p className="menu" style={{ textAlign: 'center' }}>#Kitchener's Spell</p>
                <p className="menu" style={{ textAlign: 'center' }}>#Phone - +888 .....</p>
                <p className="menu" style={{ textAlign: 'center' }}>#Email -kispell@gmail.com</p>
                <p className="menu" style={{ textAlign: 'center' }}>#Website - https://kitcheners.spell.com</p>
            </div>
            <div className="row mt-5">
                <h1 className="menu text-center" style={{ color: 'purple' }}>Location:</h1>
                <p className="menu" style={{ textAlign: 'center' }}>#Address - Dhanmondi,Dhaka</p>
                <p className="menu" style={{ textAlign: 'center' }}>See the location in the google map -</p>
                <div className='col'>
                <div className='justify-content-center' style={{ width: '30rem', marginLeft: '350px' }}>
                    <iframe
                        title="Google Map"
                        width="700"
                        height="400"
                        loading="lazy"
                        allowFullScreen
                        frameBorder="0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.473708012676!2d90.37216761446645!3d23.746348084588937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72b0a8b675d%3A0x43ecf10fb8768dcf!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1640743585041!5m2!1sen!2sbd"
                    ></iframe>
                </div>
                </div>
            </div>

            <div className='row mt-5'>
                <h1 className='menu text-center' style={{ color: 'purple' }}>Make MemberShip Card here...</h1>

            </div>
            <div className='row mt-5'>
                <form className='justify-content-center' style={{ width: '30rem', marginLeft: '418px', marginBottom: '50px',border: '1px solid #ccc', padding: '20px' }}>
                    <div className="menu form-group">
                        <label><b>Name</b></label>
                        <input type="text" className="form-control" id="Name"
                            placeholder="Name here"
                            name="Name"
                            value=""

                        />
                    </div>

           

                    <div className='menu form-group'>
                     <label><b>Address</b></label>
                     <input type="text" id="address"
                      className='form-control'
                     placeholder='Address here'
                     name="address"
                     value=""/>
                    </div>

                    <div className='menu form-group'>
                    <label><b>Phone</b></label>

                    <input type='number'
                    className='form-control' id="phone" 
                    placeholder='Phone Number' 
                    name="phone"
                    value="" />

                    </div>

                    <div className='menu form-group'>
                     <label><b>Validity Expiration</b></label>
                     <input type="date" id="validity"
                      className='form-control'
                     name="validity"
                     value="date"/>
                    </div>
                    <div className='menu form-group'>
                     <label><b>Your Signature</b></label>
                     <input type="text" id="signature"
                      className='form-control'
                     name="signature"
                     placeholder='Signature here'
                     value=""/>
                    </div>
                   
                   <div className='menu'>
                     <button type="submit" className="btn btn-primary">Submit</button>
                   </div>
                </form>
            </div>

        </div>
    )
}
export default ContactUs;
