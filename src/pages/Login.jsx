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
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { IMAGES } from "@/assets/imgs/Images";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const submitForm = async () => {
    console.log("madhu")
    const userDetails = {username, password}
    console.log(username)
    const url = `http://localhost:8080/login?email=${username}&password=${password}`
    console.log("madhu")
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (data.ok) {
      navigate('/Search')
    } else {
      return(
        <div>
          <p>Error</p>
        </div>
      )
    }
  }
  return (
    <div className="container mx-auto py-10 flex flex-col lg:flex-row h-screen justify-between">
     
      <Card className="w-full lg:w-1/2 mb-5 lg:mb-0 lg:mr-5">
        <div className="flex flex-col h-full justify-center">
          <div className="p-10">
            <CardHeader>
              <CardTitle>Log in to your account</CardTitle>
              <CardDescription>
                Log in to access your account and start booking.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email Address</Label>
                    <Input
                      id="name"
                      placeholder="enter your email address"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col justify-between">
              <div className="flex w-full justify-between">
                {/*<Link to={'/search'}>*/}
                  <Button className="w-full lg:w-1/2 rounded-3xl" onClick={submitForm}>
                    Log in
                  </Button>
                  
                <h5 className="scroll-m-20 text-sm font-normal underline tracking-tight self-center">
                  Forgot your password?
                </h5>
              </div>
              <div className="flex flex-col w-full mt-5">
                <div className="flex items-center justify-center">
                  <div className="border-t-2 rounded-2xl border-gray-400 flex-grow"></div>
                  <div className="px-4">
                    <p size="xl">Or log in with</p>
                  </div>
                  <div className="border-t-2 border-gray-400 flex-grow"></div>
                </div>
                <div>
                  <div className="flex justify-center space-x-4 pt-4">
                    <Button
                      variant="outline"
                      className="w-full lg:w-1/2 rounded-3xl"
                    >
                      <img
                        className="w-5 h-5 mr-2"
                        src="https://www.svgrepo.com/show/448224/facebook.svg"
                        loading="lazy"
                        alt="google logo"
                      />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full lg:w-1/2 rounded-3xl items-center"
                    >
                      <img
                        className="w-5 h-5 mr-2"
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        loading="lazy"
                        alt="google logo"
                      />
                      Google
                    </Button>
                  </div>
                </div>
                <p className="pt-4 mt-2 flex flex-col text-sm">
                  Not a member? Get exclusive discounts and much more.
                  <Link to={"/register"} className="w-fit mt-2">
                    <span className="underline">Join today</span>
                  </Link>
                </p>
              </div>
            </CardFooter>
          </div>
        </div>
      </Card>
      <div className="hidden lg:block w-5"></div>
      <Card className="w-full lg:w-1/2 pl-20">
        <div className="flex flex-col h-full justify-center">
          <CardHeader>
            <CardTitle>New Here? Register Now!</CardTitle>
            <CardDescription>
              Register now to start booking your tickets.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex">
            <Link to="/register" className="w-full" style={{ zIndex: 1 }}>
              <Button variant="outline" className="w-full lg:w-1/3 rounded-3xl">
                Register
              </Button>
            </Link>
          </CardFooter>
        </div>
        <CardBackground src={IMAGES.formTrain} alt={"Form Train"} />
      </Card>
    </div>
  );
};

export default Login;
