var d = new Date();


if(d.getMonth() === 6)
{
    if(d.getDate() === 7)
    {
        document.writeln("<link rel='stylesheet' href='css/milkystyle.css'>");
    }
    else{
        document.writeln("<link rel='stylesheet' href='css/style.css'>");
    }
}
else
{
    document.writeln("<link rel='stylesheet' href='css/style.css'>");
}
