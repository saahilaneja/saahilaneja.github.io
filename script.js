const faces = [
    '(o_o)',
    '(^_^)',
    '(-_-)',
    '(>_<)',
    '(v_v)',
    '(*.*)',
    '(._.)',
    '(o_o)',
    '(@_@)',
    '(a_a)',
    '(-.-)',
    '(0_0)'
  ]
  
  const faceEl = document.getElementById('face')
  faceEl.textContent = faces[Math.floor(Math.random() * faces.length)]
  
  // cursor follow
  const cursor = document.getElementById('cursor-dot')
  document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
  })
  