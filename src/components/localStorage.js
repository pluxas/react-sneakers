export const getTodos = () => {
    const todos = localStorage.getItem('cart')
    // TODO Json.parse() = приобразует строку в объект
    // TODO Json.stringify() = приобразует объект в строку
    if(todos) {
        return JSON.parse(todos)
    }else {
        return []
    }
}

export const getProduct = () => {
    const product = localStorage.getItem('product')
    if(product) {
        return JSON.parse(product)
    }else {
        return []
    }
}

export const getFavorites = () => {
    const favorite = localStorage.getItem('favorite')
    if(favorite) {
        return JSON.parse(favorite)
    } else {
        return []
    }
}