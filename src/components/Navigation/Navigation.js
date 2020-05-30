import React from 'react';
import ProfileIcon from '../Profile/ProfileIcon'
import Modal from '@material-ui/core/Modal'
import Profile from '../Profile/Profile'

const Navigation = ({ onRouteChange, isSignedIn, user }) => {
  const [open, setOpen] = React.useState(false);

  const handleModalOpen = () => {
    setOpen(true);
  }

  const handleModalClose = () => {
    setOpen(false)
  }
  
  if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <ProfileIcon clickProfile = {handleModalOpen} clickLogout={()=>onRouteChange('signout')}/>
          <Modal
            open={open}
          >
            <Profile user={user} modalClose={handleModalClose}/>
          </Modal>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
          <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
        </nav>
      );
    }
}

export default Navigation;