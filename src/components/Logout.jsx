import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/authcontext';
const Logout = () => {
    const {logout} = useUser();
    const navigate = useNavigate();

    const logout1 = async () => {
        try {
            const res = await fetch('/logout', {
                method : "GET",
                headers : {
                    Accept : "application/json",
                    "Content-Type" : "application/json"
                },
                credentials : "include"
            });

            if(res.status === 401 || !res ){
                window.alert("Please Logout Later");
            }else{
                logout()
                navigate.push('/');
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        logout1();
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default Logout;