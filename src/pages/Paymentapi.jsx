{/*import {useState, useEffect} from 'react'
import Payment from './Payment'
import { useParams } from "react-router-dom";

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
const Paymentapi = () => {
  const { ticketPrice } = useParams();
  const [apiDetails, setApiDetails] = useState({
    apiStatus: apiStatusConstants.initial,
    responseData: null,
    errorMsg: null,
  })
  useEffect(() => {
    const gettingViedos = async () => {
      setApiDetails({
        apiStatus: apiStatusConstants.inProgress,
        responseData: null,
        errorMsg: null,
      })

      const Apiurl = `http://localhost:8080/taxation?price=${ticketPrice}`

      const options ={
        method:'POST'
      }

      const response = await fetch(Apiurl, options)
      const fetcheddata = await response.json()
      const data = fetcheddata
      if (response.ok) {
       
        setApiDetails(prevApiDetails => ({
          ...prevApiDetails,
          apiStatus: apiStatusConstants.success,
          responseData: data,
        }))
      } else {
        setApiDetails(prevApiDetails => ({
          ...prevApiDetails,
          apiStatus: apiStatusConstants.failure,
          errorMsg: fetcheddata.message,
        }))
      }
    }
    gettingViedos()
  }, [ticketPrice])
  const successView = () => {
    const {responseData} = apiDetails
    return <Payment Paymentdata={responseData} tic={ticketPrice}/>
  }
  const failureView = () => {
    return (
      <div>

        <p>Error</p>
      </div>
    )
  }
  const renderLoadingView = () => (
    <div data-testid='loader'>
      {/* <Loader type='Rings' color='#ffffff' height={80} width={80} /> */}
  {/*}  <p>loading the class</p>
    </div>
  )
  const renderView = () => {
    // const {apiStatus} = apiDetails
    switch (apiDetails.apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return successView()
      case apiStatusConstants.failure:
        return failureView()
      default:
        return null
    }
  }
  return <div>{renderView()}</div>
}
export default Paymentapi

*/}



import {useState, useEffect} from 'react'
import Payment from './Payment'
import { useParams } from 'react-router-dom'



const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
const Paymentapi = () => {
  const {ticketPrice,cabinType,to,from,trainName}=useParams()
  const [apiDetails, setApiDetails] = useState({
    apiStatus: apiStatusConstants.initial,
    responseData: null,
    errorMsg: null,
  })
  useEffect(() => {
    const gettingViedos = async () => {
      setApiDetails({
        apiStatus: apiStatusConstants.inProgress,
        responseData: null,
        errorMsg: null,
      })
      
      const Apiurl =`http://localhost:8080/taxation?price=${ticketPrice}`
      const options ={
        method:'POST'
      }
      const response = await fetch(Apiurl,options)
      const fetcheddata = await response.json()
      const data = fetcheddata
      if (response.ok) {
       
        setApiDetails(prevApiDetails => ({
          ...prevApiDetails,
          apiStatus: apiStatusConstants.success,
          responseData: data,
        }))
      } else {
        setApiDetails(prevApiDetails => ({
          ...prevApiDetails,
          apiStatus: apiStatusConstants.failure,
          errorMsg: fetcheddata.message,
        }))
      }
    }
    gettingViedos()
  }, [ticketPrice])

  console.log(ticketPrice)
  const successView = () => {
    const {responseData} = apiDetails
    return <Payment Paymentdata={responseData} tic={ticketPrice} cabin={cabinType} to={to} from={from} train={trainName}/>
  }
  const failureView = () => {
    return (
      <div>
        
        <p>Error</p>
      </div>
    )
  }
  const renderLoadingView = () => (
    <div>
    {/*  <Loader type='Rings' color='#ffffff' height={80} width={80} /> */}
    <p>Loading the Loader</p>
    </div> 
  )
  const renderView = () => {
    // const {apiStatus} = apiDetails
    switch (apiDetails.apiStatus) {
      case apiStatusConstants.inProgress:
        return renderLoadingView()
      case apiStatusConstants.success:
        return successView()
      case apiStatusConstants.failure:
        return failureView()
      default:
        return null
    }
  }
  return <div>{renderView()}</div>
}
export default Paymentapi