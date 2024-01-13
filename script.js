"use strict"

var bal=document.getElementById("balance");
var inc=document.getElementById("income");
var exp=document.getElementById("expense");
var btn=document.getElementById('btn')

var text = document.querySelector('.txt');
var amount=document.getElementById("amt");

var b=0;
var i=0;
var e=0;
var count=0;
btn.addEventListener("click",transaction);

    function trans_add()
        {

            bal.innerText='₹'+b;
            inc.innerText='₹'+i;
            exp.innerText='₹'+e;

        }
    function clear()
        {
            text.value='';
            amount.value=''
        }
    
    function transaction()
        {
            var txt = document.querySelector('.txt').value;
            var amt=document.getElementById("amt").value;
            var his=document.querySelector('.inner3-1');
            
            var his_div=document.createElement('div');
            his_div.className='h-div';
            his_div.id='h-div1';

            var delbtn = document.createElement("button");
            delbtn.innerText="X";
            delbtn.id='db';
            delbtn.className='db1';
            
            var history=document.createElement('button');
            history.id='his';

            let history1=document.createElement('h3');
            let history2=document.createElement('h3');
            
            delbtn.addEventListener("click",del)  
            function del()
                {
                    var dbAmt=delbtn.nextSibling.lastChild.innerText;
                    if(parseInt(dbAmt)>0){
                        let dbInc=dbAmt.replace('+','');
                        i-=parseInt(dbInc);
                        b-=parseInt(dbInc);
                        count--;
                    }
                     else{
                        let dbExp=dbAmt.replace('-','');
                        e-=parseInt(dbExp);
                        b+=parseInt(dbExp);
                        count--;
                    }
                    delbtn.parentElement.remove();
                    trans_add();
                    console.log(dbAmt);
                    console.log(count)

                }

            his_div.addEventListener('mouseover',cancel)
            function cancel()
                {
                  delbtn.classList.remove('db1')
                  delbtn.classList.add('db2')
                }
            
            
                his_div.addEventListener('mouseout',cancel1)
                function cancel1()
                    {
                        delbtn.classList.add('db1');
                        delbtn.classList.remove('db2');

                    }
    

            console.log(txt);
            console.log(amt);

            if ((txt.length<1 )||(amt.length<1)) 
                {
                    alert('Please enter valid text and amount.');
                }

            else
                {

                    if(parseInt(amt)>0)
                        {
                        
                            let a=amt.replace('+','');
                            i+= parseInt(a);
                            his.append(his_div);
                            his_div.append(delbtn,history);
                            history.append(history1,history2);
                            history.classList.add('border-green')
                            history1.innerHTML=txt ;
                            history2.innerText=amt; 
                            count++;
                    
                        }

                    else
                        {
                        
                            let b=amt.replace('-','');
                            e+= parseInt(b);
                            his.append(his_div);
                            his_div.append(delbtn,history);
                            history.append(history1,history2);
                            history.classList.add('border-Red');
                            history1.innerHTML=txt ;
                            history2.innerText=amt; 
                            count++;

                        }

                }
            console.log(count)
            // if(count>3 )
            //     {
                  his.classList.add('scroll')  
                // }
                
  
                b=i-e;
                clear();
                trans_add(); 
        }