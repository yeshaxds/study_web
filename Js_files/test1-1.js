document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph.</p>");
var key = 0;
function myDemo(){
    x = document.getElementById("demo1");
    console.log(key);
    if(key == 0){ 
        x.innerHTML = "段落已修改。";
        key = 1;
    }
    else{ x.innerHTML = "JavaScript can change HTML content.";
        key = 0;
    };
    
}
/* 多行注释
    多行注释
    多行注释
*/
//单行注释


