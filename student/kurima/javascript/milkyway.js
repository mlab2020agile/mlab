var d = new Date();


if(d.getMonth() === 6)
{
    if(d.getDate() === 7){
        document.writeln("<img src='images/constellation_seven.png' alt='星座占いページ' width='30%' height='30%'>");
    }
    else
    {
        document.writeln("<img src='images/constellation.png' alt='星座占いページ' width='30%' height='30%'");
    }

}
else
{
    document.writeln("<img src='images/constellation.png' alt='星座占いページ' width='30%' height='30%'");
}
