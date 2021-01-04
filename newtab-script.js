     // ▼▼ 获取当前系统主题
    var mql = [
      window.matchMedia('(prefers-color-scheme: no-preference)'),
      window.matchMedia('(prefers-color-scheme: light)'),
      window.matchMedia('(prefers-color-scheme: dark)')
    ];
    if (mql[2].matches) { 
      document.body.classList.add('dark'); 
    } else {
      document.body.classList.add('light');
    }
    // ▲▲ 获取当前系统主题
  
    // ▼▼ 快捷键更换主题色
    document.onkeydown=function(e){ //对整个页面监听  
    var keyNum = window.event ? e.keyCode :e.which; //获取被按下的键值  
      if (76 == e.keyCode && e.shiftKey && e.metaKey){  // metaKey=CMD,  shiftKey=SHIFT, 76=L
        if ( document.body.classList.contains('dark') ) {
          document.body.classList.remove('dark');
          document.body.classList.add('light');
        } else if ( document.body.classList.contains('light') ){
          document.body.classList.add('dark');
          document.body.classList.remove('light');
        }
      }
    }
    // ▲▲ 快捷键更换主题色
  
    // ▼▼ 周五更换按钮
    var week = new Date().getDay();  
    if (week == 5 && time>19) { //周五晚上
      document.getElementById("YuqueRecord").className += " hide"; //隐藏 UI 校稿记录
      document.getElementById("YuqueTask").className += " hide"; //隐藏 UI 进度表
      document.getElementById("TAPD").className += " hide"; //隐藏 TAPD
      document.getElementById("WeekilyTask").className += " show"; //显示周报任务表
      document.getElementById("Weekily").className += " show"; //显示周报
    } else { //正常情况
      document.getElementById("WeekilyTask").className += " hide"; //隐藏周报任务表
      document.getElementById("Weekily").className += " hide"; //隐藏周报
      document.getElementById("YuqueDaily").className += " hide"; //隐藏了日报
      
    }
    // ▲▲ 周五更换按钮
  
    // ▼▼ 早中晚更换文案和按钮
    var d = new Date();
    var time = d.getHours();
    var r_text = new Array ();
    
    if (time<=12 && week == 1) {  // 上午：12点前
      r_text[0] = "记得点餐";
      r_text[1] = "找点什么...";
      r_text[2] = "找点什么...";
    } else if (time<19 && time>6) {  // 下午：19点前
      r_text[0] = "多喝热水";
      r_text[1] = "找点什么...";
      r_text[2] = "找点什么...";
    } else {  // 晚上：19点至0点
      r_text[0] = "加油，干饭人!";
      r_text[1] = "找点什么...";
      r_text[2] = "找点什么...";
      document.getElementById("YuqueRecord").className += " hide"; //晚上隐藏 UI 校稿记录
      document.getElementById("YuqueDaily").className += " show"; //晚上显示日报
      
      
      
    }
    
    var i = Math.floor(3*Math.random()); // 生成随机数
    document.getElementById("searchBar").setAttribute("placeholder",r_text[i]); //更改 Placeholder 文案
    console.log([i]); // 打印随机数
    // ▲▲ 早中晚更换文案和按钮