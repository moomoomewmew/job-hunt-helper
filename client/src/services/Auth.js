import Client from './api'

export const SignInUser = async (data) => {
    try {
        const res = await Client.post('/auth/login', data)
        localStorage.setItem('id', res.data.user.id)
        localStorage.setItem('token', res.data.token)
        return res.data.user
    } catch (error) {
        throw error
    }
}

export const RegisterUser = async (data) => {
    try {
        const res = await Client.post('/auth/register', data)
        return res.data
    } catch (error) {
        throw error
    }
}
export const DeleteUser = async (data) => {
    try {
        const res = await Client.delete('/auth/delete', data)
        return res.data
    } catch (error) {
        throw error
    }
}
export const CheckSession = async () => {
    try {
        // Checks if the current token if it exists is valid
        const res = await Client.get('/auth/session')
        return res.data
    } catch (error) {
        throw error
    }
}