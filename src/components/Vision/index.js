import './index.css'

const Vision = () => (
    <div className='vision-container'>
        <div className='container'>
        <h1 className='vis'>Apple Vision Pro</h1>
        <img src="https://www.apple.com/v/apple-vision-pro/b/images/overview/hero/portrait_base__bwsgtdddcl7m_small_2x.jpg" alt="vision2" className='small-vis-pic'/>
        <img src="https://www.apple.com/v/apple-vision-pro/b/images/overview/hero/portrait_base__bwsgtdddcl7m_large.jpg" alt="vision" className='vision-pic'/>
        </div>
        <div className='container2'>
            <h1 className='welcome'>Welcome to the era of spatial computing.</h1>
            <video muted preload='none' loop autoPlay className='video-container'>
            <source src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-spatial-computing/large.mp4" type="video/mp4"/>
           </video>
            <h1 className='welcome'>Apple Vision Pro seamlessly blends digital content with your physical space.</h1>
            <video muted preload='none' loop autoPlay className='video-container'>
            <source src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-digital-canvas/large.mp4" type="video/mp4"/>
        </video>
            <h1 className='welcome'>You navigate simply by using your eyes, hands, and voice</h1>
            <video muted preload='none' loop autoPlay className='video-container'>
            <source src="https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/foundation-inputs/large.mp4" type="video/mp4"/>
        </video>
        </div>
    </div>
)

export default Vision