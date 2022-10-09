const React = require('react')

class Index extends React.Component {
  render() {
    console.log(this.props.pokemon);
    return (
      <div style={styles.container}>
        <h1 style={styles.header}> See All The Pokemon!!!</h1>

       <ul> 
        {
          this.props.pokemon.map((p,i) => {
            return (
              <li style={{textTransform:'capitalize'}}>
                <a href={`/pokemon/${i}`}>{p['name']}</a>
              </li>
            )
          })
        }
      </ul>
      </div>
    )
  }
}

module.exports = Index


const styles = {
  container: {
    backgroundColor: 'royalBlue'
  },

  header: {
    fontSize: '30px'
  }
}