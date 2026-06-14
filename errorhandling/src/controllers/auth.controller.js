export async function registerController(req,res,next){
    try{
        // throw new Error('hello aa gya na error')
        

        if(!user){
            const error = new Error('user not found')
            error.statusCode = 404;
            return next(err)
        }

        res.json(user)
    }catch(err){
        err.statusCode = 400
        next(err)
    }
}