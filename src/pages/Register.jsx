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

import { Link } from "react-router-dom";

import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { IMAGES } from "@/assets/imgs/Images";
import { Separator } from "@/components/ui/separator";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [date, setDate] = useState("");

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
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Popover id="dob">
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "justify-start text-left font-normal w-full",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
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
                <Button className="w-full rounded-3xl">Register</Button>
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
