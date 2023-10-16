"use client"

import React, {useState} from "react";

const MailchimpForm: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div id="mc_embed_shell">
            <div id="mc_embed_signup">
                <form action="https://camban.us21.list-manage.com/subscribe/post?u=80f0c83ad0a5d3fee30bec9c6&amp;id=459d9a0f3c&amp;f_id=00fbe6e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_self" noValidate={true}>
                    <div id="mc_embed_signup_scroll">
                        <div className="mc-field-group">
                            <input 
                                className="text block w-[100%] md:w-[400px] max-w-[100%] mx-auto border border-primary px-4 py-3 mb-3"
                                id="mce-FNAME"
                                name="FNAME"
                                onChange={e => setFirstName(e.target.value)}
                                placeholder="First name"
                                type="text"
                                value={firstName}
                            />
                        </div>
                        <div className="mc-field-group">
                            <input
                                className="text block w-[100%] md:w-[400px] max-w-[100%] mx-auto border border-primary px-4 py-3 mb-3"
                                id="mce-LNAME"
                                name="LNAME"
                                onChange={e => setLastName(e.target.value)}
                                placeholder="Last name"
                                type="text"
                                value={lastName}
                            />
                        </div>
                        <div className="mc-field-group">
                            <input
                                className="required email block w-[100%] md:w-[400px] max-w-[100%] mx-auto border border-primary px-4 py-3 mb-3"
                                id="mce-EMAIL"
                                name="EMAIL"
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Email"
                                required={true}
                                type="email"
                                value={email}
                            />
                        </div>
                        <div id="mce-responses" className="clear foot">
                            <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                            <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                        </div>
                        <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
                            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                            <input type="text" name="b_80f0c83ad0a5d3fee30bec9c6_459d9a0f3c" tabIndex={-1} readOnly />
                        </div>
                        <div className="optionalParent">
                            <div className="clear foot">
                                <input 
                                    className="button block w-[400px] max-w-[100%] text-black font-medium bg-gradient-to-b from-yellow-400 to-secondary hover:bg-gradient-to-t px-8 py-3 text-center mt-6 mx-auto cursor-pointer"
                                    id="mc-embedded-subscribe"
                                    name="subscribe"
                                    type="submit"
                                    value="Subscribe"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MailchimpForm;