
import { createContext, useEffect, useState } from "react";
import axios from 'axios'

const ProfileContext = createContext()

 export const ProfilePRovider = ({children}) =>{

    const [profile , setprofile] = useState({})
    const userDetail = localStorage.getItem("userInfo");
    const authentication = JSON.parse(userDetail);

    async function fetchProfileData() {
        try {
            const Response = await axios.get('https://primeshield-backend.onrender.com/getSpecificUser',{
                headers:{
                    Authorization:`Bearer ${authentication.token}`
                }
            })
            setprofile(Response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchProfileData()
    },[])

    return (
        <ProfileContext.Provider value={{profile}}>
            {children}
        </ProfileContext.Provider>
    );
 }

export default ProfileContext