import { MainapiCall } from "../MAincall"
import { Wishlisturl } from "../url"

export const GetforDelete=async(id)=>{

await MainapiCall(`http://localhost:3000/wishlist/${id}`,"DELETE",null)

}