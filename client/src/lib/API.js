import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    register: function (email, password, fullName, phone, position) {
      return axios.post('/api/users/register', { email, password, fullName, phone, position });
    },
    getRoster: function (fullName, position, phone, email) {
      return axios.get('/api/users/roster', { fullName, position, phone, email })
    }
  },

  Secrets: {
    getAll: function (authToken) {
      return axios.get('/api/secrets', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },

  Posts: {
    getPosts: function (title, post, date) {
      return axios.get('/api/posts', { title, post, date })
    }
  }
}
