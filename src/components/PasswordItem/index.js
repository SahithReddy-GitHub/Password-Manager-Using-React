import './index.css'

const PasswordItem = props => {
  const {data, isChecked, onDeleteClick} = props
  const {id, website, username, password, color} = data

  const onDelete = () => {
    onDeleteClick(id)
  }

  return (
    <li>
      <div className="icon" style={{backgroundColor: color}}>
        {website[0].toUpperCase()}
      </div>
      <div className="content">
        <p className="para">{website}</p>
        <p className="para">{username}</p>
        {isChecked ? (
          <p className="para">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-img"
          />
        )}
      </div>
      <button
        data-testid="delete"
        type="button"
        className="delete-btn"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
