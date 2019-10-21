import {app, db} from "./base"
export const fetchProjectsFor = async username => {
    return db.collection("portfolio").doc(username).get().then(
        resultSet => {
            console.log({
                resultSet: resultSet.data()
            })
            return resultSet.data()
        }
    ).catch(
        (err) => {
            console.log({err})
        }
    )
}







export const fetchProjectsFor2 = async username => {
    return [
        {
            title: "näyte1",
            description: "Bear claw powder dragée tootsie roll sweet. Fruitcake topping jelly beans topping jelly. Topping candy canes macaroon. Marzipan powder marshmallow jelly gingerbread soufflé candy canes. Jelly-o brownie ice cream cheesecake. Jelly beans caramels croissant biscuit biscuit candy gummies. Lollipop muffin candy canes. Oat cake donut sugar plum caramels cotton candy cookie wafer donut. Lollipop jelly beans biscuit biscuit candy. Brownie sugar plum chocolate bar pastry powder. Powder jujubes biscuit lollipop tootsie roll candy canes. Biscuit macaroon ice cream. Dragée dessert gummi bears. Soufflé topping cake tiramisu cupcake sweet chupa chups.",
            tags: ["eka","toka","kolmas"]
        },
        {
            title: "näyte2",
            description: "Gummies wafer chocolate dragée candy donut. Cupcake candy tart gingerbread topping sweet roll cookie chupa chups. Biscuit donut lemon drops pudding sesame snaps. Gingerbread pudding cake croissant cheesecake. Lollipop cheesecake donut wafer. Sesame snaps candy canes candy canes pastry powder cheesecake cookie soufflé candy canes. Lemon drops chocolate bar soufflé. Tootsie roll candy biscuit muffin chupa chups. Dessert lollipop cheesecake gummies. Jelly-o sweet roll donut jelly beans topping topping sesame snaps cake pie. Sweet roll sweet tart. Dragée tart cotton candy."
        },
        {
            title: "näyte3",
            description: "Topping apple pie cake carrot cake chocolate cake. Tootsie roll gingerbread gummi bears brownie bear claw jelly beans icing. Wafer marzipan gingerbread toffee icing dessert chocolate cake gummies. Ice cream halvah tootsie roll jelly tart chocolate cake candy canes. Dragée chocolate cake pastry chupa chups chocolate. Candy canes apple pie tiramisu fruitcake wafer. Muffin sweet muffin muffin. Chupa chups bonbon chupa chups cupcake. Topping topping sesame snaps. Cheesecake sweet roll tart biscuit chocolate cake jelly beans soufflé. Chocolate lemon drops marshmallow lollipop halvah sugar plum pudding. Dragée chocolate bar jelly gummi bears sweet candy chupa chups marzipan. Sugar plum marshmallow liquorice chocolate oat cake chocolate bar croissant gingerbread marzipan."
        },
        {
            title: "näyte4",
            description: "Tiramisu sugar plum liquorice icing apple pie. Cheesecake chocolate gummies. Lemon drops gummies lollipop cake sesame snaps cupcake tootsie roll brownie soufflé. Sweet sweet halvah ice cream chocolate bar bonbon. Oat cake carrot cake powder sweet roll cake. Gummies jelly-o marzipan. Liquorice dragée marzipan. Wafer jujubes cake cupcake. Pie cake muffin. Cake donut cotton candy cookie. Icing brownie donut gummies tart macaroon donut danish. Toffee gummies jujubes tiramisu candy canes. Tootsie roll topping tiramisu chocolate cake soufflé."
        },
    ]
}