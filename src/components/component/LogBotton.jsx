import React from 'react';
import '../../assets/styles/style.css'
import { func, string } from 'prop-types';

export default function LogButton(props) {
  const { label, onPress } = props;
  return (
    <button className="LogBottonContainer " onClick={onPress}>
      <p className="LogBottonLabel">{ label }</p>
    </button>
  );
}
LogButton.propTypes = {
  label: string.isRequired,
  onPress: func,
};

LogButton.defaultProps = {
  onPress: null,
};
