export const getUsers = (req, res) => {
    res.status(200).json({
        message: 'Get Users'
    })
}

export const getUserById = (req, res) => {
    res.status(200).json({
        message: 'Get by id'
    })
}

export const addUser = (req, res) => {
    res.status(200).json({
        message: 'Add user'
    })
}

export const editUser = (req, res) => {
    res.status(200).json({
        message: 'Edit User'
    })
}

export const deleteUser = (req, res) => {
    res.status(200).json({
        message: 'Delete user'
    })
}