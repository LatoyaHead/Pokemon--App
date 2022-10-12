const React = require('react')

class New extends React.Component {
  render(){
    return(
      <div>
        <h1>Add New Pokemon</h1>

        <form action="/pokemon" method="POST">
          Name: <input type="text" name="name" />
          <br />
          <input type="submit" value="Create New Pokemon" />
        </form>
      </div>
    )
  }
}

module.exports = New;