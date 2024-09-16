import React, { useContext, useEffect, useState } from "react";
import StockTab from "../../components/StockTab";
import StockSearch from "../../components/StockSearch";
import { ApiContext } from "../../App";
import styles from "../../styles/sidebar.module.css";
import modalStyles from "../../styles/search-modal.module.css";
import StockInfo from "../../components/StockInfo.jsx";

export default function StockView() {
  const [stocks, setStocks] = useState([]);
  const [showStock, setShowStock] = useState(null);
  const apiURL = useContext(ApiContext);
  function openSearchModal(e) {
    document.querySelector("[data-modal]").showModal();
  }
  function handleCloseModal(e) {
    document.querySelector("[data-modal]").close();
  }
  async function addStock(stock) {
    const response = await fetch(apiURL + "/api/add-stock/" + stock.symbol, { credentials: "include", method: "post" });
    if (response.ok) {
      let stockPresent = false;
      stocks.forEach((element) => {
        if (element === stock.symbol) {
          stockPresent = true;
        }
      });
      if (stockPresent) return;
      setStocks((s) => {
        return [...s, stock.symbol];
      });
    } else {
      alert("an error has occured when adding the stock");
    }
  }
  async function getStocks() {
    const response = await fetch(apiURL + "/api/stock-list", {
      credentials: "include",
    });
    if (response.ok) {
      setStocks(await response.json());
    } else {
      alert("an error has occured when adding the stock");
    }
  }
  async function removeStock(stockName) {
    const response = await fetch(apiURL + "/api/delete-stock/" + stockName, {
      method: "delete",
      credentials: "include",
    });
    if (response.ok) {
      setStocks((s) => {
        const newStockList = [];
        for (let index = 0; index < s.length; index++) {
          if (s[index].toUpperCase() !== stockName.toUpperCase()) {
            newStockList.push(s[index]);
          }
        }
        return newStockList;
      });
    } else {
      alert("an error has occured when removing the stock");
    }
  }
  // set initial stock list
  useEffect(() => {
    getStocks();
  }, []);

  return (
    <div className={styles.main}>
      <aside className={styles.sidebar}>
        <ul>
          {stocks.map((stock, index) => {
            return (
              <li key={index}>
                <StockTab
                  stock={stock}
                  remove={() => {
                    removeStock(stock);
                  }}
                  selected={() => {
                    setShowStock(stock);
                  }}
                ></StockTab>
              </li>
            );
          })}

          <button onClick={openSearchModal}>&#43; &nbsp; Add new Stock</button>
        </ul>
        <dialog data-modal className={modalStyles.modal}>
          <StockSearch setChosenStock={addStock} exit={handleCloseModal} />
        </dialog>
      </aside>

      {showStock === null ? (
        <div className={styles["filler-message"]}>Select a stock to view its profile</div>
      ) : (
        <StockInfo symbol={showStock} />
      )}
    </div>
  );
}
