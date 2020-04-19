const URL = process.env.GATSBY_API_URL

const api = {
    save: async (body) => {
        return fetch(`${URL}/save`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    },
    read: async (body) => {
        return fetch(`${URL}/read`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export default api