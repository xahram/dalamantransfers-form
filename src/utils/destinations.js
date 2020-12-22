export const places = [

    {
        "name": "Dalaman",
        "type": "resort"
    },
    {
        "name": "Marmaris",
        "type": "resort"
    },
    {
        "name": "Icmeler",
        "type": "resort"
    },
    {
        "name": "Oludeniz",
        "type": "resort"
    },
    {
        "name": "Calis Beach",
        "type": "resort"
    },
    {
        "name": "Marmaris Netsel Marina",
        "type": "resort"
    },
    {
        "name": "Marmaris Yacht Marina",
        "type": "resort"
    },
    {
        "name": "Marmaris Adakoy Marina",
        "type": "resort"
    },
    {
        "name": "Fethiye",
        "type": "resort"
    },
    {
        "name": "Fethiye Hisaronu",
        "type": "resort"
    },
    {
        "name": "Fethiye Ovacik",
        "type": "resort"
    },
    {
        "name": "Gocek",
        "type": "resort"
    },
    {
        "name": "Dalyan",
        "type": "resort"
    },
    {
        "name": "Sarigerme Hilton Hotel",
        "type": "resort"
    },
    {
        "name": "Akyaka",
        "type": "resort"
    },
    {
        "name": "Angels Peninsula Hotel",
        "type": "resort"
    },
    {
        "name": "Bozburun",
        "type": "resort"
    },
    {
        "name": "D Maris Bay",
        "type": "resort"
    },
    {
        "name": "Dalaman Town",
        "type": "resort"
    },
    {
        "name": "Datca",
        "type": "resort"
    },
    {
        "name": "Datca Aktur",
        "type": "resort"
    },
    {
        "name": "Ekincik",
        "type": "resort"
    },
    {
        "name": "Faralya",
        "type": "resort"
    },
    {
        "name": "Fethiye Barut Sensatori",
        "type": "resort"
    },
    {
        "name": "Fethiye Bay Beach Club",
        "type": "resort"
    },
    {
        "name": "Fethiye Ciftlik",
        "type": "resort"
    },
    {
        "name": "Fethiye Sentido Lykia Resort",
        "type": "resort"
    },
    {
        "name": "Fethiye Ece Saray Marina",
        "type": "resort"
    },
    {
        "name": "Fethiye Hillside Beach Club",
        "type": "resort"
    },
    {
        "name": "Fethiye Jiva Beach Resort",
        "type": "resort"
    },
    {
        "name": "Fethiye Kabak Valley",
        "type": "resort"
    },
    {
        "name": "Fethiye Kayakoy",
        "type": "resort"
    },
    {
        "name": "Fethiye Letoonia Hotel",
        "type": "resort"
    },
    {
        "name": "Fethiye Lykia Botanika Beach",
        "type": "resort"
    },
    {
        "name": "Fethiye Majesty Club Tuana",
        "type": "resort"
    },
    {
        "name": "Fethiye Ocean Beach Club",
        "type": "resort"
    },
    {
        "name": "Fethiye Sunset Beach Club",
        "type": "resort"
    },
    {
        "name": "Fethiye Uzumlu",
        "type": "resort"
    },
    {
        "name": "Gocek Club Marina",
        "type": "resort"
    },
    {
        "name": "Gocek Exclusive Marina",
        "type": "resort"
    },
    {
        "name": "Gocek Skopea Marina",
        "type": "resort"
    },
    {
        "name": "Gocek Village Port",
        "type": "resort"
    },
    {
        "name": "Kalkan",
        "type": "resort"
    },
    {
        "name": "Karaca",
        "type": "resort"
    },
    {
        "name": "Kas",
        "type": "resort"
    },
    {
        "name": "Koycegiz",
        "type": "resort"
    },
    {
        "name": "Marmaris Albatros Marina",
        "type": "resort"
    },
    {
        "name": "Marmaris Bordubet",
        "type": "resort"
    },
    {
        "name": "Marmaris Ciftlik",
        "type": "resort"
    },
    {
        "name": "Marmaris Cruise Port",
        "type": "resort"
    },
    {
        "name": "Marmaris Hisaronu",
        "type": "resort"
    },
    {
        "name": "Marmaris Club Sei",
        "type": "resort"
    },
    {
        "name": "Marmaris Joya Del Mar Hotel",
        "type": "resort"
    },
    {
        "name": "Marmaris Pupa Marina",
        "type": "resort"
    },
    {
        "name": "Orhaniye",
        "type": "resort"
    },
    {
        "name": "Orhaniye Marti Hemithea",
        "type": "resort"
    },
    {
        "name": "Orhaniye Marti Marina",
        "type": "resort"
    },
    {
        "name": "Orhaniye Palmiye Marina",
        "type": "resort"
    },
    {
        "name": "Patara",
        "type": "resort"
    },
    {
        "name": "Sarigerme",
        "type": "resort"
    },
    {
        "name": "Selimiye",
        "type": "resort"
    },
    {
        "name": "Sogutkoy",
        "type": "resort"
    },
    {
        "name": "Turunc",
        "type": "resort"
    },
    {
        "name": "Turunc Kumlubuk",
        "type": "resort"
    },
    {
        "name": "Sarsala",
        "type": "resort"
    }
]

const routes = []
for (let i = 0; i < places.length; i++) {
    for (let j = 0; j < places.length; j++) {
        if (places[i] !== places[j]) {
            routes.push({ from: places[i], to: places[j] })
        }

    }
}

// export const destinations = [
//     { name: "Dalaman", type: "resort" },
//     { name: "Marmaris", type: "resort" },
//     { name: "Icemeler", type: "resort" },
//     { name: "Oludeniz", type: "resort" },
//     { name: "Calls Beach", type: "resort" },
//     { name: "Marmaris Netsel Marina", type: "resort" },
//     { name: "Marmaris Yacht Marina", type: "resort" },
//     { name: "Marmaris Adakoy Marina", type: "resort" },
//     { name: "Fethiye", type: "resort" },
//     { name: "Fethiye Hisaronu", type: "resort" },
//     { name: "Fethiye Ovacik", type: "resort" },
//     { name: "Gocek", type: "resort" },
//     { name: "Dalyan", type: "resort" },
//     { name: "Sarsala", type: "resort" },
//     { name: "Bozburen", type: "resort" },
//     { name: "Bozburen", type: "resort" },
//     { name: "D Maris Bay", type: "resort" },
//     { name: "D Maris Bay", type: "resort" },
// ]



// Web scrapping from https://www.dalamantransfers.co.uk/
// var options = document.querySelectorAll("#row_1_select option")

// var names = []
// for (let i=0;i<options.length;i++){
//         names.push({name:options[i].innerText, type:"resort"})
// }
// console.log(names)