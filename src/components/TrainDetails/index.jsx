import {useState} from 'react'

import './index.css'
const TrainDetails = () => {
  const [show,setshow]=useState(false)
  const[oneshow,setoneshow]=useState(false)
  const displayround =()=>{
    return(
      <div class='container'>
      <form id='contactus' action='' method='post'>
        <div className='mother'>
      <button onClick={roundstatus} className='roundbutton'>Round Trip</button>&nbsp;&nbsp;
        <button onClick={onewaystatus} className='onebutton'> One way </button>&nbsp;&nbsp;
        </div>
      <br/>
      
      <h3>Round Trip</h3>
      <lable>Origin</lable>
      <fieldset>
        {' '}
        <input
          placeholder='Enter the place of origin'
          type='text'
          tabindex='1'
          required
          autofocus
        />{' '}
      </fieldset>
      <br/>
      <lable>Destination</lable>
      <fieldset>
        {' '}
        <input
          placeholder='Enter Your Place of Destination'
          type='text'
          tabindex='2'
          required
        />{' '}
      </fieldset>
      <br/>
      <lable>Depature Date</lable>
      <fieldset>
        {' '}
        <input
          placeholder='mm/dd/yyyy'
          type='Date'
          tabindex='2'
          required
        />{' '}
      </fieldset>
      <br/>
      <br/>
    
      <lable>Arrival Date</lable>
      <fieldset>
        {' '}
        <input
          placeholder='mm/dd/yyyy'
          type='Date'
          tabindex='2'
          required
        />{' '}
      </fieldset>
      <br/>
      <lable>Passenger</lable>
      <fieldset>
        {' '}
        <input
          placeholder='Enter no of Passengers'
          type='text'
          tabindex='2'
          required
        />{' '}
      </fieldset>
      <br/>
      <fieldset>
        <lable>Discount Code</lable>&nbsp;&nbsp;
        <input type='radio' name='ra' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <lable> Employee Discount </lable>&nbsp;&nbsp;
        <input type='radio' name='ra' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <lable> Student Discount </lable>&nbsp;&nbsp;
        <input type='radio' name='ra' />
      </fieldset>
      <br/>
      <br/>
      <lable>Discount Code</lable>
      <fieldset>
        {' '}
        <input
          placeholder='Enter your Discount Code'
          type='text'
          tabindex='2'
          required
        />{' '}
      </fieldset>
      <br/>
      <br/>
      <fieldset>
        {' '}
        <button
          name='submit'
          type='submit'
          id='contactus-submit'
          data-submit='...Sending'
        >
          <i id='icon' class=''></i> Search
        </button>{' '}
      </fieldset>
    </form>
  </div>)
  }



const onewaydisplay=()=>{
return(
  <div class='container'>
  <form id='contactus' action='' method='post'>
  <div className='mother'>
      <button onClick={roundstatus} className='roundbutton'>Round Trip</button>&nbsp;&nbsp;
        <button onClick={onewaystatus} className='onebutton'> One way </button>&nbsp;&nbsp;
        </div>
      
      <br/>
    
      <h3>One Way</h3>
      <lable>Origin</lable>
      <fieldset>
        {' '}
        <input
          placeholder='Enter the place of origin'
          type='text'
          tabindex='1'
          required
          autofocus
        />{' '}
      </fieldset>
      <br/>
      <lable>Destination</lable>
      <fieldset>
        {' '}
        <input
          placeholder='Enter Your Place of Destination'
          type='text'
          tabindex='2'
          required
        />{' '}
      </fieldset>
      <br/>
      <lable>Depature Date</lable>
      <fieldset>
        {' '}
        <input
          placeholder='mm/dd/yyyy'
          type='Date'
          tabindex='2'
          required
        />{' '}
      </fieldset>
      <br/>
      <br/>
          <lable>Passenger</lable>
      <fieldset>
        {' '}
        <input
          placeholder='Enter no of Passengers'
          type='text'
          tabindex='2'
          required
        />{' '}
      </fieldset>
      <br/>
      <fieldset>
        <lable>Discount Code</lable>&nbsp;&nbsp;
        <input type='radio' name='ra' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <lable> Employee Discount </lable>&nbsp;&nbsp;
        <input type='radio' name='ra' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <lable> Student Discount </lable>&nbsp;&nbsp;
        <input type='radio' name='ra' />
      </fieldset>
      <br/>
      <br/>
      <lable>Discount Code</lable>
      <fieldset>
        {' '}
        <input
          placeholder='Enter your Discount Code'
          type='text'
          tabindex='2'
          required
        />{' '}
      </fieldset>
      <br/>
      <br/>
      <fieldset>
        {' '}
        <button
          name='submit'
          type='submit'
          id='contactus-submit'
          data-submit='...Sending'
        >
          <i id='icon' class=''></i> Search
        </button>{' '}
      </fieldset>
    </form>
  </div>)


  }
  const roundstatus=()=>{
    setshow(false)
    setoneshow(false)
  }

  const onewaystatus=()=>{
    setoneshow(true)
    setshow(true)

  }

  return (
    <div >
    <form >
  
    
       
      
      {!show&& displayround()}
      {oneshow&&  onewaydisplay()}
      </form>
  </div>



  )
}

export default TrainDetails
