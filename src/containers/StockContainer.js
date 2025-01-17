import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {

    const stocks = this.props.sortedStocks
    return (
      <div>
        <h2>Stocks</h2>
        {
          stocks.map(stock => <Stock stock={stock} key={stock.id} handleClick={() => this.props.buyStock(stock.id)} />)
        }
      </div>
    );
  }

}

export default StockContainer;
