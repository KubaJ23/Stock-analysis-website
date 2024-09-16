import React, { useContext, useEffect, useState } from "react";
import { ApiContext } from "../App";
import HistoricalChart from "./HistoricalChart";
import infoStyles from "../styles/stock-info.module.css";

export default function StockInfo({ symbol }) {
  const [companyProfile, setCompanyProfile] = useState(null);
  const [historical, setHistorical] = useState(null);
  const apiURL = useContext(ApiContext);

  useEffect(() => {
    getCompanyData(symbol);
    getHistorical(symbol);
  }, [symbol]);

  return companyProfile === null || historical === null ? (
    "Loading company data..."
  ) : (
    <div className={infoStyles["info-window"]}>
      <h1>{companyProfile.symbol}</h1>
      <p>{companyProfile.companyName}</p>
      <img src={companyProfile.image} alt={`an image of the company ${companyProfile.companyName}`} />
      <HistoricalChart dataset={historical} />
      <div className={infoStyles.description}>
        <h2>Comapny Description</h2>
        {`${companyProfile.description}`}
      </div>
      <div className={infoStyles["info-container"]}>
        <p>
          <strong>Current stock price:</strong> {`${companyProfile.price} ${companyProfile.currency}`}
        </p>
        <p>
          <strong>Market Cap:</strong> {`${companyProfile.mktCap} ${companyProfile.currency}`}
        </p>
        <p>
          <strong>Exchange:</strong> {`${companyProfile.exchange}`}
        </p>
        <p>
          <strong>Industry:</strong> {`${companyProfile.industry}`}
        </p>
        <p>
          <strong>Their website:</strong> <a>{companyProfile.website}</a>
        </p>
        <p>
          <strong>Current CEO:</strong> {`${companyProfile.ceo}`}
        </p>
        <p>
          <strong>Location: </strong>
          {`${companyProfile.country} ${companyProfile.address} ${companyProfile.city}${companyProfile.state}`}
        </p>
        <p>
          <strong>Full-time employees:</strong> {`${companyProfile.fullTimeEmployees}`}
        </p>
        <p>
          <strong>IPO date:</strong> {`${companyProfile.ipoDate}`}
        </p>
      </div>
    </div>
  );

  function getProfile() {}

  async function getCompanyData(name) {
    const response = await fetch(apiURL + "/api/company-profile/" + name, {
      credentials: "include",
    });
    if (name != symbol) return;
    if (response.ok) {
      setCompanyProfile(await response.json());
    } else {
      alert("API used to fetch company profile has limited the data from this company :(");
    }
  }
  async function getHistorical(name) {
    const response = await fetch(apiURL + "/api/info/" + name, {
      credentials: "include",
    });
    if (name != symbol) return;
    if (response.ok) {
      setHistorical((await response.json()).historical);
    } else {
      // alert("an error has occured when getting company historical");
    }
  }
}
