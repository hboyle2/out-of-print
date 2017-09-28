module.exports = {
    getList(req,res) {
        const db = req.app.get('db');
   
        db.womens_tshirts([])
        .then((items)=> { res.send(items);
       }).catch((err) => {console.log(err);});
         
       },

     getItem(req,res) {
        const db = req.app.get('db');
         db.get_item([req.params.slug]).then((items)=>{
             res.send(items[0]);
         }).catch((err)=> {console.log(err)})
     }  
}