import { ZodError, ZodIssue } from "zod"

 const handleZodValidateError=(err:ZodError)=>{
     
    const errorSource=err.issues.map((issue:ZodIssue)=>({
        path:issue?.path[issue.path.length-1] as string,
        message:issue.message
    }))
    
     const statusCode=400
     const message= 'zod Validation Error'

    return {
      statusCode,
      errorSource,
      message
    }

}

export default handleZodValidateError