class Github {
  constructor() {
    // this.client_id = 'a4ffc7bb61afa03e6bd0';
    // this.client_secret = '777de851aa4833981100b3fda900f69a888aa78e';
    this.token = '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';
    // ^ personal access token (classic)
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    // const profileResponse = await fetch(
    //   `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    // );
    // // ^ works with older github api (doesn't work anymore)

    const profileResponse = await fetch(
      `https://api.github.com/users/${user}`,
      {
        headers: {
          authorization: `token ${this.token}`,
        },
      }
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      {
        headers: {
          authorization: `token ${this.token}`,
        },
      }
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
