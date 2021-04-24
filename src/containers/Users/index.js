import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetch, collapse, remove } from '@actions/users';
import Table from '@components/table';
import Button from '@components/button';
import Layout from './layout';

class Users extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  get columns() {
    return [
      {
        title: '',
        style: { flex: '.3' },
        render: item => (
          <Button
            onClick={() => this.props.collapse(item.absolutePosition)}
            disabled={item.children.length < 1}
          >
            {
              (!item.collapsed && '+') || '-'
            }
          </Button>
        ),
      },
      {
        title: 'ID',
        style: { flex: '.3' },
        key: 'ID',
      },
      {
        title: 'Name',
        key: 'Name',
      },
      {
        title: 'City',
        key: 'City',
      },
      {
        title: 'Phone',
        key: 'Phone',
      },
      {
        title: 'Actions',
        style: { flex: '.3' },
        render: item => (
          <Button
            onClick={() => this.props.remove(item.absolutePosition)}
            type="default"
          >
            Remove
          </Button>
        ),
      },
    ];
  }

  render() {
    const { users } = this.props;

    return (
      <Layout title={`Users List (${users.itemCount})`}>
        <Table
          items={users.items}
          columns={this.columns}
        />
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetch,
    collapse,
    remove,
  }, dispatch);
}

Users.propTypes = {
  users: PropTypes.object,
  fetch: PropTypes.func,
  collapse: PropTypes.func,
  remove: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
