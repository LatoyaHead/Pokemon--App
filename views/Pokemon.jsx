const React = require('react')

const Pokemon = (props) => {
  return (
    <ul style={styles.ul}> 
      {
        props.pokemon.map((p,i) => {
          return (
            <li style={styles.listItem}>
              <a style={styles.anchor}href={`/pokemon/${i}`}>{p['name']}</a>
            </li>
          )
        })
      }
    </ul>
  )
}

module.exports = Pokemon

const styles = {
  listItem: {
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

  ul: {
    margin: '0',
    padding: '0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }
}
