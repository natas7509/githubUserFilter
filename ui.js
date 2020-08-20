class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
<div class="profile-container">
  <div class="profile-img">
    <img src="${user.avatar_url}">
    <a href="${user.html_url}" target="_blank">View Profile</a>
  </div>
 
 
  <div info-wrapper>
    <div class="button-box">
      <button class="btn">Public Repos: ${user.public_repos}</button>
      <button class="btn">Public Gists: ${user.public_gists}</button>
      <button class="btn">Followers: ${user.followers}</button>
      <button class="btn">Following: ${user.following}</button>
    </div>
    <div class="info-heading">
      <h2>Info</h2>
    </div>
    <div class="cards">
      <div class="card-info">
        <h2>Company: ${user.company}</h2>
      </div>
      <div class="card-info">
        <h2>Website: ${user.website}</h2>
      </div>
      <div class="card-info">
        <h2>Location: ${user.location}</h2>
      </div>
      <div class="card-info">
        <h2>Member Since: ${user.created_at}</h2>
      </div>
    </div>
  </div>
</div>

<div class="repo-container">
    <div class="repo-heading">
        <h2>Latest Repos</h2>
    </div>

    <div id="repos"></div>
</div>
`;
  }

  // Show Repos
  showRepos(repos) {
    let output = '';

    repos.forEach(function (repo) {
      output += `
    <div class="container">
      <div class="search">
        <div class="repo-title">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
          <button class="btn">Stars: ${repo.stargazers_count}</button>
          <button class="btn">Watchers: ${repo.watchers_count}</button>
          <button class="btn">Forks: ${repo.forks_count}</button>
        </div>
      </div>
    </div>
      `;
    });
    // output repositories
    document.getElementById('repos').innerHTML = output;
  }

  // Show Alert Message
  showAlert(message, className) {
    // clear remaining alerts
    this.clearAlert();
    const div = document.createElement('div');
    // Add Classes
    div.className = className;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector('.searchContainer');
    //  Get Search Box
    const search = document.querySelector('.search');
    // Insert Alert
    container.insertBefore(div, search);

    //  remove after 2 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  // clear alert
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = '';
  }
}
