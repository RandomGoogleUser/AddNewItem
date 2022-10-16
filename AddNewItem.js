import React from 'react'
import PropTypes from 'prop-types'

class AddNewItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = { messages: [], message: '' }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      message: event.target.value
    })
  }

  handleClick() {
    this.setState(prevState => ({
      messages: [...prevState.messages, prevState.message],
      message: ''
    }))
  }
  
  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.message} />
        {
          this.state.messages.map((item, index) => {
            if (this.props.element === "p") {
              return <p key={`${item} ${index}`}>{item}</p>
            } else {
              return <div key={`${item} ${index}`}>{item}</div>
            }
          })
        }
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
}

AddNewItem.propTypes = {
  element: PropTypes.string
}

export { AddNewItem }