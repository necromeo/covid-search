import moment from "moment";
import { Line } from "react-chartjs-2";

const Graph = (props) => {
  if (Object.keys(props.data).length === 0) {
    return <div></div>;
  }
  if (props.data.message === "Not Found") {
    return <h3>No Results Found. Please check your query</h3>;
  }

  let datos = props.data;

  console.log(datos);

  let dates = [];
  let deaths = [];
  let cases = [];
  Object.entries(datos).map((res) => {
    dates.push(moment(res[1]["Date"]).utc().format("LL"));
    deaths.push(res[1]["Deaths"]);
    cases.push(res[1]["Confirmed"]);
  });

  let data = {
    labels: dates,
    datasets: [
      {
        label: "Deaths",
        data: deaths,
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.1)",
      },
      {
        label: "Cases",
        data: cases,
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.1)",
      },
    ],
  };

  let options = {};

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
