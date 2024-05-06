import {useState, useEffect} from 'react'
import Profile from './Profile'
import { useParams } from 'react-router-dom'



const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
const Profileapi = () => {
 
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
      
      const Apiurl ='http://localhost:8080/findEmail?email=monilmody9@gmail.com'
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
  }, [])

  const successView = () => {
    const {responseData} = apiDetails
    return <Profile Profiledata={responseData} />
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
    <p>Loading the Profile</p>
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
export default Profileapi