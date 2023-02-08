const authforadmin =(req,res,next)=>{
	
	try{

		
		if(req.userId=='63dea7ba05c2987741f9db00'){
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
