import { useState } from "react";

import axios from 'axios';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { PasswordInput } from "@/components/ui/passwordInput";
const Profile=(props)=>{
    const {profiledata} = props;
    const {firstName, lastName,address,phoneNumber}=profiledata


    const [mobileNumber, setMobileNumber] = useState({phoneNumber});
    const [email, setEmail] = useState('Swiftrails@gmail.com');
    const [password, setPassword] = useState('');
    const[fname,setName]=useState({firstName});
    const[lname,setlName]=useState({lastName});
    const[add,setAdd]=useState({address});
    
    const handleMobileNumberChange = (e) => {
      setMobileNumber(e.target.value);
    };
    const handleMobileEmailChange = (e) => {
        setEmail(e.target.value);
      };
      const handleNameChange = (e) => {
        setName(e.target.value);
      };
      const handleAddChange = (e) => {
        setAdd(e.target.value);
      };
      const handleLnameChange = (e) => {
        setlName(e.target.value);
      };
      const handleSubmit = async (e) => {
        
        try {
          const response = await axios.put(
            `http://localhost:8080/updateUser?email=${email}&password=${password}&firstName=${fname}&lastName=${lname}&address=${add}&phoneNumber=${mobileNumber}`,
            
          );
          console.log('User updated successfully:', response.data);
          const {email,firstName, lastName,address,phoneNumber} = response.data;
           setlName(lastName);
          setName(firstName);
          setAdd(address);
          setMobileNumber(phoneNumber);
          setEmail(email);
        } catch (error) {
          console.error('Error updating user:', error.message);
          // Handle error (e.g., show an error message)
        }
      };


      const handleDelete = async () => {
        try {
          // Make an API request to delete the item
          await axios.delete(`http://localhost:8080/deleteUser?email=${email}`);
          // Update your local state or refetch data
          // ...
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      };
    
    return(
        
        
        
        <div className="m-10">
        <Card className="p-5">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
           {/* <CardDescription>Find your next destination</CardDescription>*/}
          </CardHeader>

          <CardContent>
            <form >
              <div className="grid w-full items-center gap-8 mt-7">
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="Name" className="font-semibold">
                      First Name
                    </label>
                    <input
                      
                      onChange={handleNameChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      value={fname}
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="Name" className="font-semibold">
                      Last Name
                    </label>
                    <input
                      
                      onChange={handleLnameChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      value={lname}
                      placeholder="Enter your Name"
                    />
                  </div>
                  
                  
                 
                 
                </div>
                <div className="flex justify-between gap-10">
                <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="mobilenumber" className="font-semibold">
                      Mobile Number
                    </label>
                    <input
                      onChange={handleMobileNumberChange}
                      value={mobileNumber}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      
                      placeholder="Enter your Mobile Number"
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                  <label htmlFor="Email" className="font-semibold">
                      Email
                    </label>
                    <input
                      onChange={handleMobileEmailChange}
                      type="email"
                      value={email}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      
                      placeholder="Enter your Email Address"
                    />
                  </div>
                 
                  
                </div>
               


                <div className="flex justify-between gap-10">
                <div className="flex flex-col space-y-1.5 w-[50%]" >
                  <label htmlFor="password" className="font-semibold">
                      Password
                    </label>
                  <PasswordInput
                      id="password"
                      value={password}
                      placeholder="enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  
                  <div className="flex flex-col space-y-1.5 w-[50%]" >
                    <label htmlFor="Email" className="font-semibold">
                      Address
                    </label>
                    <input
                      onChange={handleAddChange}
                      type="text"
                       value={add}
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      
                      placeholder="Enter your  Address"
                    />
                  </div>
                </div>

                <div className="flex justify-between gap-10">
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                    <label htmlFor="date" className="font-semibold">
                      Date of Birth
                    </label>
                    <input
                      id="date"
                      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                      type="date"
                    />
                  </div> 
                </div>
                <div className="grid w-full items-center gap-8 mt-7">

<div className="flex justify-between gap-10">
     <div className="flex flex-col space-y-1.5 w-[50%]">
       
         <button type="submit" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500" style={{backgroundColor:"#5a3970" , color:"white"}}
             onClick={handleSubmit}>
            Update
           </button>
        
     </div>
     <div className="flex flex-col space-y-1.5 w-[50%]">
      
         <button type="submit" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500" style={{backgroundColor:"#5a3970" , color:"white"}}
            onClick={handleDelete} >
            Delete
           </button>
     
     </div>

   </div>
   </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      
    )
}
export default Profile;