var express=require('express');
var app=express();
var sunucu=app.listen('8000');
var io=require('socket.io').listen(sunucu);
var yol=require('path');
io.sockets.on('connection',function(socket)
{
    socket.on("gonder",function(veri)
{
    console.log(veri + "sisteme girdi.");
    io.sockets.emit("al",veri);
})

socket.on("mesaj",function(veri)
{
    console.log(veri);
    io.sockets.emit("mesajAl",veri);
})
}
    );

app.get("/destek.html",function(talep,cevap){
    cevap.sendFile(yol.join(__dirname + "/destek.html"));
})
console.log("sunucu aktif");

app.use(express.static(yol.join(__dirname, 'public')));