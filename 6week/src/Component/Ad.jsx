import React from 'react';
import adImg from '../img/adimg.svg';

export default function Ad({showAd}) {
  return showAd ? (
    <img src={adImg} width='100%'alt="광고 이미지"/>
  ) : null;
}
