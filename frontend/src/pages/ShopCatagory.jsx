import {MenCatagories,WomenCatagories,KidsCatagories} from '../components/catagory/Catagories'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { fetchProducts } from '../actions/product'

export const MenShopCatagory = () => {
  return (
    <>
  <MenCatagories/>
    </>
  )
}
export const WomenShopCatagory = () => {
  const dispatch=useDispatch()
useEffect(() => {
  dispatch(fetchProducts())
},[dispatch])

  return (
    <>
  <WomenCatagories/>
    </>
  )
}
export const KidsShopCatagory = () => {
  const dispatch=useDispatch()
  useEffect(() => {
  dispatch(fetchProducts())
},[dispatch])

  return (
    <>
  <KidsCatagories/>
    </>
  )
}

