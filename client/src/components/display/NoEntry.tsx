import { ExclamationCircleOutlined } from '@ant-design/icons'
import './Noentry.scss'
const NoEntry = (props: any) =>{ 
   

 return(
     <div className= 'div'>
         <div className='block'>
             <ExclamationCircleOutlined />
             <p><b> No entry has been selected yet! </b></p>
         </div>
     </div>
 )
}

export default NoEntry