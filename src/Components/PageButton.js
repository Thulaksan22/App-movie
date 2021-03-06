import React, { Component } from "react";

import { Pagination } from "react-bootstrap";

export default class PageButton extends Component {
  render() {
    return (
      <div>

          <Pagination>
            <Pagination.First/>
            <Pagination.Prev/>
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>

      </div>
    );
  }
}
