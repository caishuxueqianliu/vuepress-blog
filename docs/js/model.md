# 简易版双向绑定
::: tip 说明
监听输入框的值改变后赋给name name改变后通过set方法赋给modelText
:::
``` html
<body>
    手写一个简单双向绑定<br/>
    <input type="text" id="model"><br/>
    <div id="modelText"></div>
</body>
<script>
    var user = {
      name: 'liuhao'
    };
    var defaultName = 'liuhao'

    var input = document.getElementById("model");
    var text = document.getElementById("modelText");

    input.value = user.name;
    text.textContent = user.name;

    // 数据到视图 model => view
    Object.defineProperty(user,"name",{
      get:function(){
        console.log('获取user')
      },
      set:function(val){
        console.log('修改user')
       // input.value = val;
        text.textContent = val;
      }
    })

    // 视图到数据 view => model
      input.addEventListener('keyup',function(val){
      user.name = input.value;
    })
    // input.addEventListener('input',function(val){
    //   user.name = input.value;
    // })
</script>
```