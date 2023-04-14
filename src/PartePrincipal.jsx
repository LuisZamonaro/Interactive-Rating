import starIcon from './images/icon-star.svg'
import { useState } from 'react'
import Thanks from './ThankYou'

export default function PartePrincipal () {

    const [mudar, setMudar] = useState(null)
    const [submit, setSubmit] = useState(false);

    return (
        <div className="container">
        <div className={`wrapper1 ${submit ? 'active' : ''}`}>
          {/* se eu clicar, vai ativar */}
          <div className="imageIcon">
            <img id='starIcon' src={starIcon} />
          </div>
          <div className="howDid">
            How did we do?
          </div>
          <div className="please">
          <p>Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!</p>
          </div>
          <div className="buttons">
            <button className={`buttonClass ${mudar === 1 ? 'active' : ''}`} id='button1' onClick={() => setMudar(1)}>1</button>
            <button className={`buttonClass ${mudar === 2 ? 'active' : ''}`} id='button2' onClick={() => setMudar(2)}>2</button>
            <button className={`buttonClass ${mudar === 3 ? 'active' : ''}`} id='button3' onClick={() => setMudar(3)}>3</button>
            <button className={`buttonClass ${mudar === 4 ? 'active' : ''}`} id='button4' onClick={() => setMudar(4)}>4</button>
            <button className={`buttonClass ${mudar === 5 ? 'active' : ''}`} id='button5' onClick={() => setMudar(5)}>5</button>
          </div>
          <div className="buttonSub">
            <button id='subButton' onClick={() => setSubmit(true)}>SUBMIT</button>
          </div>
        </div>
        {
          submit && (<Thanks nota={mudar} setSubmit={setSubmit}/>)
        }
        {/* se o mudar estivar ativo (12345) o nota é pra mudar a frase */}
    </div>
    )
}