import { useParams } from 'react-router-dom'
import { useNavigate} from "react-router-dom";
import {useState} from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";




  const Validation =()=>{
    const {email}=useParams()
    const [otp,setOtp]=useState("")
    const navigate = useNavigate()
    const handleValidation = async () => {
        const response = await fetch(`http://localhost:8080/validateOTP?email=${email}&otp=${otp}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ otp }),
        });

        const data = await response.json();

        if (data.success) {
            navigate('/login')
        } else {
            <p>invalid OTP</p>
        }
    };

    return(
<div className="m-10">
        <Card className="p-5">
          <CardHeader>
            <CardTitle>Validation</CardTitle>

          </CardHeader>
          <CardContent>
            <form >
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
                <div className="flex flex-col space-y-1.5">
                  <button
                    type="submit"
                    className="bg-[#5a3970] hover:bg-[#482e5a] font-medium border-2 border-transparent hover:border-[#7e529e] shadow-md transition text-white p-2 rounded"
                    onclick={handleValidation}
                  >
                    Validate
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    )

}
export default Validation
