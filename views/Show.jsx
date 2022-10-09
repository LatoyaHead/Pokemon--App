const React = require('react')

class Show extends React.Component {
  render() {
    console.log(this.props.id);
    return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.header}>"Gotta Catch 'Em All"</h1>
        <h2 style ={styles.name}>{this.props.pokemon[this.props.id].name}</h2>
        <img src={this.props.pokemon[this.props.id].img} alt="Pokemon" width='100%'  />
        <div style={styles.button}>
          <a style={styles.anchor}href="/pokemon">BACK</a>
        </div>
      </div>
    </div>
    )
  }
}

module.exports = Show

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', 
    paddingTop: '50px'
  },

  card: {
  width: '284px',
  padding: '10px 10px 20px 10px',
  border: '1px solid #BFBFBF',
  backgroundColor: 'skyblue',
  boxShadow: '0 0 5px 5px #ffcb05',
  transition: 'box-shadow  1s',
  },

  header: {
    fontSize: '25px',
    textAlign: 'center',
    
  },

  name: {
    fontSize: '25px',
    textAlign: 'center',
    textTransform:'capitalize',
  },

  button: {
    textTransform:'capitalize',
    listStyle: 'none',
    padding: '10px',
    border: '1px solid none',
    borderRadius: '8px',
    boxSizing: 'border-box',
    textAlign: 'center',
    fontSize: '26px',
    boxShadow: '3px 3px 3px #aaaaaa',
    backgroundColor: '#ffcb05',
    width: '100%'
  },

  anchor: {
    textDecoration: 'none',
    color: 'black',

  },

}