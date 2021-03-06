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
       getMensTees(req,res) {
        const db = req.app.get('db');
   
        db.mens_tshirts([])
        .then((items)=> { res.send(items);
       }).catch((err) => {console.log(err);});
         
       },

     getItem(req,res) {
        const db = req.app.get('db');
         db.get_item([req.params.slug]).then((items)=>{
             res.send(items[0]);
         }).catch((err)=> {console.log(err)})
     },  
        
    addToCart(req,res){
        const db = req.app.get('db');
        const { product_id} = req.body;
        console.log("adfskj;fask", req.user)
        db.get_cart([req.user.id]).then((cart)=>{
            //get cart based on user
            if(cart[0]){
              //check if user exists already  
              //if item is already in the cart check for duplicates. If duplicated update qty
             db.check_duplicates([product_id, cart[0].id]).then((dup)=>{
                if(dup[0]){
                    console.log(dup[0].qty)

                    db.update_quantity([dup[0].qty + 1, dup[0].product_id]).then(()=>{
                     db.return_cart([cart[0].id]).then((cartItems)=>{
                         res.send(cartItems)
                     }).catch((err)=>{
                        console.log(err)
                    })
                       
                    }).catch((err)=>{
                        console.log(err)
                    })
                    console.log("duplicate!")
                //If the item is not in the cart add it to cart
                } else {
                    db.add_to_cart([product_id, cart[0].id]).then(()=>{
                        db.return_cart([cart[0].id]).then((cartItems)=>{
                            res.send(cartItems)
                        }).catch((err)=>{
                            console.log(err)
                        })
                    }).catch((err)=>{
                        console.log(err)
                    })
                }
             }).catch((err)=>{
                 console.log(err)
             })
            //If user has not purchased anything make a cart    
            } else{
              db.make_order([req.user.id]).then(()=>{
                    db.get_cart([req.user.id]).then((cart)=>{
                        console.log(cart)
                        db.add_to_cart([product_id, cart[0].id]).then(()=>{
                            db.return_cart([cart[0].id]).then((cartItems)=>{
                                res.send(cartItems)
                            }).catch((err)=>{
                                console.log(err)
                            })
                        }).catch((err)=>{
                            console.log(err)
                        })
                    }).catch((err)=>{
                        console.log(err)
                    })
                }).catch((err)=>{
                    console.log(err)
                })
            } 
        })
    },

   deleteItems(req,res){
    const db = req.app.get('db');
    db.get_cart([req.user.id]).then((order)=>{
        db.delete_item([req.params.id, order[0].id]).then(()=>{
            db.return_cart([order[0].id]).then((cartItems)=>{
                res.send(cartItems)
            })
        })
    })
  
   }


}
