import React, { Component } from 'react'
import { useFormControl } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'

export default function Profile({user, modalClose}) {
    const {name, entries, joined} = user;


    return (
        <article className="br3 ba b--black-10 mv4 w-200 w-50-m w-25-l mw6 shadow-5 center bg-white">
            <main className="pa4 black-80">
                <div className="measure">
                    <Avatar width={'60px'} src={require("./testimage.PNG")}/>
                    <h2>{name}</h2>
                    <h3>Images submitted: {entries}</h3>
                    <h3>Member since: {new Date(joined).toLocaleDateString()}</h3>
                    <hr/>
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="text"
                        name="name"
                        id="name"
                        onChange
                        />
                    </div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Age</label>
                        <input
                        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="email"
                        name="email-address"
                        id="email-address"
                        onChange
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Pet</label>
                        <input
                        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                        type="password"
                        name="password"
                        id="password"
                        onChange
                        />
                    </div>
                    </fieldset>
                    <div className='mt4' style={{display:'flex', justifyContent:'space-evenly',}}>  
                        <button className="pointer b pa2 grow hover-white w-40 bg-light-blue b--black-20">
                            Save
                        </button>
                        <button onClick={modalClose} className="pointer b pa2 grow hover-white w-40 bg-light-red b--black-20">
                            Cancel
                        </button>
                    </div>
                </div>
            </main>
            <div onClick={modalClose} style={{fontSize:'3em',fontWeight:'bold',cursor:'pointer'}}>
                    &times;
            </div>
        </article>
    )

}
