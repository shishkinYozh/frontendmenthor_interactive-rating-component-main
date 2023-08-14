window.onload = () => {
    try {
        let chosen_rating = 0;
        const rate_list = document.querySelectorAll(".mark");
        const submit_button = document.querySelector(".submit_button");
        const section_rate_me = document.querySelector(".rate_me");
        const section_thank_you = document.querySelector(".thank_you");
        const your_result = document.querySelector(".your_result");
    
    
        rate_list.forEach((mark) => {
            mark.addEventListener('click', (e) => {
                try {
                    const chosen_one = document.querySelector(".chosen_one");
                    chosen_one.classList.remove("chosen_one");
                } catch(e) {};
                e.target.classList.add("chosen_one");
                chosen_rating = e.target.innerHTML;
            });
        });
    
    
        submit_button.addEventListener('click', () => {
            if(chosen_rating) {
                your_result.innerHTML = chosen_rating;
                section_rate_me.classList.add("hidden");
                section_thank_you.classList.remove("hidden");
            }
        });
    
    } catch(e) {
        console.log(e);
    }
}