import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Loader} from './'

export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status);
    const [childrens,setChildrens] = useState(null)

    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        else {
            setLoader(false)
            setChildrens(children)
        }
    }, [authStatus, navigate, authentication])

  return loader ? (
    <Loader />
) : <>{childrens}</>
}

