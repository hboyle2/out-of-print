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

        db.get_order([shipping ,billing, order_date, total])
        .then((order)=> { res.send(order);
       }).catch((err) => {console.log(err);});
    },

    checkuser(){
        const db = req.app.get('db');
        db.get_cart([1]).then((cart)=>{
          if(cart[0]){
            console.log('found cart!')
          } else{
              console.log('not found')
          } 
          
        })
    },


    addToCart(req,res){
        const db = req.app.get('db');
        const {user_id, product_id, qty} = req.body;
        db.get_cart([user_id]).then((cart)=>{
            if(cart[0]){
                // console.log(cart[0])
             db.check_duplicates([product_id, cart[0].id]).then((dup)=>{
                if(dup[0]){
                    console.log(dup[0].qty)

                    db.update_quantity([dup[0].qty + 1, dup[0].product_id]).then((bob)=>{
                       console.log(bob)
                       
                    })
                    console.log("duplicate!")
                } else {
                    console.log('nope')
                }
             })
            } else{
                console.log('not found')
            } 
          })
    }

}