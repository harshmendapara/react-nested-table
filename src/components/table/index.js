import React from 'react';
import PropTypes from 'prop-types';
import Row from './row';
import './table.scss';

const Header = ({ columns }) => (
  <div className="row-wrapper">
    <div className="row">
      {
        columns.map((column, index) => (
          <div className="col" key={index} style={{ ...column.style }}>
            {column.title}
          </div>
        ))
      }
    </div>
  </div>
);

const Table = ({ items, columns }) => (
  <div className="table">
    <Header columns={columns} />
    {
      items.map((item, index) => (
        <Row item={item} columns={columns} key={index}/>
      ))
    }
  </div>
);

Header.propTypes = {
  columns: PropTypes.array,
};

Table.propTypes = {
  items: PropTypes.array,
  columns: PropTypes.array,
};

export default Table;
