import './index.css'

const Mac = () => (
    <div className='bg-container'>
        <div className='mac-iphone'>
            <h1 className='mac'>Mac</h1>
            <p className='dream'>If you can dream it, Mac can do it.</p>
        </div>
        <video muted preload='none' loop autoPlay className='video-container'>
            <source src="https://www.apple.com/105/media/us/mac/family/2023/1b2bbf5c-ddc5-44a1-9dfb-7a51c49143fa/anim/welcome/xlarge_2x.mp4" type="video/mp4"/>
        </video>
        <h1 className='know'>Get to Know Mac</h1>
        <div className='cards'>
        <div className='hello'>
                <p className='started'>Getting Started</p>
                <h1 className='easy'>Easy to use. Easy to love.</h1>
            </div>
            <div className='performance'>
                <p className='started'>Performance and Battery Life</p>
                <h1 className='easy'>Go fast.Go far.</h1>
            </div>
            <div className='team'>
                <p className='started'>Mac and iPhone</p>
                <h1 className='easy'>Dream team.</h1>
            </div>
        </div>
    </div>
)

export default Mac