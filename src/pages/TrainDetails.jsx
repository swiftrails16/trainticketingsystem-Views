import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { IMAGES } from "@/assets/imgs/Images";

const TrainDetails = () => {
  const { state } = useLocation();
  const { train, from, to, date } = state;
  const [bookingDetails, setBookingDetails] = useState({
    tripType: "one-way",
    cabinType: "",
    passengers: {
      adult: 1,
      child: 0,
      aged: 0,
      handicapped: 0,
    },
    customerDetails: {
      name: "",
      email: "",
      phone: "",
      gender: "",
      age: "",
    },
    totalPrice: 0,
  });

  const handlePassengerChange = (type, value) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      passengers: {
        ...prevDetails.passengers,
        [type]: value,
      },
    }));
  };

  const handleCustomerDetailsChange = (field, value) => {
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      customerDetails: {
        ...prevDetails.customerDetails,
        [field]: value,
      },
    }));
  };

  const handleCabinTypeChange = (cabinType) => {
    let cabinFare = 0;
    if (cabinType === "3A") {
      cabinFare = 30;
    } else if (cabinType === "2A") {
      cabinFare = 50;
    } else if (cabinType === "1A") {
      cabinFare = 90;
    } else {
      cabinFare = 20;
    }
    // const fare = cabinType ? train.data.fare[cabinType] : 0;
    const totalPrice = cabinFare * bookingDetails.passengers.adult;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      cabinType,
      totalPrice,
    }));
  };

  const handleSubmitBooking = () => {
    // Handle booking submission
    console.log("Booking submitted:", bookingDetails);
  };

  if (!train) return <div>Loading...</div>;

  return (
    <div>
      <img
        src={IMAGES.heroHeader}
        alt="train"
        className="w-full h-[300px] object-cover"
      />
      <div className="m-10">
        <Card className="p-5">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Train Details</CardTitle>
                <CardDescription>
                  {train.train_name} - {train.train_number}
                </CardDescription>
              </div>
              <div>
                <Link to={`/search`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Back to Search
                  </button>
                </Link>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <div className="flex justify-between flex-wrap mt-5">
                <div className="flex-col w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                  <p className="text-gray-700 text-base mb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    {train.train_src}
                  </p>
                  <p className="text-gray-700 text-base mb-2">
                    <FontAwesomeIcon icon={faTrain} className="mr-2" />
                    {train.from_std}
                  </p>
                </div>
                <div className="relative flex items-center w-full md:w-1/2 lg:w-1/2">
                  <div className="w-[5px] h-[5px] bg-gray-400 rounded-full"></div>
                  <hr className="w-full border-gray-400 my-4" />
                  <div className="w-[5px] h-[5px] bg-gray-400 rounded-full"></div>
                  <p className="absolute top-[-3px] text-center w-full text-gray-700 text-sm">
                    {train.halt_stn} stop{train.halt_stn > 1 ? "s" : ""}
                  </p>
                </div>
                <div className="flex-col w-full lg:text-end md:w-1/2 lg:w-1/4">
                  <p className="text-gray-700 text-base mb-2">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                    {train.train_dstn}
                  </p>
                  <p className="text-gray-700 text-base mb-2">
                    <FontAwesomeIcon icon={faTrain} className="mr-2" />
                    {train.to_std}
                  </p>
                </div>
              </div>
              <hr className="my-6" />
              {/* Trip type selection */}
              <div className="mt-2">
                <h3 className="font-semibold text-lg my-3">Booking Details</h3>
                <label htmlFor="tripType" className="block">
                  Trip Type:
                  <select
                    id="tripType"
                    value={bookingDetails.tripType}
                    onChange={(e) =>
                      setBookingDetails({
                        ...bookingDetails,
                        tripType: e.target.value,
                      })
                    }
                    className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                  >
                    <option value="one-way">One Way</option>
                    <option value="round-trip">Round Trip</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="w-1/4">
                <label htmlFor="adults" className="block">
                  Adults:
                </label>
                <input
                  id="adults"
                  type="number"
                  value={bookingDetails.passengers.adult}
                  onChange={(e) =>
                    handlePassengerChange("adult", parseInt(e.target.value))
                  }
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                />
              </div>
              <div className="ml-3 w-1/4">
                <label htmlFor="children" className="block">
                  Children:
                </label>
                <input
                  id="children"
                  type="number"
                  value={bookingDetails.passengers.child}
                  onChange={(e) =>
                    handlePassengerChange("child", parseInt(e.target.value))
                  }
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                />
              </div>
              <div className="ml-3 w-1/4">
                <label htmlFor="aged" className="block">
                  Aged:
                </label>
                <input
                  id="aged"
                  type="number"
                  value={bookingDetails.passengers.aged}
                  onChange={(e) =>
                    handlePassengerChange("aged", parseInt(e.target.value))
                  }
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                />
              </div>
              <div className="ml-3 w-1/4">
                <label htmlFor="handicapped" className="block">
                  Handicapped:
                </label>
                <input
                  id="handicapped"
                  type="number"
                  value={bookingDetails.passengers.handicapped}
                  onChange={(e) =>
                    handlePassengerChange(
                      "handicapped",
                      parseInt(e.target.value)
                    )
                  }
                  className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                />
              </div>
            </div>
            <hr className="my-6" />
            <div className="mt-4">
              <h3 className="font-semibold text-lg my-3">Passenger Details</h3>
              <div className="flex">
                <div className="w-[70%] mr-4">
                  <label htmlFor="name" className="block">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={bookingDetails.customerDetails.name}
                    onChange={(e) =>
                      handleCustomerDetailsChange("name", e.target.value)
                    }
                    className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                  />
                </div>
                <div className="ml-6">
                  <label htmlFor="age" className="block">
                    Age
                  </label>
                  <input
                    id="age"
                    type="number"
                    value={bookingDetails.customerDetails.age}
                    onChange={(e) =>
                      handleCustomerDetailsChange("age", e.target.value)
                    }
                    className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                  />
                </div>
                <div className="ml-6">
                  <label htmlFor="gender" className="block">
                    Gender
                  </label>
                  <input
                    id="gender"
                    type="text"
                    value={bookingDetails.customerDetails.gender}
                    onChange={(e) =>
                      handleCustomerDetailsChange("gender", e.target.value)
                    }
                    className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                  />
                </div>
              </div>
              <div className="flex mt-4 w-full">
                <div className="w-[50%] mr-7">
                  <label htmlFor="email" className="block">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                    value={bookingDetails.customerDetails.email}
                    onChange={(e) =>
                      handleCustomerDetailsChange("email", e.target.value)
                    }
                  />
                </div>
                <div className="w-[50%]">
                  <label htmlFor="phone" className="block">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={bookingDetails.customerDetails.phone}
                    onChange={(e) =>
                      handleCustomerDetailsChange("phone", e.target.value)
                    }
                    className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                  />
                </div>
              </div>
            </div>
            <hr className="my-6" />
            <div className="mt-4">
              <h3 className="font-semibold text-lg my-3">Fare Details</h3>
              <div>
                <label htmlFor="cabinType" className="block">
                  Select Cabin:
                  <select
                    id="cabinType"
                    value={bookingDetails.cabinType}
                    onChange={(e) => handleCabinTypeChange(e.target.value)}
                    className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-500"
                  >
                    <option value="">Select Cabin</option>
                    {train.class_type.map((cabin) => (
                      <option
                        key={cabin}
                        value={cabin}
                        // disabled={
                        //   train.data.available_seats[cabin] <= 0 ? true : false
                        // }
                      >
                        {cabin}

                        {/* - {train.data.available_seats[cabin]} seats
                        available */}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex mt-10 p-5 justify-end items-center">
                <p className="text-gray-700 text-3xl">
                  Total Price: ${bookingDetails.totalPrice}
                </p>
                <button
                  onClick={handleSubmitBooking}
                  className={`ml-5 py-3 px-8 rounded font-bold text-white ${
                    bookingDetails.cabinType === ""
                      ? "bg-gray-400"
                      : "bg-blue-500 hover:bg-blue-700"
                  }`}
                  disabled={bookingDetails.cabinType === ""}
                >
                  {bookingDetails.cabinType === ""
                    ? "Select Cabin"
                    : "Go to checkout"}
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrainDetails;
