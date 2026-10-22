/* Secret keyboard sequence and exact search query; other form fields stay excluded. */
(()=>{
 const code='12345',video='https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1';
 let typed='',lastKey=0;
 const reset=()=>{typed='';lastKey=0};
 const openVideo=()=>{reset();window.open(video,'_blank','noopener,noreferrer')};
 const searchMatches=new WeakMap();
 // Input events also cover mobile keyboards and pasting, without changing the query.
 document.addEventListener('input',event=>{
  const field=event.composedPath().find(node=>node instanceof Element&&node.matches('input[type="search"]'));
  if(!field||event.isComposing)return;
  reset();
  const matched=field.value.trim()===code,previous=searchMatches.get(field);
  searchMatches.set(field,matched);
  if(matched&&!previous)openVideo();
 });
 document.addEventListener('keydown',event=>{
  const editing=event.composedPath().some(node=>node instanceof Element&&
   (node.isContentEditable||node.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="textbox"],[role="searchbox"],[role="combobox"],[role="spinbutton"]')));
  if(event.defaultPrevented||event.isComposing||event.ctrlKey||event.altKey||event.metaKey||event.shiftKey||editing||document.designMode==='on'){reset();return}
  if(event.repeat)return;
  if(event.timeStamp-lastKey>3000)typed='';
  lastKey=event.timeStamp;
  typed=code.startsWith(typed+event.key)?typed+event.key:event.key==='1'?'1':'';
  if(typed===code)openVideo();
 });
 window.addEventListener('blur',reset);
 window.addEventListener('hashchange',reset);
 document.addEventListener('visibilitychange',()=>{if(document.hidden)reset()});
})();
