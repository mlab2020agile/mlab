var i,j;
var a = 1103515245;
var c = 12345;
var m = 0b1111111111111111111111111111111;
var tmp = 0;
var SEED;
var constellation = [1,1,1,1,1,1,1,1,1,1,1,1];
var hold = [1,1,1,1,1,1,1,1,1,1,1,1];
var seiza =["おひつじ座","おうし座","ふたご座","かに座","しし座","おとめ座","てんびん座","さそり座","いて座","やぎ座","みずがめ座","うお座"];
var ranking = ["おひつじ座","おうし座","ふたご座","かに座","しし座","おとめ座","てんびん座","さそり座","いて座","やぎ座","みずがめ座","うお座"];
var d = new Date();

d = new Date(d.getFullYear(), d.getMonth(), d.getDate());
SEED = d.getFullYear() + (1+d.getMonth()) + d.getDate();

//線形合同法
constellation [0] = ((a*SEED+c)%m);
for(i=0;i<11;i++)
{
    constellation[i+1]=((a*constellation[i]+c)%m);
}

//絶対値を取る
for(i=0;i<12;i++)
{
    if(constellation[i] < 0)  constellation[i] = 0-constellation[i];
}


//100以下の整数に変換
for(i=0;i<12;i++)
{
    constellation[i] = constellation[i]%10000;
}

//holdにホールド
for(i=0;i<12;i++)
{
    hold[i] = constellation[i];
}



//順番の入れ替え
for(i=0;i<11;i++)
{
    for(j=11;j>0;j--)
    {
        if(constellation[j] == constellation[j-1])
        {
            constellation[j]++;
            hold[j]++;
        }
        if(constellation[j] < constellation[j-1])
        {
            tmp = constellation[j];
            constellation[j] = constellation[j-1];
            constellation[j-1] = tmp;
        }
    }
}

//最終判定
for(i=0;i<12;i++)
{
    if(constellation[i] == hold[0])	ranking[i] = seiza[0];
    else if(constellation[i] == hold[1])	ranking[i] = seiza[1];
    else if(constellation[i] == hold[2])	ranking[i] = seiza[2];
    else if(constellation[i] == hold[3])	ranking[i] = seiza[3];
    else if(constellation[i] == hold[4])	ranking[i] = seiza[4];
    else if(constellation[i] == hold[5])	ranking[i] = seiza[5];
    else if(constellation[i] == hold[6])	ranking[i] = seiza[6];
    else if(constellation[i] == hold[7])	ranking[i] = seiza[7];
    else if(constellation[i] == hold[8])	ranking[i] = seiza[8];
    else if(constellation[i] == hold[9])	ranking[i] = seiza[9];
    else if(constellation[i] == hold[10])	ranking[i] = seiza[10];
    else if(constellation[i] == hold[11])	ranking[i] = seiza[11];
}

//結果表示
document.writeln("<table border='1' align='center'>");
for(i=0;i<12;i++)
{
    document.writeln("<tr class='center'>");
        document.writeln("<td class='center'>");
            document.writeln((i+1)+"位:");
        document.writeln("</td>");

        document.writeln("<td class='center'>");
            document.writeln(ranking[i]);
        document.writeln("</td>");
    document.writeln("</tr>");
}
document.writeln("</table>");
