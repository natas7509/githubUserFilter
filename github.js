class Github {
  constructor() {
    // THESE ARE FAKE!!!
    this.client_id = 'a71394259aec03d1cea3';
    this.client_secret = 'a28202377336e199cb554be099e6e5fe672788db';
    this.repos_count = 7;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    console.log(user);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}

// NEW GITHUB OAUTH FORMAT

// const auth = btoa(`${this.client_id}:${this.client_secret}`)

// fetch(`https://api.github.com/users/${encodeURIComponent(user)}`, {
//   headers: {
//     Authorization: `Basic ${auth}`
//   }
// })
