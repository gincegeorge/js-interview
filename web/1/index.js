const endpoints = [
    "https://dummyjson.com/products/1",
    "https://dummyjson.com/products/2",
    "https://dummyjson.com/products/3",
    "https://dummyjson.com/products/4",
    "https://dummyjson.com/products/5",
    "https://dummyjson.com/products/6",
    "https://dummyjson.com/products/7",
    "https://dummyjson.com/products/8",
    "https://dummyjson.com/products/9",
    "https://dummyjson.com/products/10",
    "https://dummyjson.com/products/11",
    "https://dummyjson.com/products/12",
    "https://dummyjson.com/products/13",
    "https://dummyjson.com/products/14",
    "https://dummyjson.com/products/15",
    "https://dummyjson.com/products/16",
    "https://dummyjson.com/products/17",
    "https://dummyjson.com/products/18",
    "https://dummyjson.com/products/19",
    "https://dummyjson.com/products/20"
]

const getData = async (urls) => {

    let urlData = []

    //iterate through the array to fetch data
    for (i = 0; i < urls.length; i++) {
        const res = await fetch(urls[i])
        let jsonData = await res.json()
        jsonData = { "title": jsonData.title, "price": jsonData.price }

        urlData = [...urlData, { ...jsonData }]
    }

    // sort the array of objects
    urlData.sort(function (a, b) {
        if (a.price < b.price) {
            return -1;
        }
    })

    console.log(urlData);

}

getData(endpoints)
