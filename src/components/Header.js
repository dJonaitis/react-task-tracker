import Button from './Button'

export const Header = ({title, onAdd, showTaskAdd}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onAdd} text={showTaskAdd ? 'Close' : 'Add'}/>
        </header>
    )
}

Header.defaultProps = {
    text: 'header text not given',
}

export default Header