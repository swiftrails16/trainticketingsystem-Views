import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { IMAGES } from "@/assets/imgs/Images";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TrainCard from "@/components/TrainCard/TrainCard";

const SearchResult = () => {
  const { from, to } = useParams();
  const [filteredTrains, setFilteredTrains] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = {
          trains: {
            trains_available: [
              {
                from_to: "Station A to Station B",
              },
              {
                from_to: "Station C to Station D",
              },
              {
                from_to: "Station E to Station F",
              },
            ],
            train_schedules: [
              {
                train_number: 1234,
                train_name: "Express",
                from_station: "Station A",
                to_station: "Station B",
                available_seats: 200,
                fare: 50.0,
              },
              {
                train_number: 5678,
                train_name: "Local",
                from_station: "Station A",
                to_station: "Station B",
                available_seats: 150,
                fare: 30.0,
              },
              {
                train_number: 9012,
                train_name: "Superfast",
                from_station: "Station E",
                to_station: "Station F",
                available_seats: 100,
                fare: 80.0,
              },
            ],
          },
        };

        const filtered = filterTrains(data, from, to);
        setFilteredTrains(filtered);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [from, to]);

  const filterTrains = (data, fromStation, toStation) => {
    const { train_schedules } = data.trains;

    const filteredTrains = train_schedules.filter((train) => {
      return (
        train.from_station === fromStation && train.to_station === toStation
      );
    });

    return filteredTrains;
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
            {filteredTrains.length > 0 ? (
              <div className="flex flex-col gap-5">
                {filteredTrains.map((train, index) => (
                  <TrainCard key={index} train={train} />
                ))}
              </div>
            ) : (
              <p>No trains available for the selected route.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchResult;
