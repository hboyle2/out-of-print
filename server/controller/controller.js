module.exports = {
    getList(req,res) {
        const db = req.app.get('db');
   
        db.items_list([])
        .then((items)=> { res.send(items);
       }).catch((err) => {console.log(err);});
         
       }
}