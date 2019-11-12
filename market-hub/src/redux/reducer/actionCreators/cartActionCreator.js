export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}

export const removeItem = (item) => ({
     type: 'REMOVE_ITEM',
     payload: item
    })

export const removeSingleItem = item => ({
    type: 'REMOVE_SINGLE',
    payload: item
})