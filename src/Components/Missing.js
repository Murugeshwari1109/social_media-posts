import {Link} from 'react-router-dom'
const Missing = () => {
  return (
    <main className='Missing'>
        <h2>&#x1F61E;Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <p><Link to="/">Visit our HomePage</Link></p>
    </main>
  )
}

export default Missing