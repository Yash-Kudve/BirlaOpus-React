import s1 from '../../assets/images/segment1.png'
import s2 from '../../assets/images/segment2.png'
import s3 from '../../assets/images/segment3.png'
import s4 from '../../assets/images/segment4.png'
import s5 from '../../assets/images/segment5.png'
import s6 from '../../assets/images/segment6.png'
import s7 from '../../assets/images/segment7.png'
import './Segment.css';

const segments = [
    {img:s1, text:"Education"},
    {img:s2, text:"Office"},
    {img:s3, text:"Residential"},
    {img:s4, text:"Infrastructure"},
    {img:s5, text:"Retail/Commercial"},
    {img:s6, text:"Healthcare"},
    {img:s7, text:"Hospitality"},
]
const Segment = () => {
  return (
    <section className='segment-section'>
        {segments.map((item,index)=>(
            <div key={index} className="card-segment">
                <img className='segment-img' src={item.img} alt={item.text} />
                <p className='segment-txt'>{item.text}</p>
            </div>
        ))}
    </section>

  )
}

export default Segment;