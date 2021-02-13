
const player = 'o';
const computer = 'x';
 
var curplay = player;
var gametable = [0,1,2,3,4,5,6,7,8];
var vistable = [0,1,2,3,4,5,6,7,8];
const winCon = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

function checkWin(){
    let tmpArray = [];
    for(let i = 0; i<gametable.length; i++ ){
        if (curplay == gametable[i]) {
            tmpArray.push(i);
        }
    }  
 
    let winyoung = false;
    for (const [index, win] of winCon.entries()) {
        let mycheckf = true;
        win.forEach(innerWin => {
            if (tmpArray.indexOf(innerWin) > -1) {
                mycheckf = mycheckf && true;
            } else {
                mycheckf = mycheckf &&false;
            }
        });
        if (mycheckf) {
            winyoung = true;
            break;
        }
    }

    return winyoung;
}

function endgame() {
    if (curplay == player) {
        $('#winner').html('You win!!');
    } else {
        $('#winner').html('Computer win!!');
    }

    $('input').prop('disabled',true);
}


function turn(btn){
    gametable[btn.id] = curplay;
    btn.src = 'image/'+curplay+ '.png';
    btn.disabled = true;
vistable.splice(btn.id,1,'');
    
    let gamestatus = checkWin();
    if (gamestatus) endgame();

    curplay = computer;
    let num = Math.floor(Math.random(vistable)*9);
    
        if (num !== '') {
            gametable[num] = curplay;
            vistable.splice(num,1,''); 
            var k = document.getElementById(num);
        k.src = 'image/'+ curplay +'.png';
        k.disabled = true; 
        }

        curplay = player;
}

$('#0').click(function(e) {
    e.preventDefault();
    turn(this);
});

$('#1').click(function(e) {
    e.preventDefault();
    turn(this);
});

$('#2').click(function(e) {
    e.preventDefault();
    turn(this);
});

$('#3').click(function(e) {
    e.preventDefault();
    turn(this);
});

$('#4').click(function(e) {
    e.preventDefault();
    turn(this);
});

$('#5').click(function(e) {
    e.preventDefault();
    turn(this);
});

$('#6').click(function(e) {
    e.preventDefault();
    turn(this);
});

$('#7').click(function(e) {
    e.preventDefault();
    turn(this);
});

$('#8').click(function(e) {
    e.preventDefault();
    turn(this);
});

