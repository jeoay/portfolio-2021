import utilStyles from '../styles/utils.module.css'
import Navigation from '../components/navigation'

export default function Bio() {
    return (
        <>
            <div className={utilStyles.container}>
                <h1>Biography</h1>
                <div className={utilStyles.grid}>
                    As a student in college I basically stumbled upon a love for programming and user experience. I always knew I wanted a career that was rewarding and made a difference in people's lives but didn’t necessarily know how I would do that. As I studied I realized there was so much room for improvement in how we experience technology as a whole. For the first time I knew exactly how I could help the world!

                    Working in the digital world I find myself in front a computer quite a bit. After work I like to get outside and away from technology for a little while. My beautiful wife and I like to take our two Australian Shepherds to the dog park or on walks to get away for a short mental vacation. We are lucky to live in a place with so much natural beauty around us.
            </div>

            </div>
            <Navigation />

        </>
    )
}