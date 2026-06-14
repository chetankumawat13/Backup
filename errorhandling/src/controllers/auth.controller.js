export async function registerController(req,res,next){
    try{
        throw new Error('hello aa gya na error')
    }catch(err){
        err.status = 400
        next(err)
    }
}