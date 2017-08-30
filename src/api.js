function fetchItem(){
    return new Promise((reject, resolve) => {

        setTimeout(() => {
            resolve({
                "item": {
                    "name": "First item",
                    "id": 1
                }
            });
        }, 800);
    })
}

export default { fetchItem }
