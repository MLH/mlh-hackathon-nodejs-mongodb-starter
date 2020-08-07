const axios = require('axios');

const apiUrl = 'https://api.github.com';
const authorizeUrl = 'https://github.com/login/oauth/authorize';
const tokenUrl = 'https://github.com/login/oauth/access_token';

class GitHub {
  constructor({ clientId = '', clientSecret = '', accessToken = '' }) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken;
  }

  authorizationUrl(scope = '') {
    return `${authorizeUrl}?client_id=${this.clientId}&client_secret=${this.clientSecret}&scope=${scope}`;
  }

  async getToken(code) {
    /* Fetch GitHub Access Token for GitHub OAuth */
    const config = { headers: { Accept: 'application/json' } };
    const params = {
      code,
      client_id: this.clientId,
      client_secret: this.clientSecret,
    };

    const { data } = await axios.post(tokenUrl, params, config);
    return data.access_token;
  }

  async get(routeUrl, params = {}) {
    const url = apiUrl + routeUrl;
    params.access_token = this.accessToken;

    const response = await axios.get(url, { params });
    return response.data;
  }

  static async getUserFromToken(accessToken) {
    /* Fetch user data using the access token. */
    const url = `${apiUrl}/user`;
    const config = { params: { accessToken } };

    const response = await axios.get(url, config);
    return response.data;
  }
}

module.exports = GitHub;
