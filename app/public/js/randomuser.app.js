var randomUser = new Vue({
  el: '#randomUser',
  data: {
    users: []
  },
  methods: {
    fetchUsers() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {randomUser.users = json});

    },
    norefresh() {
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(json => {randomUser.users = json});
    }
  },

  created() {
    this.fetchUsers()
  }
});
