import Head from "next/head";
import moment from "moment";
import fetch from "node-fetch";
import { useState, useEffect } from "react";
import CovidTable from "../components/table";

moment.locale("en");

export default function Covid() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState({});
  const [altCountry, setAltCountry] = useState("");
  const [altCases, setAltCases] = useState({});
  const [scroll, setScroll] = useState(0);

  const search = async (e, w) => {
    e.preventDefault();
    let covUrl = `https://api.covid19api.com/country/${w}`;
    let getResults = await fetch(covUrl);
    let results = await getResults.json();
    return setCases(results);
  };
  const altSearch = async (w) => {
    let covUrl = `https://api.covid19api.com/country/${w}`;
    let getResults = await fetch(covUrl);
    let results = await getResults.json();
    return setAltCases(results);
  };

  const checkForEnter1 = (e) => {
    if (e.key === "Enter") {
      document.getElementById("searchButton").click();
    }
  };
  const checkForEnter2 = (e) => {
    if (e.key === "Enter") {
      document.getElementById("altSearchButton").click();
    }
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScroll(position);
  };

  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    let topButton = document.getElementById("topButton");
    if (scroll > 1200) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  });

  return (
    <div>
      <Head>
        <title>COVID-19</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
      </Head>
      <div className="container-fluid">
        <h1 className="mt-3 mb-5 pl-5 display-3">COVID-19</h1>
        <div className="row">
          <div className="col-sm pl-5 pr-5">
            <input
              className="form-control"
              type="text"
              name="word"
              value={country}
              onChange={() => setCountry(event.target.value)}
              placeholder="Search for a country"
              onKeyPress={(e) => checkForEnter1(e)}
              style={{ width: "300px" }}
            ></input>
            <button
              id="searchButton"
              className="btn btn-dark mt-3 searchButton"
              onClick={(e) => search(e, country)}
            >
              Search
            </button>
            <div className="mt-4">
              <h4 className="mb-4">{country}</h4>
              <div className="table-responsive">
                <CovidTable data={cases} />
              </div>
            </div>
          </div>
          <div className="col-sm pl-5 pr-5">
            <input
              className="form-control"
              type="text"
              name="word"
              value={altCountry}
              onChange={() => setAltCountry(event.target.value)}
              placeholder="Search for another country"
              onKeyPress={(e) => checkForEnter2(e)}
              style={{ width: "300px" }}
            ></input>
            <button
              id="altSearchButton"
              className="btn btn-dark mt-3"
              onClick={() => altSearch(altCountry)}
            >
              Search
            </button>
            <div className="mt-4">
              <h4 className="mb-4">{altCountry}</h4>
              <div className="table-responsive">
                <CovidTable data={altCases} />
              </div>
            </div>
          </div>
        </div>
        <button
          id="topButton"
          className="btn btn-primary ml-auto mr-4 mb-4 mt-auto"
          onClick={scrolltoTop}
          style={{ display: "none" }}
        >
          To the Top
        </button>
      </div>
    </div>
  );
}
