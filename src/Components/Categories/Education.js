import * as React  from 'react';
import {Button} from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './CategStyles.css'

const Education = () => {

  const [subject, setSubject] = React.useState('ABC');
  const hiddenFileInput = React.useRef(null);

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handleClick = event => {
    hiddenFileInput.current.click();
  };

  const funct = () => {
    return (
      <div>
      {
        subject === 'ABC' ? (<div className='edu__main'>
        <div className='topic__document'>
          <div className='topic__name'>
            Topic Name (e.g. A,B,C,D.....)
          </div>
          <input type='text' className='text__input' placeholder='Topic Name' />
          <input type='file' className='file__input' style={{display: 'none'}} ref={hiddenFileInput} />
          <Button
          onClick={handleClick}
          style={{
            backgroundColor: '#FFA500',
            color: '#fff',
            width: '90%',
            marginTop: 10,
            padding: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          >
            Topic Image
          </Button>
        </div>

  <div className='topic__lesson__collection'>
   <div className='topic__name'>
            Topic Details
          </div>
          <input type='text' className='text__input' placeholder='Text' />
          <input type='file' className='file__input' style={{display: 'none'}} ref={hiddenFileInput} />
          <Button
          onClick={handleClick}
          style={{
            backgroundColor: '#FFA500',
            color: '#fff',
            width: '90%',
            marginTop: 10,
            padding: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          >
            Upload Image
          </Button>

          <Button
          onClick={handleClick}
          style={{
            backgroundColor: '#FFA500',
            color: '#fff',
            width: '90%',
            marginTop: 10,
            padding: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          >
            Upload Video
          </Button>
 </div>
      </div>) : (<div className='edu__main'>
          <div className='topic__document'>
            <div className='topic__name'>
              Topic Name (e.g. 1,2,3,4....)
            </div>
            <input type='text' className='text__input' placeholder='Topic Name' />
            <input type='file' className='file__input' style={{display: 'none'}} ref={hiddenFileInput} />
            <Button
            onClick={handleClick}
            style={{
              backgroundColor: '#FFA500',
              color: '#fff',
              width: '90%',
              marginTop: 10,
              padding: '10px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            >
              Topic Image
            </Button>
          </div>

    <div className='topic__lesson__collection'>
     <div className='topic__name'>
              Topic Details
            </div>
            <input type='text' className='text__input' placeholder='Text' />
            <input type='file' className='file__input' style={{display: 'none'}} ref={hiddenFileInput} />
            <Button
            onClick={handleClick}
            style={{
              backgroundColor: '#FFA500',
              color: '#fff',
              width: '90%',
              marginTop: 10,
              padding: '10px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            >
              Upload Image
            </Button>

            <Button
            onClick={handleClick}
            style={{
              backgroundColor: '#FFA500',
              color: '#fff',
              width: '90%',
              marginTop: 10,
              padding: '10px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
            >
              Upload Video
            </Button>
   </div>
        </div>)
      }
      <Button style={{
        width: '100%',
        backgroundColor: '#00FF00',
        marginTop: 30,
        color: '#fff'
      }}>
        Submit DATA
      </Button>
      </div>
    )
  }


  return (
    <div className='education'>
      <h2>Select a Subject </h2>
      
      <FormControl style={{width: '40%', marginTop: 10}} >
        <InputLabel id="demo-simple-select-label">Select Subject</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={subject}
          label="Subject"
          onChange={handleChange}
          style={{
            backgroundColor: '#fff',
            color: 'blue'
          }}
        >
          <MenuItem value='ABC'>ABC</MenuItem>
          <MenuItem value='123'>123</MenuItem>
        </Select>
      </FormControl>

      {funct()}

    </div>
  )
}

export default Education