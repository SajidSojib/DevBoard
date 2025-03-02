const dateObj = new Date();
const date = dateObj.toDateString().split(" ");

document.getElementById('day').innerText=date[0];
date.shift();
document.getElementById('date').innerText=date.join(" ");

const completeEle=document.getElementsByClassName('completed-btn');
for (let i = 0; i < completeEle.length; i++) {
    completeEle[i].addEventListener('click',
        function(){
            alert("Task Completed");
        }
    );
    }    

