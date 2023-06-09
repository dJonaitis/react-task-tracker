import React from 'react'

const Clock = () => {
  let today = new Date();
  let minutes;
  if(today.getMinutes() < 10){
    minutes = `0${today.getMinutes()}`;
  } else minutes = `${today.getMinutes()}`;
  let time = `The time is ${today.getHours()}:${minutes}:${today.getSeconds()}`;
  return (
    <div>{time}</div>
  )
}

export default Clock