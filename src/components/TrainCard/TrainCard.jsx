import PropTypes from "prop-types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const TrainCard = ({ train }) => {
  let days;
  if (train.run_days.length === 7) {
    days = ["Everyday"];
  } else {
    days = train.run_days.map((day) => day);
  }

  const classes = train.class_type.map((className) => ({
    name: className,
  }));

  return (
    <Card className="w-full rounded overflow-hidden shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl">
      <div className="px-6 py-4">
        <CardHeader>
          <CardTitle>
            {train.train_number} - {train.train_name}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex-col">
            <div>
              <div className="text-gray-700 text-base mb-2">
                Runs on
                <div className="flex mt-2">
                  {days.map((day, index) => (
                    <p
                      key={index}
                      className="ml-2 border-2 border-[#8150e6] rounded-md p-2 px-7"
                    >
                      {day}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between flex-wrap mt-10">
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
            <div className="flex justify-between">
              <div className="text-gray-700 text-base mb-2 mt-7">
                {classes.map((classInfo, index) => (
                  <p
                    key={index}
                    className={`border-2 rounded-md inline-block mr-2 p-4 px-7`}
                  >
                    {classInfo.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

TrainCard.propTypes = {
  train: PropTypes.shape({
    train_number: PropTypes.string.isRequired,
    train_name: PropTypes.string.isRequired,
    run_days: PropTypes.array.isRequired,
    train_src: PropTypes.string.isRequired,
    train_dstn: PropTypes.string.isRequired,
    from_std: PropTypes.string.isRequired,
    to_std: PropTypes.string.isRequired,
    halt_stn: PropTypes.number.isRequired,
    class_type: PropTypes.array.isRequired,
  }).isRequired,
};

export default TrainCard;
