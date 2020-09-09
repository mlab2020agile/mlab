var d = new Date();


if(d.getMonth() === 6)
{
    if(d.getDate() === 7)
    {
        document.writeln("<script src='javascript/constellation.js' charset='SHIFT_JIS'></script>");
    }
    else{
        document.writeln("<script src='javascript/constellation.js' charset='UTF-8'></script>");
    }
}
else
{
    document.writeln("<script src='javascript/constellation.js' charset='UTF-8'></script>");
}
