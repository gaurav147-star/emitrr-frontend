import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'25%'}}>

    <CircularProgress />
    </div>
    </>
  )
}

export default Loader