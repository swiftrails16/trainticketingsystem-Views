// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { FaApple } from 'react-icons/fa';
// const Payment =(props)=>{
//   const{Paymentdata,tic}=props
//   const{salesTax,serviceTax,totalPrice}=Paymentdata
//   return(

//       <div>

// <div className="m-10">
//       <Card className="p-5">
//         <CardHeader>
//           <CardTitle>Payment</CardTitle>
//          <CardDescription>Make Your Payment</CardDescription>
//         </CardHeader>




//         <CardContent>




//             <div className="grid w-full items-center gap-8 mt-7">

//       <div className="flex justify-between gap-10">
//            <div className="flex flex-col space-y-1.5 w-[50%]">
//            <label htmlFor="mail" className="font-semibold">
//                    Ticket Price : {tic}
//             </label>

//            <label htmlFor="mail" className="font-semibold">
//                    Sales tax : {salesTax}
//             </label>
//             <label htmlFor="mail" className="font-semibold">
//                    Service tax : {serviceTax}
//             </label>
//             <label htmlFor="mail" className="font-semibold">
//                    total : {totalPrice}
//             </label>

//                 </div>

// </div>
// </div>
// </CardContent>



//         <CardContent>
//           <form >

//            <div className="grid w-full items-center gap-8 mt-7">

//      <div className="flex justify-between gap-10">
//           <div className="flex flex-col space-y-1.5 w-[50%]">
//               <button type="submit" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500" style={{backgroundColor:"black" , color:"white"}}>
//               <FaApple style={{ position:"absolute",left:"21%",top:"2.5%" ,height:"3.7%"}}/>
//                  Pay
//                 </button>

//           </div>
//           <br/>
//           <div className="flex flex-col space-y-1.5 w-[50%]">
//               <button type="submit" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500" style={{backgroundColor:"#29C5F6" , color:"white" }}>

//                 G Pay
//                 </button>

//           </div>
//           <br/>





// </div>
// </div>



//            <div className="grid w-full items-center gap-8 mt-7">

//               <div className="flex justify-between gap-10">
//                 <div className="flex flex-col space-y-1.5 w-[50%]">
//                   <label htmlFor="mail" className="font-semibold">
//                     Email
//                   </label>
//                   <input

//                     type="email"
//                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"

//                     placeholder="Enter your Email Address"
//                   />
//                 </div>

//                 <div className="flex flex-col space-y-1.5 w-[50%]">
//                   <label htmlFor="payment" className="font-semibold">
//                     Payment Method
//                   </label>
//                   <select
//                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"


//                   >
//                       <option value="Paypal">Paypal</option>
//                       <option value="Credit Card">Credit Card</option>
//                       <option value="Debit Card">Debit Card</option>
//                   </select>
//                 </div>




//               </div>
//               <div className="flex justify-between gap-10">
//               <div className="flex flex-col space-y-1.5 w-[50%]">
//                   <label htmlFor="Name" className="font-semibold">
//                     Name on Card
//                   </label>
//                   <input


//                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"

//                     placeholder="Enter your Name on your card"
//                   />
//                 </div>

//                 <div className="flex flex-col space-y-1.5 w-[50%]">
//                 <label htmlFor="cardno" className="font-semibold">
//                     Card Number
//                   </label>

//                   <input

//                     type="text"

//                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"

//                     id="cardno" placeholder="1234 1234 1234 1234" pattern="\d{4} \d{4} \d{4} \d{4}" required
//                   />

//                  </div>
//                  <div className="flex flex-col space-y-1.5 w-[50%]">
//                 <label htmlFor="cardno" className="font-semibold">
//                     Card Expiry
//                   </label>

//                    <input

//                     type="text"

//                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"

//                     id="cardno" name="card_expiry" placeholder="MM / YY" pattern="\d{2} \/ \d{2}" required
//                   />

//                   </div>
//                   <div className="flex flex-col space-y-1.5 w-[50%]">
//                 <label htmlFor="cardno" className="font-semibold">
//                     Card CVC
//                   </label>

//                    <input

//                     type="text"

//                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"

//                     id="no" name="card_cvc" placeholder="CVC" pattern="\d{3}" required
//                   />
//                   </div>

//                 </div>






//               <div className="flex justify-between gap-10">
//               <div className="flex flex-col space-y-1.5 w-[50%]">
//                   <label htmlFor="country" className="font-semibold">
//                     Country or region
//                   </label>
//                   <select
//                     id="country"
//                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"

//                   >
//                       <option value="USA">USA</option>
//                       <option value="UK">UK</option>
//                       <option value="Canada">Canada</option>
//                       <option value="Australia">Australia</option>
//                       <option value="China">China</option>
//                       <option value="Japan">Japan</option>
//                       <option value="France">France</option>
//                       <option value="Germany">Germany</option>
//                       <option value="Italy">Italy</option>
//                       <option value="Spain">Spain</option>
//                       <option value="Sweden">Sweden</option>
//                       <option value="Norway">Norway</option>
//                       <option value="Poland">Poland</option>
//                       <option value="Portugal">Portugal</option>
//                       <option value="Russia">Russia</option>
//                       </select>

//                 </div> 

//                 <div className="flex flex-col space-y-1.5 w-[50%]" >
//                   <label htmlFor="zip" className="font-semibold">
//                     ZIP
//                   </label>
//                   <input

//                     type="number"

//                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"

//                     placeholder="Enter your  ZIP"
//                   />
//                 </div>
//               </div>

//               <div className="flex justify-between gap-10">

//               </div>
//               <div className="flex flex-col space-y-1.5">
//                 <button
//                   type="submit"
//                   className="bg-[#5a3970] hover:bg-[#482e5a] font-medium border-2 border-transparent hover:border-[#7e529e] shadow-md transition text-white p-2 rounded"
//                 >

//                  Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         </CardContent>
//       </Card>
//     </div>




//           </div>
//   )

// }

// export default Payment; 
import{useState} from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaApple } from 'react-icons/fa';
import axios from 'axios';

const Payment =(props)=>{
  const{Paymentdata,tic,cabin,to,from,train}=props
  const{salesTax,serviceTax,totalPrice}=Paymentdata
  const [pcode,setPcode]=useState('');
  const [email, setEmail] = useState('');
  const [cardno, setCardno] = useState('');
  const [cardexp, setCardexp] = useState('');
  const[cardcvv,setCardcvv]=useState('');
  const[name, setName] = useState('');
   const [discountedPrice, setDiscountedPrice] = useState(null);
 const handleronEmailChange=(e)=>{
  setEmail(e.target.value);
 }
 const handleronCardnoChange=(e)=>{
  setCardno(e.target.value);
 }
 const handleronCardexpChange=(e)=>{
  setCardexp(e.target.value);
 }
const handleronCardcvvChange=(e)=>{
  setCardcvv(e.target.value);
 }
const handleronCardnameChange=(e)=>{
  setName(e.target.value);
 }


 const handleronPcodeChange=(e)=>{
  setPcode(e.target.value);
 }








 const fetchDiscountedPrice=async()=> {
  try {
      const response = await axios.post(
          `http://localhost:8080/promotions?mailId=bharambedipesh123@gmail.com&promotionCode=${pcode}&amount=${totalPrice}`
      );

      // Extract the discountPrice from response.data
      const discountPrice = response.data.discountPrice;

      // Set the discountPrice in the component state
      setDiscountedPrice(discountPrice);
  } catch (error) {
      console.error('Error updating user:', error.message);
      // Handle the error (e.g., show an error message to the user)
  }
}




  const handlePayment=async()=>{
     try {
    
    const response = await axios.put(
     
     `http://localhost:8080/generatePDF?mailId=${email}&cardNumber=${cardno}&cardExpiry=${cardexp}&cardCVV=${cardcvv}&amount=${discountedPrice}&name=${name}&trainName=${train}&date=04/28/2024&from_station=${from}&to_station=${to}&seat=${cabin}`
    );
    console.log('Authentication successfully:', response.data);
    
  } catch (error) {
    console.error('Error updating user:', error.message);
  }
}

  
  return(
    
      <div>

<div className="m-10">
      <Card className="p-5">
        <CardHeader>
          <CardTitle>Payment</CardTitle>
         <CardDescription>Make Your Payment</CardDescription>
        </CardHeader>




        <CardContent>


        
            
            <div className="grid w-full items-center gap-8 mt-7">

      <div className="flex justify-between gap-10">
           <div className="flex flex-col space-y-1.5 w-[50%]">
           <label htmlFor="mail" className="font-semibold">
                   Ticket Price : {tic}
            </label>
      
           <label htmlFor="mail" className="font-semibold">
                   Sales tax : {salesTax}
            </label>
            <label htmlFor="mail" className="font-semibold">
                   Service tax : {serviceTax}
            </label>
            <label htmlFor="mail" className="font-semibold">
                   total : {totalPrice}
            </label>



            <div className="flex flex-col space-y-1.5 w-[50%]">
                  <label htmlFor="mail" className="font-semibold">
                    Promotion Code
                  </label>
                  <input
                    
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                    value={pcode}
                    placeholder="Enter your Promotion code"
                    onChange={handleronPcodeChange}
                  />
                
                <button onClick={fetchDiscountedPrice}>verify</button>
            </div>
                  


            <label htmlFor="mail" className="font-semibold">
                   discount Price :{discountedPrice}
            </label>
                </div>

</div>
</div>
</CardContent>

        

        <CardContent>
          <form >
            
           <div className="grid w-full items-center gap-8 mt-7">

     <div className="flex justify-between gap-10">
          <div className="flex flex-col space-y-1.5 w-[50%]">
              <button type="submit" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500" style={{backgroundColor:"black" , color:"white"}}>
              <FaApple style={{ position:"absolute",left:"21%",top:"2.5%" ,height:"3.7%"}}/>
                 Pay
                </button>
 
          </div>
          <br/>
          <div className="flex flex-col space-y-1.5 w-[50%]">
              <button type="submit" className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500" style={{backgroundColor:"#29C5F6" , color:"white" }}>
              
                G Pay
                </button>
 
          </div>
          <br/>





</div>
</div>



           <div className="grid w-full items-center gap-8 mt-7">

              <div className="flex justify-between gap-10">
                <div className="flex flex-col space-y-1.5 w-[50%]">
                  <label htmlFor="mail" className="font-semibold">
                    Email
                  </label>
                  <input
                    
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                    value={email}
                    placeholder="Enter your Email Address"
                    onChange={handleronEmailChange}
                  />
                </div>
                
                <div className="flex flex-col space-y-1.5 w-[50%]">
                  <label htmlFor="payment" className="font-semibold">
                    Payment Method
                  </label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                    
                    
                  >
                      <option value="Paypal">Paypal</option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="Debit Card">Debit Card</option>
                  </select>
                </div>
                
                
               
               
              </div>
              <div className="flex justify-between gap-10">
              <div className="flex flex-col space-y-1.5 w-[50%]">
                  <label htmlFor="Name" className="font-semibold">
                    Name on Card
                  </label>
                  <input
                    
                   onChange={handleronCardnameChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                   value={name}
                    placeholder="Enter your Name on your card"
                  />
                </div>
                
                <div className="flex flex-col space-y-1.5 w-[50%]">
                <label htmlFor="cardno" className="font-semibold">
                    Card Number
                  </label>
                  
                  <input
                    
                    type="text"
                    onChange={handleronCardnoChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                    value={cardno}
                    id="cardno" placeholder="1234 1234 1234 1234" pattern="\d{4} \d{4} \d{4} \d{4}" required
                  />
                  
                 </div>
                 <div className="flex flex-col space-y-1.5 w-[50%]">
                <label htmlFor="cardno" className="font-semibold">
                    Card Expiry
                  </label>
                 
                   <input
                    onChange={handleronCardexpChange}
                    type="text"
                   
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                    value={cardexp}
                    id="cardno" name="card_expiry" placeholder="MM / YY" pattern="\d{2} \/ \d{2}" required
                  />
                  
                  </div>
                  <div className="flex flex-col space-y-1.5 w-[50%]">
                <label htmlFor="cardno" className="font-semibold">
                    Card CVC
                  </label>
                 
                   <input
                    onChange={handleronCardcvvChange}
                    type="text"
                   value={cardcvv}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                    
                    id="no" name="card_cvc" placeholder="CVC" pattern="\d{3}" required
                  />
                  </div>

                </div>
               
                
              
             


              <div className="flex justify-between gap-10">
              <div className="flex flex-col space-y-1.5 w-[50%]">
                  <label htmlFor="country" className="font-semibold">
                    Country or region
                  </label>
                  <select
                    id="country"
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                    
                  >
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="China">China</option>
                      <option value="Japan">Japan</option>
                      <option value="France">France</option>
                      <option value="Germany">Germany</option>
                      <option value="Italy">Italy</option>
                      <option value="Spain">Spain</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Norway">Norway</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Russia">Russia</option>
                      </select>

                </div> 
                
                <div className="flex flex-col space-y-1.5 w-[50%]" >
                  <label htmlFor="zip" className="font-semibold">
                    ZIP
                  </label>
                  <input
                    
                    type="number"
                    
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                    
                    placeholder="Enter your  ZIP"
                  />
                </div>
              </div>

              <div className="flex justify-between gap-10">
             
              </div>
              <div className="flex flex-col space-y-1.5">
                <button
                onClick={handlePayment}
                  type="submit"
                  className="bg-[#5a3970] hover:bg-[#482e5a] font-medium border-2 border-transparent hover:border-[#7e529e] shadow-md transition text-white p-2 rounded"
                >
                  
                 Submit
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>




          </div>
  )

}

export default Payment; 