export const fetchUsers = () => (
    $.ajax({
        url: '/api/users'
    })
)

export const fetchUser = userId => (
    $.ajax({
        url: `/api/users/${userId}`
    })
)

export const updateUser = user => (
    $.ajax({
        url: `/api/users/${user.get('user[id]')}`,
        method: 'PATCH',
        data: user,
        contentType: false,
        processData: false
    })
)