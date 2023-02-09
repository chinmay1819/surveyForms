const authforadmin =(req,res,next)=>{
	
	try{

		
		if(req.userId=='63e488d7a3a2214042447f7b'){
            next();

		}
		else{

			res.status(401).json({message:"Unauthorized User"});

		}

	}
	catch(error){
		console.log(error);
		res.status(401).json({message:"Unauthorized User..."})
	
        }

}



module.exports=authforadmin;
