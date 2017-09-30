module.exports = {
    getWomensTees(req,res) {
        const db = req.app.get('db');
   
        db.womens_tshirts([])
        .then((items)=> { res.send(items);
       }).catch((err) => {console.log(err);});
         
       },
      
    getWomensSweatshirts(req,res) {
        const db = req.app.get('db');
   
        db.womens_sweatshirts([])
        .then((items)=> { res.send(items);
       }).catch((err) => {console.log(err);});
         
       },

     getItem(req,res) {
        const db = req.app.get('db');
         db.get_item([req.params.slug]).then((items)=>{
             res.send(items[0]);
         }).catch((err)=> {console.log(err)})
     },  
        getOrder(req,res){
        const db = req.app.get('db');
        const {shipping ,billing, order_date, total} =req.body;

        db.cart([shipping ,billing, order_date, total])
        .then((order)=> { res.send(order);
       }).catch((err) => {console.log(err);});
    }
}