function handleKeyUp(e) {
  document.getElementById('title').innerText = e.target.value;
}

function handleClick(e) {
  document.getElementById('title').innerText += ' ' + e.target.textContent;
}

function handleMouseEnter(e) {
  e.target.classList.add('hover');
}

function handleMouseLeave(e) {
  e.target.classList.remove('hover');
}

function handleMouseDown(e) {
  e.target.classList.add('active');
}

function handleMouseUp(e) {
  e.target.classList.remove('active');
}

ReactDOM.render((
  <div>
    <input type="text" onKeyUp ={handleKeyUp} />
    <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>🤩</button>
    <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>🤯</button>
    <button onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>🤪</button>
  </div>
), document.querySelector('#root'));
