module.exports = function login() {
    var url = 'https://github.com/login/oauth/authorize'
    var scope = 'user:email'
    var clientID = process.env.GITHUB_CLIENT_ID
    return `<li class=nav-item><a href=${url}?scope=${scope}&client_id=${clientID}>login</a></li>`
}