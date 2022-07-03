import { Avatar, Button } from '@mui/material'
import React, {useState} from 'react'
import ProfilePic from '../Images/avatar.jpg'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Badge from '@mui/material/Badge';

const Profile = () => {

const hiddenFileInput = React.useRef(null);

// const [fullname, setFullName] = useState('')
// const [city, setCity] = useState('')
// const [password, setPassword] = useState('')
// const [phoneNbr, setPhoneNbr] = useState('')


const handleClick = event => {
    hiddenFileInput.current.click();
  };

  return (
    <div>
    <div className='profile__page'>
        <div className='profile__header'> Profile Settings</div>

        <div className='edit__profile'>
            <div className='edit__profile__top'>
                <input type='file' style={{display: 'none'}} ref={hiddenFileInput} />
            <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            badgeContent={
            <EditRoundedIcon 
            onClick={handleClick}
            style={{
                backgroundColor: '#fff',
                borderRadius: 50,
                padding: 4,
                border: '4px solid #fff',
                cursor: 'pointer',
                color: '#000',
                height: 40,
                width: 40
            }}
            />
            }
            >
            <Avatar alt="Profile" src={ProfilePic} sx={{ height: 140, width: 140}} />
            </Badge>
            <div className='edit__profile__name'>UserName</div>
            </div>

            <div className='edit__profile__form'>
                <div className='edit__profile__input'>
                <label className='edit__profile__label'>Full Name</label>
                <input type='text' value="Software Engineer" />
                </div>

                <div className='edit__profile__input'>
                <label className='edit__profile__label'>Email</label>
                <input type='text' value="software@gmail.com" disabled />
                </div>

                <div className='edit__profile__input'>
                <label className='edit__profile__label'>City</label>
                <input type='text' value="Peshawar" />
                </div>

                <div className='edit__profile__input'>
                <label className='edit__profile__label'>Phone Number</label>
                <input type='text' value="036464773676" />
                </div>

                <div className='edit__profile__input'>
                <label className='edit__profile__label'>Password</label>
                <input type='password' value="password" />
                </div>

                <Button
                style={{
                    backgroundColor: '#00FF00',
                    width: '100%',
                    color: '#fff',
                    marginTop: 10
                }}
                >
                    Update 
                </Button>
            </div>

        </div>
    </div>
    </div>
  )
}

export default Profile