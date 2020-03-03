document.write("<h1>컴퓨터 가위바위보 맞추기</h1>");
document.write("<br>");

var game=prompt('가위, 바위 , 보 중 하나를 선택하세요','바위');
var gameNum;
switch(game)
{
    case "가위":
        gameNum=1;
        break;
    case "바위":
        gameNum=2;
        break;
    case "보":
        gameNum=3;
        break;
    default:
        alert('잘못 작성했습니다');
        break;            
}
//1~3 사이의 난수 발생
//floor(random()*(최댓값-최솟값+1))+최솟값
var com=Math.ceil(Math.floor(Math.random()*3)+1);

//해당 이미지 보이기
document.write("<img src=\"rcp_"+com+".png\">");

if(gameNum==com)
{
    alert('잘 맞췄습니다!\ 축하합니다!');
}
else
{
    alert('다음 기회에ㅠㅠ');
}
