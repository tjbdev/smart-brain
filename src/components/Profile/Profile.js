import React from 'react'
import Avatar from '@material-ui/core/Avatar'

export default function Profile({user, modalClose, loadUser}) {
    const {name, entries, joined, age, pet} = user;

    const [sName, setSName] = React.useState(name);
    const [sAge, setSAge] = React.useState(age);
    const [sPet, setSPet] = React.useState(pet);

    const handleClickSave = () =>{
        fetch('http://localhost:3000/profile/'+user.id, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body:JSON.stringify({
                name: sName,
                age: sAge,
                pet: sPet
            })
        }).catch(console.log);
        loadUser({
            ...user,
            name: sName,
            age:sAge,
            pet:sPet
        });
        modalClose();
    }

    return (
        <article className="br3 ba b--black-10 mv4 w-200 w-50-m w-25-l mw6 shadow-5 center bg-white">
            <main className="pa4 black-80">
                <div className="measure">
                    <Avatar width={'60px'} src={require("./testimage.PNG")}/>
                    <h2>{sName}</h2>
                    <h3>Images submitted: {entries}</h3>
                    <h3>Member since: {new Date(joined).toLocaleDateString()}</h3>
                    <hr/>
                    <fieldset id="update_profile" className="ba b--transparent ph0 mh0">
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            placeholder={sName}
                            type="text"
                            name="name"
                            id="name"
                            onChange={(event) =>{setSName(event.target.value)}}
                            />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Age</label>
                            <input
                            placeholder={sAge}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="text"
                            name="age"
                            id="age"
                            onChange={(event)=>{setSAge(event.target.value)}}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Pet</label>
                            <input
                            placeholder={sPet}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                            type="text"
                            name="pet"
                            id="pet"
                            onChange={(event)=>{setSPet(event.target.value)}}
                            />
                        </div>
                    </fieldset>
                    <div className='mt4' style={{display:'flex', justifyContent:'space-evenly',}}>  
                        <button className="pointer b pa2 grow hover-white w-40 bg-light-blue b--black-20"
                        onClick={handleClickSave}>
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
