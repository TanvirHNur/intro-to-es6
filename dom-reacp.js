// document.getElementById('border-btn').addEventListener('click', function(){
//   const container =  document.getElementById('container');
//   container.style.border = '3px solid red';
// })

document.getElementById('border-btn').addEventListener('click', function(){
  const container =  document.getElementById('container');
  container.style.border = '3px solid yellow';
})


// document.getElementById('bg-btn').addEventListener('click', function(){
//     const friend = document.getElementsByClassName('name');
//     friend.style.backgroundColor = 'blue'
// })

function bg(){
const friends = document.getElementsByClassName('friend');
for (const friend of friends){
    friend.style.backgroundColor = 'blue';
}
}

document.getElementById('friend-btn').addEventListener('click', function(){
    const container =  document.getElementById('container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `<h2 class="friend"> New friend-4</h2>
    <p>lorem2 lorem2</p>`;
    container.appendChild(friendDiv);
})