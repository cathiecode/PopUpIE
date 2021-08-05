$(function() {

  // headerに font-awesome CDN書き込み
  var CookieScript = document.createElement('script')
  CookieScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js');
  document.head.appendChild(CookieScript);
  var FontawesomeScript = document.createElement('script');  
  FontawesomeScript.setAttribute('src','https://use.fontawesome.com/releases/v5.15.3/js/all.js');
  document.head.appendChild(FontawesomeScript);


  // 使用ブラウザの取得
  if (window.navigator.userAgent.toLowerCase().indexOf("trident") != -1) {
    console.log("IE");

    // DOMの生成・スタイル指定
    $text01 = $('<p>', { text:'Internet Explorer では正しく表示されない場合がございますので', css:({'margin-top': '30px', 'font-weight': 'bold', color:'#888'})});
    $text02 = $('<p>', { text:'Microsoft Edge もしくは Google Chrome の使用を推奨します', css:({'margin-top': '10px', 'font-weight': 'bold', color:'#888'})});
    $cautionIe = $('<i>', { class :"fab fa-internet-explorer", css: ({'font-size': '60px', color: '#BBB'})});
    $recommendEdge = $('<i>', { class :"fab fa-edge", css: ({'font-size': '60px', color: '#444'})});
    $recommendChrome = $('<i>', { class :"fab fa-chrome", css: ({'font-size': '60px', color: '#444'})});
    $iconArrow = $('<i>', { class :"fas fa-long-arrow-alt-right", css: ({'font-size': '60px', color: '#888'})});
    $icons = $('<div>', {class: 'icons-box', css: ({display: 'flex', 'justify-content': 'space-around'}),});
    
    $btn = $('<button>', {css: ({
      position: 'absolute',
      top: '20px',
      right: '20px',
      'font-size': '20px',
      color: '#444',
      cursor: 'pointer',
      'background-color': 'transparent',
      border: 'none',
      cursor: 'pointer',
      outline: 'none',
      padding: '0',
      appearance: 'none',
    })}).append($('<i>', {class :"fas fa-times-circle"}));
    
    $alertBoxMain = $('<div>', { 
      class:'alert-box-main',
      css:({
        display: 'flex',
        'flex-direction': 'column',
        'justify-content': 'center',
        'max-width':'100%',
        'max-height':'100%',
        'text-align': 'center'
      })
    });
    
    $alertBox = $('<div>', { 
      class:'alert-box',
      css:({
        // width:'500px',
        // height:'200px',
        padding: '60px 40px',
        'border-radius':"10px",
        position:'absolute',
        top: '50%',
        left: '50%', transform:
        'translate(-50%,-50%)',
        background: '#EEE',
      }) 
    });

    $popupArea = $('<div>', { class:'overlay', css:({display:'none', width:'100%', height:'100%', background:'rgba(0,0,0,0.6)', position:'fixed', 'z-index':'1000000'}) });
    
    // DOMの結合
    $icons.append($cautionIe).append($iconArrow).append($recommendEdge).append($recommendChrome);
    $alertBoxMain.append($btn).append($icons).append($text01).append($text02);
    $alertBox.append($btn).append($alertBoxMain);
    $popupArea.append($alertBox);

    // bodyタグの最初にDOM配置
    $('body').prepend($popupArea);

    // 初回閲覧時のみ表示するスクリプト
    $(".overlay").show();
    $.cookie('btnFlg') == 'on' ? $('.overlay').hide() : $('.overlay').show();
    $('.alert-box button').click(function(){
      $('.overlay').fadeOut();
      $.cookie('btnFlg', 'on', { expires: 30,path: '/' }); //cookieの保存
    });
  }
});
