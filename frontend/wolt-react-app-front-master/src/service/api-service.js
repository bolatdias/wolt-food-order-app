class ApiService {
  API_BASE = 'https://api.spoonacular.com';
  API_KEY = '04db5df463a241d3a6f97028be8aa78e';
  API_KEY2 = '8e05f01a57894b18aaab36e269b831ce';
  API_KEY3 = '66906915976a4c75a53c2f37da4b942a'
  API_KEY4 = '3be16363768148e2a663360694a41edd';

  getResource = async ({ url }) => {
    const res = await fetch(`${this.API_BASE}${url}&apiKey=${this.API_KEY2}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  searchMenuItem = async ({ query, number }) => {
    const url = `/food/menuItems/search?query=${query}&number=${number}`;

    const res = await this.getResource({ url });
    return res;
  };

  searchMenuItemByUrl = async ({ path, number }) => {
    const url = `/food/menuItems/search?${path}&number=${number}`;

    const res = await this.getResource({ url });
    return res;
  };

  getDetailById = async ({ id }) => {
    const url = `/food/menuItems/${id}?apiKey=${this.API_KEY4}`;
  
    const res = await this.getResource({ url });
    return res;
  };
}

const apiService = new ApiService();

export default apiService;
