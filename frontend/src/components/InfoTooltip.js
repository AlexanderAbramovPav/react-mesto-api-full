function InfoTooltip(props) {
    return (
      <div className={props.isOpen ? `popup popup_opened` : `popup`} onClick={props.onOutClick}>
        <div className="popup__container">
            <img className="popup__icon" alt="tooltip icon" src={props.selectedTooltip?.icon}/>
            <h2 className="popup__title popup__title_align-middle">{props.selectedTooltip?.tipTitle}</h2>
            <button className="popup__close-btn" type="button" aria-label="Close Popup" onClick={props.onClose}></button>
        </div>
      </div>
    );
  }
  
  export default InfoTooltip;