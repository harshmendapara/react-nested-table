import React from 'react';
import PropTypes from 'prop-types';
import './row.scss';

const Row = ({ item, columns }) => (
  <div className="row-wrapper">
    <div className="row">
      {
        columns.map((column, index) => (
          <div className="col" key={index} style={{ ...column.style }}>
            {
              (column.render && column.render(item)) || item[column.key]
            }
          </div>
        ))
      }
    </div>
    {
      item.collapsed && item.children.map((row, index) => (
        <Row item={row} columns={columns} key={index}/>
      ))
    }
  </div>
);

Row.propTypes = {
  item: PropTypes.object,
  columns: PropTypes.array,
};

export default Row;
