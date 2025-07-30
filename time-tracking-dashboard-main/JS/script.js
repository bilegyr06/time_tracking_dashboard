console.log('script loaded successfully');
let jeremy_data;
const card_main_time = document.querySelectorAll('.js_main_time')
const card_prev_time = document.querySelectorAll('.js_prev_time')
const btns = document.querySelectorAll('button')
const daily_btn = btns[0]
const weekly_btn = btns[1]
const monthly_btn = btns[2]

fetch('./data.json')
    .then((res)=>{
        if(!res.ok){return console.log('Error retrieving response')}
        
        return res.json()
    })
    .then(data => {
        jeremy_data = data
        // console.log()

        daily_btn.addEventListener('click', () => {
            weekly_btn.classList.remove('timeframe_focus')
            card_main_time.forEach((card,i) => {
                card.textContent = `${jeremy_data[i].timeframes.daily.current}hrs`

            });
            card_prev_time.forEach((card2,i) => {
                card2.textContent = `Yesterday - ${jeremy_data[i].timeframes.daily.previous}hrs`
            });

        })

        weekly_btn.addEventListener('click', () =>{
            weekly_btn.classList.remove('timeframe_focus')
            card_main_time.forEach((card,i) => {
                card.textContent = `${jeremy_data[i].timeframes.weekly.current}hrs`
            });
            card_prev_time.forEach((card2,i) => {
                card2.textContent = `Last Week - ${jeremy_data[i].timeframes.weekly.previous}hrs`
            });
        })

        weekly_btn.click()
        weekly_btn.classList.add('timeframe_focus')

        monthly_btn.addEventListener('click', ()=>{
            weekly_btn.classList.remove('timeframe_focus')
            card_main_time.forEach((card,i) => {
                card.textContent = `${jeremy_data[i].timeframes.monthly.current}hrs`
            });
            card_prev_time.forEach((card2,i) => {
                card2.textContent = `Last Month - ${jeremy_data[i].timeframes.monthly.previous}hrs`
            });            
        })
     
    })
    .catch(error => console.error(`Fetch Error: ${error}`))


    

    