const dateObj = new Date();
// console.log(dateObj.toDateString());
// console.log(dateObj.toLocaleString());

const date = dateObj.toDateString().split(" ");

document.getElementById('day').innerText=date[0];
date.shift();
document.getElementById('date').innerText=date.join(" ");

const completeEle=document.getElementsByClassName('completed-btn');
for (let i = 0; i < completeEle.length; i++) {
    completeEle[i].addEventListener('click',
        function(){
            alert("Board Updated Successfully");
            const taskCount=parseInt(document.getElementById('task-count').innerText);
            document.getElementById("task-count").innerText=taskCount-1;
            const totalCompleted=parseInt(document.getElementById('total-completed').innerText);
            document.getElementById("total-completed").innerText=totalCompleted+1;

            completeEle[i].classList.add('bg-gray-300');
            completeEle[i].classList.add("text-gray-400");
            completeEle[i].classList.add("border-gray-300");
            completeEle[i].classList.add("shadow-none");
            completeEle[i].classList.add("cursor-not-allowed");

            if(taskCount-1===0) {
                alert('Congrates!!! Tou have completed all the current tasks');
            }

            const history=document.getElementById('history');
            const p=document.createElement('p');
            const now = new Date().toLocaleTimeString('en-US', { hour12: true });            
            p.innerText="You have completed The Task "+document.getElementsByClassName('task-title')[i].innerText+" at "+now;
            p.classList.add('opacity-80');
            p.classList.add('p-2');
            p.classList.add('bg-[#F4F7FF]');
            p.classList.add('rounded-lg');
            p.classList.add('history-pera');
            history.appendChild(p);
        }
    );
    }    

document.getElementById('clear-btn').addEventListener('click',
    function(){
        const totalPera=document.getElementsByClassName('history-pera');
        for (let i = 0; i < totalPera.length; i++) {
            totalPera[i].classList.add('hidden');
        }
    }
)
