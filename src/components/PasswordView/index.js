import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import PasswordItem from '../PasswordItem'

class PasswordView extends Component {
  state = {
    passwordList: [],
    inputWebsite: '',
    inputUsername: '',
    inputPassword: '',
    inputSearch: '',
    isChecked: false,
  }

  onFormSubmit = event => {
    event.preventDefault()
    const colors = ['#f59e0b', '#10b981', '#f97316', '#14b8a6', '#b91c1c']
    const {
      inputPassword,
      inputUsername,
      inputWebsite,
      passwordList,
      inputSearch,
    } = this.state
    const newPassword = {
      id: uuidv4(),
      website: inputWebsite,
      username: inputUsername,
      password: inputPassword,
      color: colors[Math.floor(Math.random() * colors.length)],
    }
    if (inputPassword !== '' && inputWebsite !== '' && inputUsername !== '') {
      this.setState(prevState => ({
        passwordList: [...prevState.passwordList, newPassword],
        inputWebsite: '',
        inputUsername: '',
        inputPassword: '',
      }))
    }
  }

  onChangeWebsite = event => {
    this.setState({
      inputWebsite: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      inputUsername: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      inputPassword: event.target.value,
    })
  }

  onInputChange = event => {
    this.setState({inputSearch: event.target.value})
  }

  handleCheckboxChange = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onDeleteClick = id => {
    this.setState(prevState => ({
      passwordList: prevState.passwordList.filter(
        eachUser => eachUser.id !== id,
      ),
    }))
  }

  render() {
    const {
      passwordList,
      inputWebsite,
      inputSearch,
      inputUsername,
      inputPassword,
      isChecked,
    } = this.state
    const count = passwordList.length

    const filteredPasswords = passwordList.filter(each =>
      each.website.toLowerCase().includes(inputSearch),
    )

    return (
      <div className="bg-custom">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-img"
        />
        <div className="con1">
          <form className="form" onSubmit={this.onFormSubmit}>
            <h1 className="head">Add New Password</h1>
            <div className="form-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                alt="website"
                className="form-img"
              />
              <input
                type="text"
                value={inputWebsite}
                onChange={this.onChangeWebsite}
                className="form-input"
                placeholder="Enter Website"
              />
            </div>
            <div className="form-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                alt="username"
                className="form-img"
              />
              <input
                type="text"
                value={inputUsername}
                onChange={this.onChangeUsername}
                className="form-input"
                placeholder="Enter Username"
              />
            </div>
            <div className="form-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="form-img"
              />
              <input
                type="password"
                value={inputPassword}
                onChange={this.onChangePassword}
                className="form-input"
                placeholder="Enter Password"
              />
            </div>
            <button type="submit" className="submit-btn">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            className="password-img"
            alt="password manager"
          />
        </div>
        <div className="con2">
          <div className="card1">
            <div className="extra">
              <h1 className="head">Your Passwords</h1>
              <p className="span head">{count}</p>
            </div>
            <div className="form-con search-custom">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="form-img"
              />
              <input
                type="search"
                value={inputSearch}
                onChange={this.onInputChange}
                className="form-input"
                placeholder="Search"
              />
            </div>
          </div>
          <hr />
          <div className="showPass-con">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={this.handleCheckboxChange}
              id="show-pass"
            />
            <label htmlFor="show-pass" className="lable-show">
              Show Passwords
            </label>
          </div>
          <ul className="card2">
            {filteredPasswords.length === 0 ? (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-img"
                />
                <p className="no-pass-cus head">No Passwords</p>
              </div>
            ) : (
              filteredPasswords.map(eachPassWord => (
                <PasswordItem
                  data={eachPassWord}
                  key={eachPassWord.id}
                  isChecked={isChecked}
                  onDeleteClick={this.onDeleteClick}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordView
