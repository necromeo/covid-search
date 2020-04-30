import moment from "moment";

const deathDiff = (data) => {
  let resLength = data.length;
  let deathDiff = [];
  let infectedDiff = [];

  for (let i = 0; i < resLength - 1; i++) {
    deathDiff.push(data[i + 1]["Deaths"] - data[i]["Deaths"]);
    infectedDiff.push(data[i + 1]["Confirmed"] - data[i]["Confirmed"]);
  }

  return Object.entries(data).map((res, idx) => (
    <tr>
      <td>{moment(res[1]["Date"]).format("LL")}</td>
      <td className="table-warning">{res[1]["Confirmed"]}</td>
      <td className="table-warning">{infectedDiff[idx]}</td>
      <td className="table-success">{res[1]["Recovered"]}</td>
      <td className="table-danger">{res[1]["Deaths"]}</td>
      <td className="table-danger">{deathDiff[idx]}</td>
    </tr>
  ));
};

const CovidTable = (props) => {
  if (Object.keys(props.data).length === 0) {
    return <div></div>;
  }
  if (props.data.message === "Not Found") {
    return <h3>No Results Found. Please check your query</h3>;
  }
  if (props.data !== "Not found") {
    return (
      <table className="table table-hover">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Dates</th>
            <th scope="col">Confirmed Infected</th>
            <th scope="col">Daily Infections</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deaths</th>
            <th scope="col">Daily Deaths</th>
          </tr>
        </thead>
        <tbody>{deathDiff(props.data)}</tbody>
      </table>
    );
  }
};

export default CovidTable;
