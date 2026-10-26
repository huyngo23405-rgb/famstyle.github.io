/* Demonstration only: deterministic help, in-memory history, no network or staff impersonation. */
(()=>{
 'use strict';
 const words={
  title:['Hỗ trợ & Tư vấn','Support & Styling','サポート・スタイリング相談','Assistance & Conseils','Ayuda y asesoría'],
  badge:['Mô phỏng · Phản hồi tự động','Demo · Automated replies','デモ・自動応答','Démo · Réponses automatiques','Demo · Respuestas automáticas'],
  consult:['Tư vấn phối đồ','Styling advice','コーディネート相談','Conseils de style','Asesoría de estilo'],
  support:['Hỗ trợ mua sắm','Shopping help','お買い物サポート','Aide aux achats','Ayuda con la compra'],
  consultant:['Tư vấn tự động · mô phỏng','Styling assistant · demo','スタイリング自動応答・デモ','Conseil automatique · démo','Asesor automático · demo'],
  helper:['Hỗ trợ tự động · mô phỏng','Help assistant · demo','サポート自動応答・デモ','Aide automatique · démo','Asistente automático · demo'],
  you:['Bạn','You','あなた','Vous','Tú'],
  close:['Đóng trò chuyện','Close conversation','チャットを閉じる','Fermer la conversation','Cerrar conversación'],
  label:['Nội dung tin nhắn','Your message','メッセージ','Votre message','Tu mensaje'],
  placeholder:['Bạn cần tư vấn điều gì?','How can we help?','どのようなご相談ですか？','Comment vous aider ?','¿En qué podemos ayudarte?'],
  send:['Gửi thử','Try sending','試しに送信','Essayer l’envoi','Probar envío'],
  privacy:['Tin nhắn chỉ có trong phiên mở trang, không gửi cho nhân viên. Tối đa 500 ký tự.','Messages stay in this page session and are not sent to staff. Maximum 500 characters.','メッセージはこのページのセッション内のみで、スタッフには送信されません。最大500文字。','Messages conservés dans cette session, sans envoi au personnel. 500 caractères maximum.','Los mensajes solo quedan en esta sesión; no se envían al personal. Máximo 500 caracteres.'],
  clear:['Xóa hội thoại','Clear conversation','会話を消去','Effacer la conversation','Borrar conversación'],
  cleared:['Đã xóa hội thoại mô phỏng.','Demo conversation cleared.','デモの会話を消去しました。','Conversation de démonstration effacée.','Conversación de prueba borrada.'],
  policy:['Quyền riêng tư','Privacy','プライバシー','Confidentialité','Privacidad'],
  remove:['Bỏ sản phẩm đang tư vấn','Remove product context','相談中の商品を解除','Retirer le produit','Quitar producto'],
  product:['Tư vấn sản phẩm này','Ask about this product','この商品について相談','Conseil sur ce produit','Consultar este producto'],
  welcomeStyle:['Chào bạn! Đây là tư vấn mô phỏng, chưa có nhân viên thật. Bạn có thể hỏi về phối đồ, cách chọn size hoặc mẫu đang xem.','Welcome! This is a demo, with no live staff. Ask about styling, choosing a size or the design you are viewing.','こんにちは。スタッフにはつながっていないデモです。コーディネート、サイズの選び方、閲覧中の商品についてご質問ください。','Bienvenue ! Cette démo ne vous met pas en relation avec un conseiller réel. Posez une question sur le style, les tailles ou le modèle consulté.','¡Hola! Esta demo no conecta con personal real. Puedes preguntar sobre conjuntos, tallas o el diseño que estás viendo.'],
  welcomeHelp:['Đây là hỗ trợ tự động mô phỏng. Bạn có thể xem hướng dẫn mua sắm và thông tin hiện có; hệ thống không tra cứu đơn hàng thật.','This is automated demo help. Explore shopping guidance and available information; real orders cannot be looked up.','自動応答のデモです。お買い物ガイドや公開情報をご案内します。実際の注文の照会はできません。','Ceci est une aide automatique de démonstration. Consultez les conseils d’achat et les informations disponibles ; aucun suivi de commande réelle.','Esta es una ayuda automática de prueba. Consulta las guías de compra y la información disponible; no permite consultar pedidos reales.'],
  size:['Chọn size','Choosing a size','サイズ選び','Choisir une taille','Elegir talla'],
  style:['Gợi ý phối đồ','Styling ideas','コーディネートのヒント','Idées de tenues','Ideas de conjuntos'],
  price:['Giá và thông tin mẫu','Price & design details','価格・商品情報','Prix et détails','Precio y detalles'],
  delivery:['Giao hàng & đổi trả','Delivery & returns','配送・返品','Livraison et retours','Envíos y devoluciones'],
  payment:['Thanh toán & trả góp','Payment & instalments','お支払い・分割払い','Paiement et échéances','Pago y cuotas'],
  human:['Gặp nhân viên','Talk to staff','スタッフに相談','Parler au personnel','Hablar con personal'],
  sizeAnswer:['Hãy đo vòng ngực, eo và hông, rồi đối chiếu bảng size riêng của mẫu. Website chưa có bảng số đo đã xác nhận nên mình chưa thể chốt size vừa với bạn.','Measure your chest, waist and hips, then compare with the design’s own size chart. There is no confirmed measurement chart here yet, so a fit cannot be guaranteed.','胸囲・ウエスト・ヒップを測り、商品ごとのサイズ表と照合してください。確認済みの寸法表がないため、合うサイズの確定はできません。','Mesurez poitrine, taille et hanches, puis comparez au guide du modèle. Aucun tableau de mesures confirmé n’est disponible ici ; la taille idéale ne peut pas être garantie.','Mide pecho, cintura y cadera y compáralos con la tabla del diseño. Aún no hay medidas confirmadas, por lo que no se puede garantizar una talla.'],
  shownSizes:['Các size đang hiển thị:','Sizes currently listed:','表示されているサイズ：','Tailles affichées :','Tallas indicadas:'],
  guide:['Xem hướng dẫn chọn size','View the size guide','サイズガイドを見る','Voir le guide des tailles','Ver guía de tallas'],
  styleAnswer:['Bạn có thể phối áo kem hoặc trắng với quần đen, be hay jeans xanh. Giữ 2–3 màu trong một bộ đồ và cân bằng áo rộng với quần có phom gọn. Đây là gợi ý phối màu chung, không xác nhận chất liệu hoặc độ vừa của từng mẫu.','Try a cream or white top with black or beige trousers, or blue jeans. Keep an outfit to 2–3 colours and balance a loose top with a more structured bottom. These are general styling ideas, not confirmed fabric or fit advice.','クリーム色や白のトップスに黒・ベージュのパンツ、またはブルージーンズを合わせてみてください。全体を2〜3色にまとめ、ゆったりしたトップスにはすっきりしたボトムスを。素材やフィットを保証するものではなく、一般的な配色の提案です。','Associez un haut crème ou blanc à un pantalon noir, beige ou un jean bleu. Limitez la tenue à 2–3 couleurs et équilibrez les volumes. Ces idées générales ne confirment ni la matière ni la coupe de chaque modèle.','Combina un top crema o blanco con pantalón negro, beige o vaqueros azules. Usa 2–3 colores y equilibra los volúmenes. Son ideas generales; no confirman el tejido ni el ajuste de cada diseño.'],
  collection:['Xem mẫu tuyển chọn','Explore selected designs','セレクトアイテムを見る','Voir les modèles sélectionnés','Ver diseños seleccionados'],
  pending:['Mẫu này hiện chưa mở bán. Thông tin size và chất liệu đang chờ xác nhận.','This design cannot be ordered yet. Sizes and fabric details await confirmation.','この商品は販売準備中です。サイズと素材は確認中です。','Ce modèle ne peut pas encore être commandé. Tailles et matière à confirmer.','Este diseño aún no admite pedidos. Tallas y materiales por confirmar.'],
  priceAnswer:['Giá đang hiển thị trên website:','Price currently displayed on the website:','ウェブサイトの表示価格：','Prix affiché sur le site :','Precio indicado en la web:'],
  chooseProduct:['Mở chi tiết một sản phẩm rồi chọn “Tư vấn sản phẩm này” để xem thông tin theo đúng mẫu. Giá và thông tin chưa xác nhận sẽ được ghi rõ.','Open a product and choose “Ask about this product” for its specific details. Unconfirmed prices and information are clearly marked.','商品詳細で「この商品について相談」を選ぶと、その商品の情報をご案内します。未確認の価格や情報は明記されます。','Ouvrez une fiche et choisissez « Conseil sur ce produit ». Les prix et informations non confirmés sont signalés.','Abre un producto y elige « Consultar este producto ». Los precios y datos sin confirmar se indican claramente.'],
  deliveryAnswer:['Điều kiện giao hàng và chính sách đổi trả chính thức đang chờ cửa hàng xác nhận. Mình chưa thể cam kết thời gian giao, phí vận chuyển hoặc thời hạn đổi trả.','Official delivery and return terms await store confirmation. Delivery times, shipping costs and return periods cannot be promised here.','正式な配送・返品条件は店舗の確認待ちです。配送日数、送料、返品期限のお約束はできません。','Les conditions officielles de livraison et de retour restent à confirmer. Aucun délai, frais ou période de retour ne peut être promis ici.','Las condiciones oficiales de envío y devolución están por confirmar. No se pueden prometer plazos, gastos ni periodos de devolución.'],
  returns:['Xem thông tin đổi trả','View return information','返品情報を見る','Voir les informations de retour','Ver información de devoluciones'],
  paymentAnswer:['Tài khoản, đặt hàng và trả góp trên website đều là mô phỏng. Website không xử lý tiền, không duyệt khoản vay và không xác nhận giao dịch thật.','Accounts, orders and instalments on this website are demonstrations. The site does not process money, approve loans or confirm real transactions.','アカウント・注文・分割払いはすべてデモです。金銭処理、ローン審査、実際の取引確認は行いません。','Comptes, commandes et paiements échelonnés sont simulés. Le site ne traite aucun paiement, n’accorde aucun crédit et ne confirme aucune transaction réelle.','Las cuentas, los pedidos y las cuotas son simulados. El sitio no procesa dinero, aprueba préstamos ni confirma transacciones reales.'],
  humanAnswer:['Chưa kết nối nhân viên thật hoặc kênh nhắn tin của cửa hàng. Tin bạn nhập chỉ nằm trong phiên mở trang này, không được chuyển đi và không có hàng chờ tư vấn.','No live staff or store messaging channel is connected. Your messages stay in this page session; they are not forwarded and there is no staff queue.','スタッフや店舗の連絡先には接続されていません。メッセージはこのセッション内のみで、転送や相談予約は行われません。','Aucun conseiller réel ni canal de messagerie n’est connecté. Vos messages restent dans cette session, sans transfert ni file d’attente.','No hay personal real ni un canal de mensajería conectado. Tus mensajes quedan en esta sesión; no se reenvían ni entran en una cola.'],
  orderAnswer:['Mình không thể kiểm tra đơn hàng thật. Các đơn trên website chỉ là bản xem thử và không được gửi tới cửa hàng.','I cannot look up real orders. Orders on this website are previews and are not sent to the store.','実際の注文の照会はできません。このサイトの注文はプレビューで、店舗には送信されません。','Je ne peux pas consulter de commande réelle. Les commandes du site sont des aperçus non transmis à la boutique.','No puedo consultar pedidos reales. Los pedidos del sitio son vistas previas y no se envían a la tienda.'],
  fallback:['Đây là phản hồi theo kịch bản, chưa phải tư vấn viên thật. Hãy chọn một câu hỏi nhanh về size, phối đồ, giá, giao hàng hoặc thanh toán để xem thông tin phù hợp.','These are scripted replies, not a live adviser. Choose a quick question about sizing, styling, price, delivery or payment for relevant information.','これはスタッフではなくシナリオに沿った自動応答です。サイズ、コーディネート、価格、配送、お支払いのクイック質問を選んでください。','Ces réponses sont prédéfinies, sans conseiller réel. Choisissez une question rapide sur les tailles, le style, les prix, la livraison ou le paiement.','Son respuestas predefinidas, no un asesor real. Elige una pregunta rápida sobre tallas, estilo, precio, envío o pago.']
 };
 const languages=['vi','en','ja','fr','es'];
 const tr=key=>(words[key]||words.fallback)[Math.max(0,languages.indexOf(activeLanguage))];
 const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n};
 const root=el('div','support-widget');root.setAttribute('translate','no');
 const launch=el('button','support-launcher');launch.type='button';launch.id='supportLauncher';launch.setAttribute('aria-haspopup','dialog');launch.setAttribute('aria-controls','supportDialog');launch.setAttribute('aria-expanded','false');
 // Static icon only; all user and product content is inserted with textContent.
 launch.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-8 8H5l-4 3v-11a9 9 0 0 1 18 0Z"/><path d="M6 10h8M6 14h6"/></svg>';
 const launchText=el('span');launch.append(launchText);
 const dialog=el('dialog','support-dialog');dialog.id='supportDialog';dialog.setAttribute('aria-modal','true');dialog.setAttribute('aria-labelledby','supportTitle');dialog.setAttribute('aria-describedby','supportBadge');
 const shell=el('div','support-shell'),head=el('div','support-head'),heading=el('div','support-heading'),title=el('h2'),badge=el('span','support-badge');title.id='supportTitle';badge.id='supportBadge';heading.append(title,badge);
 const closeButton=el('button','support-icon','×');closeButton.type='button';head.append(el('span','support-mark','F'),heading,closeButton);
 const modes=el('div','support-modes');modes.setAttribute('role','group');const modeButtons={};
 for(const name of ['consult','support']){const b=el('button');b.type='button';b.dataset.supportMode=name;b.addEventListener('click',()=>{saveDraft();mode=name;render();});modeButtons[name]=b;modes.append(b)}
 const context=el('div','support-context'),contextLink=el('a'),remove=el('button','support-icon','×');remove.type='button';context.append(contextLink,remove);
 const log=el('div','support-log');log.setAttribute('role','log');log.setAttribute('aria-live','polite');log.setAttribute('aria-relevant','additions');log.tabIndex=0;
 const quick=el('div','support-quick'),form=el('form','support-compose'),label=el('label'),row=el('div','support-compose-row'),input=el('textarea'),send=el('button','support-send'),hint=el('p','support-hint');input.id='supportMessage';input.rows=1;input.maxLength=500;input.setAttribute('enterkeyhint','enter');label.htmlFor=input.id;send.type='submit';hint.id='supportHint';input.setAttribute('aria-describedby',hint.id);row.append(input,send);form.append(label,row,hint);
 const foot=el('div','support-foot'),clear=el('button','support-clear'),policy=el('a');clear.type='button';policy.href='#/quyen-rieng-tu';foot.append(clear,policy);
 shell.append(head,modes,context,log,quick,form,foot);dialog.append(shell);root.append(launch,dialog);document.body.append(root);
 const histories={consult:[],support:[]},drafts={consult:'',support:''};let mode='consult',product=null,returnFocus=null;
 const productName=p=>activeLanguage==='vi'?p.n:(LANGUAGE_PRODUCT_NAMES[p.id]||[])[languages.indexOf(activeLanguage)-1]||p.n;
 const appendText=(parent,text)=>parent.append(el('p','',text));
 function appendMessage(message){
  const block=el('div','support-message'+(message.user?' is-user':''));block.append(el('span','support-author',tr(message.user?'you':mode==='consult'?'consultant':'helper')));
  if(message.user)appendText(block,message.text);
  else{appendText(block,tr(message.key));if(message.name)appendText(block,productName(message.name));if(message.value)appendText(block,message.value);if(message.sizes)appendText(block,tr('shownSizes')+' '+message.sizes.join(', '));if(message.link){const a=el('a','',tr(message.link.label));a.href=message.link.href;block.append(a)}}
  log.append(block);
 }
 function renderLog(){
  const atBottom=log.scrollHeight-log.scrollTop-log.clientHeight<48;
  log.replaceChildren();
  const welcome={key:mode==='consult'?'welcomeStyle':'welcomeHelp'};
  for(const message of [welcome,...histories[mode]])appendMessage(message);
  if(atBottom)log.scrollTop=log.scrollHeight;
 }
 function saveDraft(){drafts[mode]=input.value}
 function render(){
  launchText.textContent=tr('title');launch.setAttribute('aria-label',tr('title'));title.textContent=tr('title');badge.textContent=tr('badge');closeButton.setAttribute('aria-label',tr('close'));modes.setAttribute('aria-label',tr('title'));
  for(const [name,b] of Object.entries(modeButtons)){b.textContent=tr(name);b.setAttribute('aria-pressed',String(name===mode))}
  context.hidden=!product;if(product){contextLink.textContent=productName(product);contextLink.href='#/san-pham/'+product.id}remove.setAttribute('aria-label',tr('remove'));
  label.textContent=tr('label');input.placeholder=tr('placeholder');input.value=drafts[mode];send.textContent=tr('send');send.disabled=!input.value.trim();hint.textContent=tr('privacy');clear.textContent=tr('clear');policy.textContent=tr('policy');log.setAttribute('aria-label',tr(mode==='consult'?'consult':'support'));
  renderLog();quick.replaceChildren();
  for(const key of mode==='consult'?['size','style','price']:['delivery','payment','human']){const b=el('button','',tr(key));b.type='button';b.dataset.supportQuestion=key;b.addEventListener('click',()=>{submit(tr(key),key);input.focus()});quick.append(b)}
 }
 function answer(key){
  const guide={label:'guide',href:'#/huong-dan-size'};
  if(key==='size')return product&&isPreview(product)?{key:'pending'}:{key:'sizeAnswer',sizes:product?.sizes,link:guide};
  if(key==='style')return {key:'styleAnswer',link:{label:'collection',href:'#/bo-suu-tap/the-famstyle-selection'}};
  if(key==='price')return !product?{key:'chooseProduct'}:!Number.isFinite(product.price)?{key:'pending',name:product}:{key:'priceAnswer',name:product,value:fmt(product.price)};
  if(key==='delivery')return {key:'deliveryAnswer',link:{label:'returns',href:'#/doi-tra'}};
  return {key:({payment:'paymentAnswer',human:'humanAnswer',order:'orderAnswer'})[key]||'fallback'};
 }
 function detect(text){
  const value=norm(text);
  // Check staff requests first; never pretend a handoff or a real message was sent.
  const rules=[['human',/nhan vien|tu van vien|nguoi that|staff|human|personne|conseiller|personal|asesor|スタッフ|担当者/],['order',/don hang|ma don|order|commande|pedido|注文/],['payment',/thanh toan|tra gop|payment|instalment|cuotas|pago|paiement|支払|分割/],['delivery',/giao hang|van chuyen|doi tra|shipping|delivery|return|livraison|retour|envio|devolucion|配送|返品/],['size',/size|kich thuoc|so do|talla|taille|サイズ/],['style',/phoi do|phoi mau|mac gi|styling|outfit|tenue|conjunto|コーディネート/],['price',/gia|chat lieu|thong tin mau|price|fabric|prix|precio|価格|素材/]];
  return (rules.find(([,pattern])=>pattern.test(value))||[])[0]||'fallback';
 }
 function submit(raw,key){
  const text=raw.trim().slice(0,500);if(!text)return;
  log.querySelector(':scope > .support-hint')?.remove();
  const messages=[{user:true,text},answer(key||detect(text))];
  histories[mode].push(...messages);if(histories[mode].length>40){histories[mode].splice(0,2);log.children[1]?.remove();log.children[1]?.remove()}
  messages.forEach(appendMessage);log.scrollTop=log.scrollHeight;
 }
 function open(from){
  const id=from?.dataset.supportProduct||(location.hash.match(/^#\/san-pham\/(\d+)$/)||[])[1];product=P.find(p=>p.id===Number(id))||null;
  if(dialog.open){render();return}
  returnFocus=from||document.activeElement;render();dialog.showModal();launch.setAttribute('aria-expanded','true');closeButton.focus();
 }
 function close(restore=true){if(!dialog.open)return;saveDraft();dialog.close();launch.setAttribute('aria-expanded','false');if(restore)(returnFocus?.isConnected?returnFocus:launch).focus({preventScroll:true})}
 launch.addEventListener('click',()=>open(launch));closeButton.addEventListener('click',()=>close());
 dialog.addEventListener('cancel',e=>{e.preventDefault();close()});dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)close()});
 remove.addEventListener('click',()=>{saveDraft();product=null;render();input.focus()});
 input.addEventListener('input',()=>{saveDraft();send.disabled=!input.value.trim()});
 form.addEventListener('submit',e=>{e.preventDefault();submit(input.value);input.value='';saveDraft();send.disabled=true;input.focus()});
 clear.addEventListener('click',()=>{histories[mode]=[];drafts[mode]='';render();log.append(el('p','support-hint',tr('cleared')));input.focus()});
 document.addEventListener('click',e=>{const b=e.target.closest('[data-support-open]');if(b)open(b);if(dialog.contains(e.target)&&e.target.closest('a[href]'))close(false)});
 window.addEventListener('hashchange',()=>close(false));
 document.getElementById('siteLanguage').addEventListener('change',()=>{saveDraft();render()});
 render();
})();
