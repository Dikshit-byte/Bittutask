import React from 'react'

function Data(props) {
    const {name,star_num1,star_num2,star_num3,person1,person2,person3} = props;
    let arr = [
        {
            user: 'amar',star_id1:"",star_id2:"",star_id3:"",star_val:0,star_val1:0,star_val2:0
        },
        {
            user: 'akbar',star_id1:"",star_id2:"",star_id3:"",star_val:0,star_val1:0,star_val2:0
        },
        {
            user: 'antony',star_id1:"",star_id2:"",star_id3:"",star_val:0,star_val1:0,star_val2:0
        },
        {
            user: 'john',star_id1:"",star_id2:"",star_id3:"",star_val:0,star_val1:0,star_val2:0
        },
        {
            user: 'paul',star_id1:"",star_id2:"",star_id3:"",star_val:0,star_val1:0,star_val2:0
        }
    ]
    var username = localStorage.getItem("user");
    for(let i=0; i<arr.length; i++){
        if(username === arr[i].user){
            arr[i].star_id1 = {person1}
            arr[i].star_id2 = {person2}
            arr[i].star_id3 = {person3}
            arr[i].star_val1 = {star_num1}
            arr[i].star_val2 = {star_num2}
            arr[i].star_val3 = {star_num3}
        }
    }
    // console.log(global.user);
    // console.log(username);
  return (
    <h1>hi</h1>
  )
}

export default Data;