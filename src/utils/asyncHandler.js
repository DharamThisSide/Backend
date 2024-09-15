const asyncHandler = function(requestHandler)
{
    return function(req,res,next)
    {
        Promise.resolve(requestHandler(req,res,next))
        .catch(function(err){
            next(err);
        })
            
    }   
};

export {asyncHandler}





// function asyncHandler(fn) {
//     return async function(req, res, next) {
//         try {
//             // Wait for the passed function (fn) to complete
//             await fn(req, res, next);
//         } catch (err) {
//             // If an error happens, send an error response
//             res.status(err.code || 500).json({
//                 success: false,
//                 message: err.message
//             });
//         }
//     };
// }

// export { asyncHandler };
