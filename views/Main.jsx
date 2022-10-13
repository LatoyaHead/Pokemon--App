const React = require('react')
const Pokemon = require('./Pokemon')

class Main extends React.Component {
  render() {
    console.log(this.props.pokemon);
    return (
      <div style={styles.parent}>
        <div style={styles.container}>
          <h1 style={styles.header}> See All The Pokemon!!!</h1>
          <Pokemon pokemon={this.props.pokemon}/>
        </div>
      </div>  
    )
  }
}

module.exports = Main


const styles = {
  parent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingTop: '50px'
  },

  container: {
    backgroundColor: 'skyBlue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '500px',
    borderRadius: '10px',
    padding: '20px'
  },

  header: {
    fontSize: '30px',
    color: 'white'
  },
}