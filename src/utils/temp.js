import { places as destinations } from './destinations'



const routes = []
for (let i = 0; i < destinations.length; i++) {

    let tempObj = {}
    for (let j = 0; j < destinations.length; j++) {


        if (destinations[i].name !== destinations[j].name) {
            var a = { ...tempObj, [destinations[j].name]: Math.random * 100 }
            tempObj = a;
            // routes.push({ [destinations[i].name]: { [destinations[j].name]: 1 } })
        }


    }
    routes.push({ [destinations[i].name]: tempObj })
}

console.log(routes)


// const places = [{
    //     "name": "Dalaman",
    //     "type": "resort"
    // },
    // {
    //     "name": "Marmaris",
    //     "type": "resort"
    // },
    // {
    //     "name": "Icmeler",
    //     "type": "resort"
    // }]