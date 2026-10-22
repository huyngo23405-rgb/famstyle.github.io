/* A keyboard-only surprise. Never capture numbers entered into a form. */
(()=>{
 const code='12345',video='https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1';
 let typed='',lastKey=0;
 const reset=()=>{typed='';lastKey=0};
 document.addEventListener('keydown',event=>{
  const editing=event.composedPath().some(node=>node instanceof Element&&
   (node.isContentEditable||node.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="textbox"],[role="searchbox"],[role="combobox"],[role="spinbutton"]')));
  if(event.defaultPrevented||event.isComposing||event.ctrlKey||event.altKey||event.metaKey||event.shiftKey||editing||document.designMode==='on'){reset();return}
  if(event.repeat)return;
  if(event.timeStamp-lastKey>3000)typed='';
  lastKey=event.timeStamp;
  typed=code.startsWith(typed+event.key)?typed+event.key:event.key==='1'?'1':'';
  if(typed===code){reset();window.open(video,'_blank','noopener,noreferrer')}
 });
 window.addEventListener('blur',reset);
 window.addEventListener('hashchange',reset);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)reset()});
})();
