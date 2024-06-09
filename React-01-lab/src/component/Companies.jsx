
import Services from '../component/Services'
import Programers from '../component/Programers'

function Companies(props) {
  return (
    <>
    <div className='All1'>
    <h1>Company Name:{props.nameC} </h1>
    <p>Worker Number: {props.WN}</p>
    <p>Year of Founded: {props.YOF}</p>
    <Services services= {props.services} WP={props.WP}/>
    <Programers namep1 = {props.name1} Languages = {props.LP1} YearsofWork ={props.YOF1} company ={props.COM}/>
    <Programers namep1 = {props.name2} Languages = {props.LP2} YearsofWork ={props.YOF2} company ={props.COM2}/>
    <Programers namep1 = {props.name3} Languages = {props.LP3} YearsofWork ={props.YOF3} company ={props.COM3}/>

    </div>
    </>
  )
}

export default Companies