import { toast } from "react-hot-toast"

const getWishList=()=>{
    let wishList={}
    const storedList=localStorage.getItem('wish-list')
    if(storedList){
        wishList=JSON.parse(storedList)
    }
    return wishList
}

const addToLocalStorage=id=>{
    const wishList=getWishList()
    const added=wishList[id]
    if(!added){
        wishList[id]=1
        localStorage.setItem('wish-list', JSON.stringify(wishList))
        toast.success('The food has been added to your wishlist')
    }
    else{
        toast.error('The toy has been already added to your wishlist')
    }
   
}
export{
    getWishList,
    addToLocalStorage
}