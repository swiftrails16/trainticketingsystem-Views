import { useParams, useNavigate ,Navigate,Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardFooter,
    CardTitle,
  } from "@/components/ui/card";


  import { Button } from "@/components/ui/button";

  const Validation = () => {
    const { email } = useParams();
    const [otp, setOtp] = useState("");
    
    const navigate = useNavigate();
  
    const handleValidation = async (e) => {
     {console.log("madhu")
  try {
    const response = await axios.post(
      `http://localhost:8080/validateOTP?email=${email}&otp=${otp}`,
      
    );
    console.log('User added successfully:', response.data);
    window.location.href = '/login';

    
  }
  
   catch (error) {
    console.error('Error updating user:', error.message);
    // Handle error (e.g., show an error message)
  }

}
};
  
    
    return(
<div className="m-10">
        <Card className="p-5">
          <CardHeader>
            <CardTitle>Validation</CardTitle>

          </CardHeader>
          <CardContent>
            <form  >
              <div className="grid w-full items-center gap-8 mt-7">
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="otp" className="font-semibold">
                      From
                    </label>
                    <input
                      id="otp"
                      value={otp}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter your OTP"
                    />
                  </div>
                 
                </div>
                
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col justify-between">
              <div className="flex w-full justify-between">
                {/*<Link to={`/validation/${fname}/${lname}/${phoneNumber}/${email}/${password}/${address}`}></Link>*/}
                
                <Button className="w-full rounded-3xl" onClick={handleValidation}>Register</Button>
                
              </div>
            </CardFooter>
        </Card>
      </div>
    )

}
export default Validation
