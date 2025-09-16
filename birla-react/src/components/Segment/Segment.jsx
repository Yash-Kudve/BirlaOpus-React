import s1 from '../../assets/images/segment1.png'
import s2 from '../../assets/images/segment2.png'
import s3 from '../../assets/images/segment3.png'
import s4 from '../../assets/images/segment4.png'
import s5 from '../../assets/images/segment5.png'
import s6 from '../../assets/images/segment6.png'
import s7 from '../../assets/images/segment7.png'
import './Segment.css';
const Segment = () => {
  return (
    <section className='segment-section'>
    <div className="card-segment">
        <img className='segment-img' src={s1} alt="" />
        <p className='segment-txt'>Education</p>
    </div>
    <div className="card-segment">
        <img className='segment-img' src={s2} alt="" />
        <p className='segment-txt'>Office</p>
    </div>
    <div className="card-segment">
        <img className='segment-img' src={s3} alt="" />
        <p className='segment-txt'>Residential</p>
    </div>
    <div className="card-segment">
        <img className='segment-img' src={s4} alt="" />
        <p className='segment-txt'>Infrastructure</p>
    </div>
    <div className="card-segment">
        <img className='segment-img' src={s5} alt="" />
        <p className='segment-txt'>Retail/Commercial</p>
    </div>
    <div className="card-segment">
        <img className='segment-img' src={s6} alt="" />
        <p className='segment-txt'>Healthcare</p>
    </div>
    <div className="card-segment">
        <img className='segment-img' src={s7} alt="" />
        <p className='segment-txt'>Hospitality</p>
    </div>
    </section>
  )
}

export default Segment