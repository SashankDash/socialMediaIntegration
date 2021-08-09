import User from '../models/userModel.js'

const userController = {
    async register(req,res,next){
        //check whether user is logged in or not
        if(!req.user){
            res.send( 'Not logged in, login with Google or facebook')
        }else{
        const userDetails = req.user['_json'];
        //  user exist or not  
        try {
            const data = await User.findOne({ email: userDetails.email });
            if(data){
            res.json({msg:"user already exist",user:data})
            }else{
                const registration = {
                    userId:userDetails.sub?userDetails.sub:userDetails.id,
                    name:userDetails.name,
                    email:userDetails.email,
                    ...(userDetails.picture && {picture:userDetails.picture}),
                    ...(userDetails.email_verified && {emailVerified:userDetails.email_verified})
                  }
                  const user = new User(registration);
                  try {
                      const result = await user.save();
                      res.json({user:result})
                      
                  } catch (error) {
                      console.log(error)
                  }

            }
            
          } catch (err) {
            console.log(err);
            res.json({error:err})
          }
          
        }
    }
}

export default userController;