import './styles.css'
import illustre from './images/illustration-thank-you.svg'

export default function Thanks ({nota, setSubmit}) {

    return (
        <div className="container2">
            <div className="wrapper2">
                <div className="imageThanks">
                    <img src={illustre} />
                </div>
                <div className="youSelected">
                    {`You selected ${nota} out of 5`}
                </div>
                <div className="thankYouu">
                    Thank you!
                </div>
                <div className="weAp">
                 <div className="weAp1">
                    We appreciate you taking the time to give a
                 </div>
                 <div className="weAp2">
                    rating. If you ever need more support, don’t
                 </div>
                 <div className="weAp3">
                    hesitate to get in touch!
                 </div>
                </div>
                <button id='returnButton' onClick={() => setSubmit(false)}>RETURN</button>
            </div>
        </div>
        
    )
}