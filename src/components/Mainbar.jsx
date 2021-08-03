import React from 'react'
import '../index.css'

const Mainbar = () => {
    return (
      <div className="container p-5">
        <div className="position-fixed top-30 chat-screen-box p-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perspiciatis! Quidem deleniti, voluptas soluta animi tempora ut ducimus! Ex saepe vitae maiores fugit cumque eius eveniet incidunt nemo natus est.
        </div>
        <div className="position-fixed bottom-0 top-90 chat-input-box">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span className="input-group-text" id="basic-addon2">Send</span>
          </div>
        </div>
      </div>
    )
}

export default Mainbar
