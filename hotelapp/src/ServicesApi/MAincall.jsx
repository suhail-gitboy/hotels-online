import axios from "axios"
import { method } from "lodash"



export const MainapiCall=async(Url,Method,Data)=>{

    const reqConfig={
        method:Method,
        url:Url,
        data:Data


    }

    return await axios(reqConfig).then(res=>res).catch(err=>err)


}