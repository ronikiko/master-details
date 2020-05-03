const UserData = require('../models/UsersData.json')

exports.getLogin = (req, res) => {
    res.render('login', { page: "login", title: "login Page" })
}

exports.postLogIn = (req, res) => {
    const { username, password } = req.body

    if (username === UserData.userName && password === UserData.password) {
        req.session.user = UserData
        return res.redirect('/users')
    }
    else {
        return res.redirect('/')
    }
}

exports.logout = (req, res) => {
    req.session.destroy()
    return res.redirect('/')
}