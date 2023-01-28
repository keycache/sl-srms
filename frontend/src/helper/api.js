export const get = async (url) => {
    return fetch(url)
} 
export const post = async (url, data, meta={}) => {
    return fetch(url, {
        ...meta,
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
}