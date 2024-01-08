import './index.css'

const Home = () => (
    <div className='bg-container'>
        <img src="https://www.apple.com/v/mac-mini/t/images/overview/hero_static__ehi2pbtt5toy_xlarge.jpg" alt="laptop" className='laptop-image'/>
        <h1 className='mac-mini'>Mac Mini</h1>
        <h1 className="more-muscle">More muscle.<br/>
        More hustle.
        </h1>
        <h1 className="description">Mac mini with M2 packs the speed you need to get more done faster.And M2 Pro takes it to a whole new level bringing a pro chip to Mac Mini for the first time. Add to that a versatile array of ports and you've got a desktop ready to flex in any setup, no matter which chip you choose</h1>
        <p className="price">From $599</p>
        <h1 className="supercharged">Supercharged By</h1>
        <div className='m2-boxes'>
            <div className="m2-box">
                <img src="https://www.apple.com/v/mac-mini/t/images/overview/m2__ervje1p52cya_large.png" alt="apple m2" className="m2-image"/>
                <p className="core1">8-core CPU
                <br/>
                10-core GPU
                <br/>
                Up to 24GB unified memory
                <br/>
                100GB/s memory bandwidth</p>
            </div>
            <div className="m2-box">
                <img src="https://www.apple.com/v/mac-mini/t/images/overview/m2_pro__bod7oesbsble_medium.png" alt="apple m2 pro" className="m2-image"/>
                <p className="core2">Up to 12-core CPU<br/>
                Up to 19-core GPU<br/>
                Up to 32GB unified memory<br/>
                200GB/s memory bandwidth</p>
            </div>
            </div>
            <p className="generation">The next generation of Apple silicon makes this the hardest-working Mac mini we've ever built. From rich presentaions to immersive gaming, M2 files through work and play. And M2 Pro crushes compute-intensive tasks like editing massive images and 8K ProRes video.</p>
            <button className="button">Go inside M2 and M2 Pro</button>
            <div className="speed-capability">
                <p className="speed">Speed and capability</p>
                <h1 className='compared'>Compared to Intel-based Mac mini</h1>
                <h1 className='compared'>Photo editing / Image upscaling / Video editing / Video transcoding / Code compiling / Productivity</h1>
                <h1 className='compared'>Faster filter and function performance in Photoshop</h1>
                <div className='hr-1'>
                    <div>
                        <hr className='line1'/>
                        <p className='home-mac'>Mac mini with M2 Pro</p>
                    </div>
                    <p className='num'>4.7X</p>
                </div>
                <div className='hr-2'>
                    <div>
                    <hr className='line2'/>
                    <p className='home-mac'>Mac mini with M2</p>
                    </div>
                    <p className='num2'>3.5X</p>
                </div>
                <div>
                    <hr className='line3'/>
                    <p className='home-mac'>Mac mini with M1</p>
                </div>
                <div>
                    <hr className='line4'/>
                    <p className='home-mac'>iMac 27-inch with Core i7 and Radeon Pro 5500XT</p>
                </div>
                <div>
                    <hr className='line5'/>
                    <p className='home-mac'>Mac mini with Core i7<br/>(baseline)</p>
                </div>
            </div>
            <div className='compatibility'>
                <div>
                <p className='compat'>Compatibility</p>
                <h1 className='mini-heading'>Mini does that.</h1>
                <p className='mac-para'>With macOS , your go-to apps run lightning fast on Mac mini--from Microsoft 65 to Adobe Creative Cloud to Zoom.And thousands of apps are optimized for M2 and M2 Pro.</p>
                </div>
                <img src='https://www.apple.com/v/mac-mini/t/images/overview/compatibility__fk6myv006fma_large.png' alt="mac mini" className='mini-mac'/>
            </div>
    </div>
)

export default Home