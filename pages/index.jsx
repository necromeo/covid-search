import Layout from "./layout";
import moment from "moment";

moment.locale("en");

export default function Home() {
  return (
    <Layout pageTitle="COVID-19">
      <div>
        <div className="container">
          <p>
            This is a simple App for looking up the lasted Coronavirus data.
          </p>
          <p>
            You can get the raw numbers or, otherwise, request a graphical
            representation of them. The latter consists of a line chart with the
            dates on the X axis and the cases and deaths o the Y axis. In each
            case the first recordings are from January 22.
          </p>
          <p>
            Please use the links in the Navigation Bar on top to choose how you
            want to get your data.
          </p>
        </div>
      </div>
    </Layout>
  );
}
