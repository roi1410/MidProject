import { useParams } from 'react-router-dom';
import Marketing from '../components/Marketing'
import React from 'react'

const DegreePage = () => {
    const routeParams = useParams();
  return (
    <><Marketing profession={routeParams.degree} /></>
  )
}

export default DegreePage