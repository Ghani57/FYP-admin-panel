import React from 'react'
import { Button } from '@mui/material'
import './CategStyles.css'

const Agriculture = () => {

  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  return (
    <div className='agriculture'>
      <div className='data__upload'>
        <div className='add__dis__title' >
          Add a Plant
        </div>
        <input type="text" placeholder='English Name' className='text__input' />
        <input type="text" placeholder='Urdu Name' className='text__input' />
        <input type="text" placeholder='Pashto Name' className='text__input' />
        <input type='file' className='file__input' style={{display: 'none'}} ref={hiddenFileInput} />
        <Button
            onClick={handleClick}
            style={{
              backgroundColor: '#FFA500',
              color: '#fff',
              marginTop: 10,
              padding: '10px',
              width: '90%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            >
              Main Image
        </Button>

        <Button
            onClick={handleClick}
            style={{
              backgroundColor: '#FFA500',
              color: '#fff',
              marginTop: 10,
              padding: '10px',
              width: '90%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            >
              Details Image
        </Button>

        <Button
            onClick={handleClick}
            style={{
              backgroundColor: 'green',
              color: '#fff',
              marginTop: 10,
              padding: '10px',
              width: '90%',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            >
              Submit
        </Button>
      </div>

      <div className='agr__details'>

        <div className='add__dis__title'>
          Add  Details
        </div>
      <div className='health__add__data'>
          <input type='text' placeholder='Urdu Text' />
          <input type='text' placeholder='Pashto Text' />
          <Button 
        onClick={handleClick}
        style={{ backgroundColor: '#FFA500', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Image</Button>
        <Button style={{ backgroundColor: '#00FF00', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Agriculture