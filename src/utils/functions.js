export const findMaxId = (array) => array.reduce((curr,user)=>curr = curr>user.id ? curr : user.id, 0)

export const filterArrayById = (array, id) => array.filter(arr=>arr.id!==id)

export const sortArrayByValue = (array, order) => {
    if (order==="a-z") {
        return array.sort((a, b) => a.username.toLowerCase() > b.username.toLowerCase() ? 1 : -1)
    }
    return array.sort((a, b) => a.username.toLowerCase() < b.username.toLowerCase() ? 1 : -1)
}