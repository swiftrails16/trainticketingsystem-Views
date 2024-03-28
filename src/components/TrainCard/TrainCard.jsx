import PropTypes from "prop-types";
import { IMAGES } from "@/assets/imgs/Images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChair,
  faMoneyBillAlt,
  faTrain,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const TrainCard = ({ train }) => {
  const formatFare = (fare) => {
    return fare.toFixed(2);
  };

  const seatsColor =
    train.available_seats > 0 ? "text-green-600" : "text-red-600";

  const fareColor = train.fare > 0 ? "text-blue-600" : "text-red-600";
  return (
    <Card className="w-full rounded overflow-hidden shadow-lg">
      <img
        src={IMAGES.destinationImage} // Replace with actual train image URL
        alt="Train"
        className="w-full h-40 object-cover"
      />
      <div className="px-6 py-4">
        <CardHeader>
          <CardTitle>{train.train_name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 text-base mb-2">
            <FontAwesomeIcon icon={faTrain} className="mr-2" />
            Train Number: {train.train_number}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            From: {train.from_station}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            To: {train.to_station}
          </p>
          <p className="text-gray-700 text-base mb-2">
            <FontAwesomeIcon icon={faChair} className="mr-2" />
            Available Seats:{" "}
            <span className={seatsColor}>{train.available_seats}</span>
          </p>
          <p className="text-gray-700 text-base mb-2">
            <FontAwesomeIcon icon={faMoneyBillAlt} className="mr-2" />
            Fare: <span className={fareColor}>${formatFare(train.fare)}</span>
          </p>
        </CardContent>
      </div>
    </Card>
  );
};

TrainCard.propTypes = {
  train: PropTypes.object.isRequired,
};

export default TrainCard;
