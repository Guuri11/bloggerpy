import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    toggle: boolean,
    handleToggle: ()=> void
}

function MenuToggle(props:Props) {

    const { toggle, handleToggle } = props;

    return (
        <div className={`menu-toggle fas fa-${toggle ? "times":"bars active"}`} onClick={handleToggle} ></div>
    )
}

MenuToggle.propTypes = {
    toggle: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired
}

export default MenuToggle

