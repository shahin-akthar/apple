import './index.css'

const Store = () => (
    <div className='store-container'>
        <div className='store-container2'>
                <h1 className='store'>Store.<span className='store-span'> The best way to buy the products you love.</span></h1>
            <div className='profile-section'>
                <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-chat-specialist-icon-202309_AV1?wid=70&hei=70&fmt=jpeg&qlt=90&.v=1701194050273" alt="profile" className='source'/>
                <div>
                    <p className='text'>Need shopping help?</p>
                    <a className='text2' href="https://contactretail.apple.com/Help" about='_blank'>Ask a Specialist</a>
                </div>
            </div>
        </div>
        <h1 className='largest'>The largest. <span className='span2'>Take a look at what's new, right now.</span></h1>
        <div className='cards'>
            <div className='mobile1'>
                <p>IPHONE 15 PRO</p>
                <h1>Titanium</h1>
                <p>From $999 or $41.62/mo. for 24 mo.</p>
            </div>
            <div className='mobile2'>
                <p>MACKBOOK PRO 14" AND16"</p>
                <h1>Mind-blowing</h1>
                <h1>Head-turning.</h1>
                <p>From $1599 or $133.25/mo. for 12 mo.</p>
            </div>
            <div className='mobile3'>
                <p>IPAD</p>
                <h1>Lovable. Drawable</h1>
                <h1>Magical.</h1>
                <p>From $449 or $37.41/mo. for 12 mo.</p>
            </div>
        </div>
        <h1 className='largest'>Help is here. <span className='span2'>Whenever and however you need it.</span></h1>
        <div className='cards'>
            <div className='c1'>
                <p className='apple'>APPLE SPECIALIST</p>
                <h1 className='shop'>Shop one on one with a Specialist. Online or in a store.</h1>
            </div>
            <div className='c2'>
                <p className='new'>NEW</p>
                <h1 className='shop2'>Shop with a Specialist over video.</h1>
                <p className='choose'>Choose your next device in a guided, one-way video session.</p>
            </div>
            <div className='c3'>
                <p className='apple'>TODAY AT APPLE</p>
                <h1 className='shop'>Join free sessions at your Apple Store.</h1>
                <p className=''>Learn about the latest features and how to go futher with your Apple devices.</p>
            </div>
        </div>
    </div>
)

export default Store