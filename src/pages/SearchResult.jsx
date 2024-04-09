import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import AdsComponent from "./AdsComponent";
import { IMAGES } from "@/assets/imgs/Images";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TrainCard from "@/components/TrainCard/TrainCard";

// import trainData from "../assets/data/train_data.json";

const SearchResult = () => {
  const { from, to, date } = useParams();
  const navigate = useNavigate();
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [trainsData, setTrainsData] = useState([]);
  const image1 = 'https://i.pinimg.com/originals/06/9d/61/069d617dca720be2d65014963515d28e.gif'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/stationCodes?fromStationCode=${from}&toStationCode=${to}&dateOfJourney=${date}`
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const responseData = await response.text();
        // Parse text into JSON
        const trains = JSON.parse(responseData);
        console.log(trains);
        // const filtered = filterTrains(trainsData.data, from, to, date);
        // setFilteredTrains(filtered);

        setTrainsData(trains.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [from, to, date]);

  // const filterTrains = (data, fromStation, toStation, date) => {
  //   const filteredTrains = data.filter((train) => {
  //     const convertedDate = train.train_date.split("-").reverse().join("-");
  //     const trainDate = new Date(convertedDate);
  //     const userDate = new Date(date);
  //     return (
  //       train.train_src === fromStation &&
  //       train.train_dstn === toStation &&
  //       trainDate.getDate() === userDate.getDate()
  //     );
  //   });
  //   return filteredTrains;
  // };

  const handleClick = (train) => {
    navigate(`/booking/${train.train_number}`, { state: { train, from, to, date } });
  };

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
                <CardTitle>Search Result</CardTitle>
                <CardDescription>
                  Showing available trains from {from} to {to}
                </CardDescription>
              </div>
              <div>
                <Link to={"/search"}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    New Search
                  </button>
                </Link>
              </div>
            </div>
          </CardHeader>

          <CardContent>
            {trainsData.length > 0 ? (
              <div className="flex flex-col gap-5">
                {trainsData.map((train, index) => (
                  <div key={index} onClick={() => handleClick(train)}>
                    <TrainCard train={train} />
                  </div>
                ))}
              </div>
            ) : (
              <p>No trains available for the selected route.</p>
            )}
          </CardContent>
        </Card>
        <AdsComponent image={image1}  />
      </div>
    </div>
  );
};

export default SearchResult;
