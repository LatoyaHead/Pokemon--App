const React = require('react')

class Show extends React.Component {
  render() {
    console.log(this.props.id);
    return (
      <div>
        <h1>"Gotta Catch 'Em All"</h1>
        <h2>{this.props.pokemon[this.props.id].name}</h2>
        <img src={this.props.pokemon[this.props.id].img} alt="Pokemon"  />
        <a href="/pokemon">BACK</a>
      </div>
    )
  }
}

module.exports = Show