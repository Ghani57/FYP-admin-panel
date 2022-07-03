import React from 'react'
import { Button } from '@mui/material'
import './CategStyles.css'

const Ecommerce = () => {

  const hiddenFileInput = React.useRef(null);

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  return (
    <div className='ecommerce'>
      <div className='addnew__item'>
      <div className='add__dis__title' >Add a New Item</div>
        <input type='text' placeholder='New Item Name' className='add__item' />
        <Button style={{backgroundColor: '#00FF00', color: '#fff', marginLeft: 5}}> Add Item</Button>
      </div>

      <div className='data__upload'>
        <div className='add__dis__title' >
          Add Item Details
        </div>
        <input type="text" placeholder='English Name' className='text__input' />
        <input type="text" placeholder='Urdu Name' className='text__input' />
        <input type="text" placeholder='Price' className='text__input' />
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
              Upload Item Image
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
              Price Note Image
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
    </div>
  )
}

export default Ecommerce