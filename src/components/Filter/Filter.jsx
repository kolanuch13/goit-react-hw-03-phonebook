import React from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css';


const Filter = ({value, onChange}) => (
    <div className={css.filterWrapper}>
        <span>Search by Name</span>
        <input type="text" value={value} onChange={onChange} className={css.filterInput}/>
    </div>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default Filter;
