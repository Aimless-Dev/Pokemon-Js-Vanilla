export const fetchData = async ( url ) => {
    const resp = await fetch(url)
    return resp.json()
}