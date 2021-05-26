import PropTypes from 'prop-types'
import Button from "./Button";
import Tasks from './Tasks';

const Header = ({ title }) => { 

    const onClick = () => {
        console.log('Click')
    }

    return (
        <header>
            {/* <h1 style={headingtyle}>{title}</h1> */}
            <h1> {title}</h1>
            <Button text='Add' onClick={onClick}/>  
            <Tasks/>
        </header>
    )
}
Header.defaultProps = { title: 'Task Tracker', }
Header.propTypes = { title: PropTypes.string, }

// const headingtyle={
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
