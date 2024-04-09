import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardBackground,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/ui/passwordInput";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Link ,useNavigate} from "react-router-dom";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { IMAGES } from "@/assets/imgs/Images";
import { Separator } from "@/components/ui/separator";

const Register = () => {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [phoneNumber, setPhoneno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate()
  const handleRegister = async (e) => {
        
    try {
      const response = await axios.put(
        `http://localhost:8080/registerUser?email=${email}&password=${password}&firstName=${fname}&lastName=${lname}&address=${address}&phoneNumber=${phoneNumber}`,
        
      );
      console.log('User added successfully:', response.data);
      navigate(`/validation/${email}`)
    } catch (error) {
      console.error('Error updating user:', error.message);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="container mx-auto py-10 flex flex-col lg:flex-row h-screen justify-between">
      <Card className="w-full lg:w-1/2 mb-5 lg:mb-0 lg:mr-5">
        <div className="flex flex-col h-full justify-center">
          <div className="p-10">
            <CardHeader>
              <CardTitle>Create a new account</CardTitle>
              <CardDescription>
                Join now to get access to discounts and rewards.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">First Name</Label>
                    <Input
                      id="name"
                      placeholder="enter your first name"
                      value={fname}
                      onChange={(e) => setfName(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Last Name</Label>
                    <Input
                      id="name"
                      placeholder="enter your Last name"
                      value={lname}
                      onChange={(e) => setlName(e.target.value)}
                    />
                  </div>
                  <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneno(e.target.value)}
                    />
                  </div>
                  </div>
                  </div>
                  <Separator className="mt-2" />
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      placeholder="enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="address"> Address</Label>
                    <Input
                      id="address"
                      placeholder="enter your address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <PasswordInput
                      id="password"
                      value={password}
                      placeholder="enter your password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="cpassword">Confirm Password</Label>
                    <PasswordInput
                      id="cpassword"
                      value={cpassword}
                      placeholder="confirm your password"
                      onChange={(e) => setCPassword(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col justify-between">
              <div className="flex w-full justify-between">
                {/*<Link to={`/validation/${fname}/${lname}/${phoneNumber}/${email}/${password}/${address}`}></Link>*/}
                
                <Button className="w-full rounded-3xl" onClick={handleRegister}>Register</Button>
                
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
      <div className="hidden lg:block w-5"></div>
      <Card className="w-full lg:w-1/2 pl-20">
        <div className="flex flex-col h-full justify-center">
          <CardHeader>
            <CardTitle>Already have an account? Login Now!</CardTitle>
            <CardDescription>
              Login now to start booking your tickets.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex">
            <Link to="/" className="w-full" style={{ zIndex: 1 }}>
              <Button variant="outline" className="w-full lg:w-1/3 rounded-3xl">
                Login
              </Button>
            </Link>
          </CardFooter>
        </div>
        <CardBackground src={IMAGES.formTrain} alt={"Form Train"} />
      </Card>
    </div>
  );
};

export default Register;
