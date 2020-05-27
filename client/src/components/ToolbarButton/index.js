import React from 'react';
import './ToolbarButton.css';

export default function ToolbarButton(props) {
  const { icon } = props;
  console.log(icon)
  return (
    <i className={`toolbar-button ${icon}`} />
  );
}