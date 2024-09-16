import React, { useContext, useState } from "react";
import { ApiContext } from "../App";
import modalStyles from "../styles/search-modal.module.css";

export default function StockSearch({ setChosenStock, exit }) {
  const [results, setResults] = useState([]);
  const apiURL = useContext(ApiContext);
  async function search(e) {
    const searchName = document.querySelector("#stockSearchBar").value;
    if (/\s/.test(searchName) || searchName === "") {
      alert("invalid search term");
      return;
    }
    const response = await fetch(apiURL + "/api/search-stocks/" + searchName, { credentials: "include" });
    if (response !== null && response.ok) {
      setResults(await response.json());
    } else {
      alert("an error has occured when searching for the stock");
    }
  }
  return (
    <div className={modalStyles.container}>
      <button className={modalStyles["close-button"]} onClick={exit}>
        &times;
      </button>
      <div className={modalStyles["search-bar"]}>
        <input className={modalStyles["search-input"]} type="text" id="stockSearchBar" />
        <button className={modalStyles["search-button"]} onClick={search}>
          Search
        </button>
      </div>
      <p>Search results:</p>
      <ul className={modalStyles["stock-results"]}>
        {results.map((stock, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                setChosenStock(stock);
                exit();
              }}
            >
              <p className={modalStyles["stock-symbol"]}>{stock.symbol}</p>
              <p className={modalStyles["stock-name"]}>{stock.name}</p>
              <p className={modalStyles["stock-exchange"]}>{stock.stockExchange}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
