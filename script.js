var click=0;
const element_list=['col-2','col-3','col-4','col-5','col-6','col-7','col-8','col-9','col-10','col-11','col-12','col-13','col-14','col-15','col-16']
element_list.sort(function(a, b){return 0.5 - Math.random()});
var round1_list=['col-1'];
var round2_list=['col-1',element_list[0]];
var round3_list=['col-1',element_list[0],element_list[1]];
var round4_list=['col-1',element_list[0],element_list[1],element_list[2]];
var round5_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3]];
var round6_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3],element_list[4]];
var round7_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3],element_list[4],element_list[5]];
var round8_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3],element_list[4],element_list[5],element_list[6]];
var round9_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3],element_list[4],element_list[5],element_list[6],element_list[7]];
var round10_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3],element_list[4],element_list[5],element_list[6],element_list[7],element_list[8]];
var round11_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3],element_list[4],element_list[5],element_list[6],element_list[7],element_list[8],element_list[9]];
var round12_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3],element_list[4],element_list[5],element_list[6],element_list[7],element_list[8],element_list[9],element_list[10]];
var round13_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3],element_list[4],element_list[5],element_list[6],element_list[7],element_list[8],element_list[9],element_list[10],element_list[11]];
var round14_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3],element_list[4],element_list[5],element_list[6],element_list[7],element_list[8],element_list[9],element_list[10],element_list[11],element_list[12]];
var round15_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3],element_list[4],element_list[5],element_list[6],element_list[7],element_list[8],element_list[9],element_list[10],element_list[11],element_list[12],element_list[13]];
var round16_list=['col-1',element_list[0],element_list[1],element_list[2],element_list[3],element_list[4],element_list[5],element_list[6],element_list[7],element_list[8],element_list[9],element_list[10],element_list[11],element_list[12],element_list[13],element_list[14]];
function round(id){  
    if(click==0){
        if(round1_list.includes(id)){
            ind=round1_list.indexOf('col-1');
            round1_list.splice(ind,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round1_list.length==0){
            document.getElementById('col-1').style.animationName="col-3";
            animation_delays()
            blink(element_list[0]);
            click=1;
        }
    }
    else if(click==1){ 
        if(round2_list.includes(id)){
            ind1=round2_list.indexOf(id);
            round2_list.splice(ind1,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round2_list.length==0){
            document.getElementById('col-1').style.animationName="col-5";
            document.getElementById(element_list[0]).style.animationName='col-1';
            animation_delays();
            blink(element_list[1]);
            click=2;
        } 
    }
    else if(click==2){
        if(round3_list.includes(id)){
            ind2=round3_list.indexOf(id);
            round3_list.splice(ind2,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round3_list.length==0){
            animation_delays()
            document.getElementById('col-1').style.animationName="col-2";
            document.getElementById(element_list[0]).style.animationName='col-5';
            document.getElementById(element_list[1]).style.animationName='col-7';
            blink(element_list[2]);
            click=3;
        } 
    }
    else if(click==3){
        if(round4_list.includes(id)){
            ind3=round4_list.indexOf(id);
            round4_list.splice(ind3,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round4_list.length==0){
            document.getElementById('col-1').style.animationName="col-5";
            document.getElementById(element_list[0]).style.animationName='col-7';
            document.getElementById(element_list[1]).style.animationName='col-2';
            document.getElementById(element_list[2]).style.animationName='col-3';
            animation_delays()
            blink(element_list[3]);
            click=4;
        } 
    }
    else if(click==4){
        if(round5_list.includes(id)){
            ind4=round5_list.indexOf(id);
            round5_list.splice(ind4,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round5_list.length==0){
            document.getElementById('col-1').style.animationName="col-3";
            document.getElementById(element_list[0]).style.animationName='col-2';
            document.getElementById(element_list[1]).style.animationName='col-5';
            document.getElementById(element_list[2]).style.animationName='col-7';
            document.getElementById(element_list[3]).style.animationName='col-1';
            animation_delays();
            blink(element_list[4]);
            click=5;
        } 
    }
    else if(click==5){
        if(round6_list.includes(id)){
            ind5=round6_list.indexOf(id);
            round6_list.splice(ind5,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round6_list.length==0){
            document.getElementById('col-1').style.animationName="col-1";
            document.getElementById(element_list[0]).style.animationName='col-7';
            document.getElementById(element_list[1]).style.animationName='col-2';
            document.getElementById(element_list[2]).style.animationName='col-5';
            document.getElementById(element_list[3]).style.animationName='col-3';
            document.getElementById(element_list[4]).style.animationName='col-8';
            animation_delays();
            blink(element_list[5]);
            click=6;
        } 
    }
    else if(click==6){
        if(round7_list.includes(id)){
            ind6=round7_list.indexOf(id);
            round7_list.splice(ind6,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round7_list.length==0){
            document.getElementById('col-1').style.animationName="col-8";//here changed
            document.getElementById(element_list[0]).style.animationName='col-1';
            document.getElementById(element_list[1]).style.animationName='col-8';
            document.getElementById(element_list[2]).style.animationName='col-3';
            document.getElementById(element_list[3]).style.animationName='col-5';
            document.getElementById(element_list[4]).style.animationName='col-2';
            document.getElementById(element_list[5]).style.animationName='col-7';
            animation_delays();
            blink(element_list[6]);
            click=7;
        } 
    }
    else if(click==7){
        if(round8_list.includes(id)){
            ind7=round8_list.indexOf(id);
            round8_list.splice(ind7,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round8_list.length==0){
            document.getElementById('col-1').style.animationName="col-5";
            document.getElementById(element_list[0]).style.animationName='col-7';
            document.getElementById(element_list[1]).style.animationName='col-2';
            document.getElementById(element_list[2]).style.animationName='col-5';
            document.getElementById(element_list[3]).style.animationName='col-3';
            document.getElementById(element_list[4]).style.animationName='col-8';
            document.getElementById(element_list[5]).style.animationName='col-1';
            document.getElementById(element_list[6]).style.animationName='col-9';
            animation_delays();
            blink(element_list[7]);
            click=8;
        } 
    }
    else if(click==8){
        if(round9_list.includes(id)){
            ind8=round9_list.indexOf(id);
            round9_list.splice(ind8,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round9_list.length==0){
            document.getElementById('col-1').style.animationName="col-6";
            document.getElementById(element_list[0]).style.animationName='col-4';
            document.getElementById(element_list[1]).style.animationName='col-9';
            document.getElementById(element_list[2]).style.animationName='col-1';
            document.getElementById(element_list[3]).style.animationName='col-8';
            document.getElementById(element_list[4]).style.animationName='col-3';
            document.getElementById(element_list[5]).style.animationName='col-5';
            document.getElementById(element_list[6]).style.animationName='col-2';
            document.getElementById(element_list[7]).style.animationName='col-7';
            animation_delays();
            blink(element_list[8]);
            click=9;
        } 
    }
    else if(click==9){
        if(round10_list.includes(id)){
            ind9=round10_list.indexOf(id);
            round10_list.splice(ind9,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round10_list.length==0){
            document.getElementById('col-1').style.animationName="col-7";
            document.getElementById(element_list[0]).style.animationName='col-6';
            document.getElementById(element_list[1]).style.animationName='col-7';
            document.getElementById(element_list[2]).style.animationName='col-2';
            document.getElementById(element_list[3]).style.animationName='col-5';
            document.getElementById(element_list[4]).style.animationName='col-8';
            document.getElementById(element_list[5]).style.animationName='col-3';
            document.getElementById(element_list[6]).style.animationName='col-1';
            document.getElementById(element_list[7]).style.animationName='col-9';
            document.getElementById(element_list[8]).style.animationName='col-4';
            animation_delays();
            blink(element_list[9]);
            click=10;
        } 
    }
    else if(click==10){
        if(round11_list.includes(id)){
            ind10=round11_list.indexOf(id);
            round11_list.splice(ind10,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round11_list.length==0){
            document.getElementById('col-1').style.animationName="col-8";
            document.getElementById(element_list[0]).style.animationName='col-10';
            document.getElementById(element_list[1]).style.animationName='col-4';
            document.getElementById(element_list[2]).style.animationName='col-9';
            document.getElementById(element_list[3]).style.animationName='col-1';
            document.getElementById(element_list[4]).style.animationName='col-3';
            document.getElementById(element_list[5]).style.animationName='col-8';
            document.getElementById(element_list[6]).style.animationName='col-5';
            document.getElementById(element_list[7]).style.animationName='col-2';
            document.getElementById(element_list[8]).style.animationName='col-7';
            document.getElementById(element_list[9]).style.animationName='col-6';
            animation_delays();
            blink(element_list[10]);
            click=10;
        } 
    }
    else if(click==11){
        if(round12_list.includes(id)){
            ind11=round12_list.indexOf(id);
            round12_list.splice(ind11,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round12_list.length==0){
            document.getElementById('col-1').style.animationName="col-9";
            document.getElementById(element_list[0]).style.animationName='col-11';
            document.getElementById(element_list[1]).style.animationName='col-6';
            document.getElementById(element_list[2]).style.animationName='col-7';
            document.getElementById(element_list[3]).style.animationName='col-2';
            document.getElementById(element_list[4]).style.animationName='col-5';
            document.getElementById(element_list[5]).style.animationName='col-3';
            document.getElementById(element_list[6]).style.animationName='col-8';
            document.getElementById(element_list[7]).style.animationName='col-1';
            document.getElementById(element_list[8]).style.animationName='col-9';
            document.getElementById(element_list[9]).style.animationName='col-4';
            document.getElementById(element_list[10]).style.animationName='col-10';
            animation_delays();
            blink(element_list[11]);
            click=11;
        } 
    }
    else if(click==12){
        if(round13_list.includes(id)){
            ind12=round13_list.indexOf(id);
            round13_list.splice(ind12,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round13_list.length==0){
            document.getElementById('col-1').style.animationName="col-10";
            document.getElementById(element_list[0]).style.animationName='col-12';
            document.getElementById(element_list[1]).style.animationName='col-10';
            document.getElementById(element_list[2]).style.animationName='col-4';
            document.getElementById(element_list[3]).style.animationName='col-9';
            document.getElementById(element_list[4]).style.animationName='col-1';
            document.getElementById(element_list[5]).style.animationName='col-5';
            document.getElementById(element_list[6]).style.animationName='col-2';
            document.getElementById(element_list[7]).style.animationName='col-8';
            document.getElementById(element_list[8]).style.animationName='col-3';
            document.getElementById(element_list[9]).style.animationName='col-7';
            document.getElementById(element_list[10]).style.animationName='col-6';
            document.getElementById(element_list[11]).style.animationName='col-11';
            animation_delays();
            blink(element_list[12]);
            click=13;
        } 
    }
    else if(click==13){
        if(round14_list.includes(id)){
            ind13=round14_list.indexOf(id);
            round14_list.splice(ind13,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round14_list.length==0){
            document.getElementById('col-1').style.animationName="col-11";
            document.getElementById(element_list[0]).style.animationName='col-13';
            document.getElementById(element_list[1]).style.animationName='col-11';
            document.getElementById(element_list[2]).style.animationName='col-6';
            document.getElementById(element_list[3]).style.animationName='col-7';
            document.getElementById(element_list[4]).style.animationName='col-2';
            document.getElementById(element_list[5]).style.animationName='col-8';
            document.getElementById(element_list[6]).style.animationName='col-5';
            document.getElementById(element_list[7]).style.animationName='col-3';
            document.getElementById(element_list[8]).style.animationName='col-1';
            document.getElementById(element_list[9]).style.animationName='col-9';
            document.getElementById(element_list[10]).style.animationName='col-4';
            document.getElementById(element_list[11]).style.animationName='col-10';
            document.getElementById(element_list[12]).style.animationName='col-12';
            animation_delays();
            blink(element_list[13]);
            click=14;
        } 
    }
    else if(click==14){
        if(round15_list.includes(id)){
            ind14=round15_list.indexOf(id);
            round15_list.splice(ind14,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round15_list.length==0){        
            document.getElementById('col-1').style.animationName="col-12";
            document.getElementById(element_list[0]).style.animationName='col-14';
            document.getElementById(element_list[1]).style.animationName='col-12';
            document.getElementById(element_list[2]).style.animationName='col-10';
            document.getElementById(element_list[3]).style.animationName='col-4';
            document.getElementById(element_list[4]).style.animationName='col-9';
            document.getElementById(element_list[5]).style.animationName='col-1';
            document.getElementById(element_list[6]).style.animationName='col-3';
            document.getElementById(element_list[7]).style.animationName='col-5';
            document.getElementById(element_list[8]).style.animationName='col-8';
            document.getElementById(element_list[9]).style.animationName='col-2';
            document.getElementById(element_list[10]).style.animationName='col-7';
            document.getElementById(element_list[11]).style.animationName='col-6';
            document.getElementById(element_list[12]).style.animationName='col-11';
            document.getElementById(element_list[13]).style.animationName='col-13';
            animation_delays();
            blink(element_list[14]);
            click=15;
        } 
    }
    else if(click==15){
        if(round16_list.includes(id)){
            ind15=round16_list.indexOf(id);
            round16_list.splice(ind15,1);
        }
        else{
            alert("Game Over");
            disp_scores(click);
        }
        if(round16_list.length==0){
            alert("You Won!!");
            click=16;
            disp_scores(click);
        } 
    }
}
function animation_delays(){
    document.getElementById(element_list[0]).style.animationDelay='1s';
    document.getElementById(element_list[1]).style.animationDelay='2s';
    document.getElementById(element_list[2]).style.animationDelay='3s';
    document.getElementById(element_list[3]).style.animationDelay='4s';
    document.getElementById(element_list[4]).style.animationDelay='5s';
    document.getElementById(element_list[5]).style.animationDelay='6s';
    document.getElementById(element_list[6]).style.animationDelay='7s';
    document.getElementById(element_list[7]).style.animationDelay='8s';
    document.getElementById(element_list[8]).style.animationDelay='9s';
    document.getElementById(element_list[9]).style.animationDelay='10s';
    document.getElementById(element_list[10]).style.animationDelay='11s';
    document.getElementById(element_list[11]).style.animationDelay='12s';
    document.getElementById(element_list[12]).style.animationDelay='13s';
    document.getElementById(element_list[13]).style.animationDelay='14s';
    document.getElementById(element_list[14]).style.animationDelay='15s';
}
function blink(element){
    var box=document.getElementById(element);
    box.style.animationName="blinker";
}
function disp_scores(val){
    document.getElementById('try').innerHTML="Click here to Try Again";
    if(val==0){
        document.getElementById('disp').innerHTML="Your Score is 0";
    }
    if(val==1){
        document.getElementById('disp').innerHTML="Your Score is 1";
    }
    if(val==2){
        document.getElementById('disp').innerHTML="Your Score is 2";
    }
    if(val==3){
        document.getElementById('disp').innerHTML="Your Score is 3";
    }
    if(val==4){
        document.getElementById('disp').innerHTML="Your Score is 4";
    }
    if(val==5){
        document.getElementById('disp').innerHTML="Your Score is 5";
    }
    if(val==6){
        document.getElementById('disp').innerHTML="Your Score is 6";
    }
    if(val==7){
        document.getElementById('disp').innerHTML="Your Score is 7";
    }
    if(val==8){
        document.getElementById('disp').innerHTML="Your Score is 8";
    }
    if(val==9){
        document.getElementById('disp').innerHTML="Your Score is 9";
    }
    if(val==10){
        document.getElementById('disp').innerHTML="Your Score is 10";
    }
    if(val==11){
        document.getElementById('disp').innerHTML="Your Score is 11";
    }
    if(val==12){
        document.getElementById('disp').innerHTML="Your Score is 12";
    }
    if(val==13){
        document.getElementById('disp').innerHTML="Your Score is 13";
    }
    if(val==14){
        document.getElementById('disp').innerHTML="Your Score is 14";
    }
    if(val==15){
        document.getElementById('disp').innerHTML="Your Score is 15";
    }
    if(val==16){
        document.getElementById('disp').innerHTML="Your Score is 16";
    }
    document.getElementById('try').onclick=function(){
        location.reload();
    }
}