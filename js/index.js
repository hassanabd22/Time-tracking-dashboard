let Box = document.querySelectorAll('.num');
let Li  = document.querySelectorAll('li');
 
fetch('../data.json')
.then(response => response.json())
.then(data => {
    for (let i =0 ; i < 6 ; i++) {
        Box[i].children[0].innerHTML = data[i].timeframes.daily.current + ' hrs';
        Box[i].children[1].innerHTML = 'last day - '+ data[i].timeframes.daily.previous + 'hrs';
        Li.forEach(li => {
            li.addEventListener('click' , () => {
                let times = li.dataset.time;
                Box[i].children[0].innerHTML = data[i].timeframes[times].current + ' hrs';
                Box[i].children[1].innerHTML = 'last '+ times +' - '+ data[i].timeframes[times].previous + 'hrs' ;
            })
        
        })
        
    }

})

Li.forEach( li => {
    li.addEventListener('click' , (e) => {
        Li.forEach(e => {
            e.classList.remove('active')
        })
        e.currentTarget.classList.add('active')
    })
})