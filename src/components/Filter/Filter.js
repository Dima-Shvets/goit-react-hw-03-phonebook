import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './Filter.module.scss';

const filterId = nanoid();

export class Filter extends Component {
  filterHandler = e => {
    const message = e.target.value;
    this.props.updateFilter(message);
  };

  render() {
    return (
      <>
        <label className={s.label} htmlFor={filterId}>
          Find contacts by name
        </label>
        <input
          className={s.input}
          id={filterId}
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.filterHandler}
        />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};
