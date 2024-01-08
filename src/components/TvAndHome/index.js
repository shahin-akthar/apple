import './index.css'

const TvAndHome = () => (
    <div className='tv-container'>
        <img src="https://www.apple.com/v/tv-home/k/images/overview/hero__dbphk49ymi2q_large.jpg" alt="home" className='tv-homepod'/>
        <h1 className='tv-heading'>The future hits home.</h1>
        <p className='para'>Simply connect your favorite devices and transform your house into a remarkably smart, convenient, and entertaining home. Elevate movie night with theater-like picture and sound. Play any song, in any room, from anywhere. And control lights, locks, and thernostats using Siri. All with the security and privacy of Apple.</p>
        <div className='cards'>
            <div className='tv-1'>
                <p className='tv-home'>HomePod</p>
                <p className='tv-sound'>Profound sound</p>
                <p className='tv-home'>$299</p>
                <div className='buttons'>
                    <button className='buy'>
                        <a href='https://www.apple.com/shop/buy-homepod/homepod' about='_blank'>Buy</a>
                    </button>
                    <a href='https://www.apple.com/homepod-2nd-generation/' about='_blank' className='learn'>Learn More</a>
                </div>
                <img src="https://www.apple.com/v/tv-home/k/images/overview/homepod__eam53jjm772a_large.jpg" alt="homepod" className='homepod'/>
            </div>
            <div className='tv-2'>
                <p className='tv-home'>HomePod mini</p>
                <p className='tv-sound'>Surprising sound for its size</p>
                <p className='tv-home'>$99</p>
                    <button className='buy2'>
                    <a href='https://www.apple.com/shop/buy-homepod/homepod-mini' about='_blank'>Buy</a>
                    </button>
                <img src="https://www.apple.com/v/tv-home/k/images/overview/room_filling_sound__zagu3551kwyi_large.jpg" alt="homepod" className='homepod'/>
            </div>
        </div>
    </div>
)

export default TvAndHome