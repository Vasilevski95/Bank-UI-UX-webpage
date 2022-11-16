import React from 'react'
import { card } from '../assets'
import styles, { layout} from '../style'
import Button from './Button'

const CardDeal = () => (
  
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          1. Check your credit <br />
          2. Identify which type of credit card you need <br />
          3. Narrow your choices by asking the right questions <br />
          4. Apply for the card that offers you the highest overall value 
        </p>
        <Button styles='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]'/>
      </div>
    </section>
  
)

export default CardDeal