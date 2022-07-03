import { Button } from '@mui/material'
import React, { useState } from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import './CategStyles.css'

const Health = () => {

  const hiddenFileInput = React.useRef(null);
  const [details, setDetails] = useState(false)
  const [Treatment, setTreatment] = useState(false)
  const [symptoms, setSymptoms] = useState(false)

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  return (
    <div className='health'>

        <div className='data__upload'
        style={{
          width:'45%'
        }}
        >
        <div className='add__dis__title'>Add a New Disease</div>
        <input type='text' placeholder='Disease Name' className='text__input' />
        <input type='file' className='file__input' style={{display: 'none'}} ref={hiddenFileInput} />
        <Button 
        onClick={handleClick}
        style={{ backgroundColor: '#FFA500', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Main Image</Button> 
        
        <Button 
        onClick={handleClick}
        style={{ backgroundColor: '#FFA500', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}}>Details Image</Button>
        
        <Button 
        onClick={handleClick}
        style={{ backgroundColor: '#FFA500', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Treatment Image</Button>
        
        <Button 
        onClick={handleClick}
        style={{ backgroundColor: '#FFA500', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Symptoms Image</Button>
        
        <Button
         style={{ backgroundColor: '#00FF00', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Add Disease</Button>
      </div>

      <div className='fetch__diseases'>

        <div className='add__dis__title'>
          Choose a disease to add some data
        </div>
        <div>
        <select className='select__dis'>
          <option>Fever</option>
          <option>Flu</option>
          <option>Stomach ache</option>
          <option>Headache</option>
        </select>
        </div>


        <div className='add__btn__wrapper'><div className='add__d'>Add Details</div>
        {
          !details ? <AddCircleIcon style={{color: '#fff', marginLeft: 5, cursor: 'pointer'}} onClick={() => setDetails(true)} /> :
          <RemoveCircleIcon style={{color: '#ff0000', marginLeft: 5, cursor: 'pointer'}} onClick={() => setDetails(false)} />
        }
        
        </div>
        {
          details ? (
        <div className='health__add__data'>
          <input type='text' placeholder='Name of the cause' />
          <input type='text' placeholder='Details in English' />
          <input type='text' placeholder='Details in Urdu' />
          <Button 
        onClick={handleClick}
        style={{ backgroundColor: '#FFA500', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Details Image</Button>

        <Button style={{ backgroundColor: '#00FF00', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Submit</Button>
        </div>) : ''
        }
        
        <div className='add__btn__wrapper'><div className='add__d'>Add Symptoms</div>
        {
          !symptoms ? <AddCircleIcon style={{color: '#fff', marginLeft: 5, cursor: 'pointer'}} onClick={() => setSymptoms(true)} /> :
          <RemoveCircleIcon style={{color: '#ff0000', marginLeft: 5, cursor: 'pointer'}} onClick={() => setSymptoms(false)} />
        }
        </div>

        {
          symptoms ? (
        <div className='health__add__data'>
          <input type='text' placeholder='Text' />
          <input type='text' placeholder='Details in English' />
          <input type='text' placeholder='Details in Urdu' />
          <Button 
        onClick={handleClick}
        style={{ backgroundColor: '#FFA500', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Symptoms Image</Button>

<Button style={{ backgroundColor: '#00FF00', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Submit</Button>
        </div>) : ''
        }

        <div className='add__btn__wrapper'><div className='add__d'>Add Treatment</div>
        {
          !Treatment ? <AddCircleIcon style={{color: '#fff', marginLeft: 5, cursor: 'pointer'}} onClick={() => setTreatment(true)} /> :
          <RemoveCircleIcon style={{color: '#ff0000', marginLeft: 5, cursor: 'pointer'}} onClick={() => setTreatment(false)} />
        }
        </div>
        {
          Treatment ? (
        <div className='health__add__data'>
          <input type='text' placeholder='Text' />
          <input type='text' placeholder='Details in English' />
          <input type='text' placeholder='Details in Urdu' />
          <Button 
        onClick={handleClick}
        style={{ backgroundColor: '#FFA500', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Treatment Image</Button>
        <Button style={{ backgroundColor: '#00FF00', color: '#fff', marginTop: 10, padding: '10px', width: '90%', marginLeft: 'auto', marginRight: 'auto'}} >Submit</Button>
        </div>) : ''
        }
      </div>
      
    </div>
  )
}

export default Health