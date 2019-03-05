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
    getPosts: function (authToken) {
      return axios.get('/api/posts', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
    },
    sendPosts: function (title, post) {
      return axios.post('/api/posts', { title, post })
    }
  },

  Replies: {
    getReplies: function (authToken, id) {
      return axios.get(`/${id}/replies`, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      })
    },

    sendReply: function (fullName, text, id) {
      return axios.post(`/${id}/replies`, { fullName, text })
    }
  }
}
