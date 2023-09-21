import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export default class LanguageSelector extends React.Component {
  render() {
    return <Dropdown>
      <Dropdown.Toggle variant="success" size="sm">
        Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>HTML</Dropdown.Item>
        <Dropdown.Item>CSS</Dropdown.Item>
        <Dropdown.Item>JS</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>;
  }
}
