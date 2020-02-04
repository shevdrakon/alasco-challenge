import fetch from 'isomorphic-fetch';

class CurrenciesRatesService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getRate(from, to) {
    const url = `${this.baseUrl}/latest?base=${from}&symbols=${to}`;

    const response = await fetch(url);
    const rate = await response.json();

    return {
      value: rate.rates[to],
      date: rate.date,
    }
  }
}

export default CurrenciesRatesService;

