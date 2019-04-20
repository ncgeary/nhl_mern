import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getItems} from '../../actions/itemActions';
import PropTypes from 'prop-types'
import BootstrapTable from 'react-bootstrap-table-next';
import { Container } from 'reactstrap';



class CurrentTable extends Component {

  componentDidMount() {
    this.props.getItems();    
  }


  render() {
    
    const { items } = this.props.item;
    // console.log({ items });

    const dig = this.props.item.items[0];
    console.log(dig);

    const keys = Object.keys(this.props.item.items[0]);
    console.log(keys)


    
    // react - bootstrap - table - next
    const columns = [
      {
        dataField: "key",
        text: "Key",
        formatter: (cellContent, row) => <div>{row}</div>
      },{
      dataField: 'team',
      text: 'Team',
      sort: true,
      formatter: (cellContent, row, rowIndex) => (
        Object.values(row.team)[rowIndex]                      
      )      
    }, {
      dataField: 'current_Rank',
      text: 'Current Rank',
      sort: true,
      formatter: (cellContent, row, rowIndex) => (
        Object.values(row.current_Rank)[rowIndex]
      )      
    }, {
      dataField: 'new_Rank',
      text: '321 Rank',
      sort: true,
      formatter: (cellContent, row, rowIndex) => (
        Object.values(row.new_Rank)[rowIndex]
      )
      }, {
        dataField: 'new_Record',
        text: 'Record',
        sort: true,
        formatter: (cellContent, row, rowIndex) => (
          Object.values(row.new_Record)[rowIndex]
        )
      }, {
        dataField: 'current_Points',
        text: 'Current Point Total',
        sort: true,
        formatter: (cellContent, row, rowIndex) => (
          Object.values(row.current_Points)[rowIndex]
        )
      }, {
        dataField: 'points',
        text: 'New Point Total',
        sort: true,
        formatter: (cellContent, row, rowIndex) => (
          Object.values(row.points)[rowIndex]
        )
      }, {
        dataField: 'conference',
        text: 'Conference',
        sort: true,
        formatter: (cellContent, row, rowIndex) => (
          Object.values(row.conference)[rowIndex]
        )
      }, {
        dataField: 'division',
        text: 'Division',
        sort: true,
        formatter: (cellContent, row, rowIndex) => (
          Object.values(row.division)[rowIndex]
        )
      }];

    return (
      <Container>
        <BootstrapTable
          keyField="team"
          data={items}
          columns={columns}
          striped
          hover />   

      </Container>
      
               
    )
  }
}

CurrentTable.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  }

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps,{ getItems })(CurrentTable);