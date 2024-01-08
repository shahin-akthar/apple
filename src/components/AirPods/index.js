import './index.css'

const AirPods = () => (
    <div className='bg-container'>
        <video muted preload='none' loop autoPlay className='video-container'>
            <source src="https://www.apple.com/105/media/us/airpods/2022/dc1310af-8cb9-4218-8d40-26bbe6a1d307/anim/hero/large_2x.mp4" type="video/mp4"/>
        </video>
        <div className='source1'>
            <h1 className='air-pods'>AirPods</h1>
            <p className='airpods-generation'>3rd Generation</p>
            <p className='airpods-generation'>From $149</p>
                <button className='airpods-buy'>
                    <a href='https://www.apple.com/shop/product/MPNY3AM/A/airpods-3rd-generation-with-lightning-charging-case' about='_blank'>Buy</a>
                </button>
        </div>
        <div className='source2'>
            <h1 className='air-pods'>AirPods</h1>
            <p className='airpods-generation'>2rd Generation</p>
            <p className='airpods-generation'>From $129</p>
                <button className='airpods-buy'>
                    <a href='https://www.apple.com/shop/product/MV7N2AM/A/airpods-with-charging-case' about='_blank'>Buy</a>
                </button>
        </div>
    </div>
)

export default AirPods