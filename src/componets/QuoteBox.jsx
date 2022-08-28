import React from 'react'

function QuoteBox({ Frase, Color, GetAll }) {

  let objColor = {
    color: Color
  }
  let objBackground = {
    backgroundColor: Color
  }

  return (
    <div className='all' style={objBackground}>
      <div className='cont_fr' style={objColor}>
        <div className='cont_i-frase'>
          <i className='bx bxs-quote-left'></i>
          <p className='frase'>{Frase.quote}</p>
        </div>
        <div className="author_tbn">
          <p className='author'>{Frase.author}</p>
          <button className='btn' style={objBackground} onClick={GetAll}>&gt;</button>
        </div>
      </div>
    </div>
  )
}

export default QuoteBox