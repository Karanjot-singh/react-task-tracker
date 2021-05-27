import PropTypes from 'prop-types'
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header>
            {/* <h1 style={headingtyle}>{title}</h1> */}
            <h1> {title}</h1>
            <Button text={!showAdd ? 'Add' : 'Close'} color={!showAdd ? 'green' : 'red'} onClick={onAdd} />
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
