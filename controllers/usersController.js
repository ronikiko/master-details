const { getUsersApi, getUserById } = require('../models/UsersApi')

exports.getUsers = async (req, res) => {

    // call the function that grabs the all the users(limit by 10)
    // in the models folder
    // and passing the result to the router to display on the page
    const result = await getUsersApi()
    res.render('users', { page: 'users', title: 'users page', users: result.data })
}

exports.getUser = async (req, res) => {
    // get the id from the url example user/10 gets the number 10
    const id = req.params.id

    // call the function that grabs the user info by id
    // in the models folder
    // and passing the result to the router to display on the page
    const userInfo = await getUserById(id)
    res.render('user', { page: 'user', title: "User Page", user: req.session.user, userApi: userInfo.data })
}