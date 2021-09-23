const loadbuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data))
}

loadbuddies();

const displayBuddies = mybuddies => {
    const buddies = mybuddies.results;
    const buddiesSec = document.getElementById('buddies');
    for (const buddy of buddies) {
        const div = document.createElement('div');
        div.classList.add('col-md-4')
        div.innerHTML = `
         
         <div class='m-2'>
         <div class=''> photo: <br><img src="${buddy.picture.large}" alt="img"></div>
         <div class=''> name: ${buddy.name.first} ${buddy.name.last}</div>
         <div class=''> email: ${buddy.email}</div>
         <div class=''> phone: ${buddy.phone}</div>
         </div>
         
        
        `;
        buddiesSec.appendChild(div);
        console.log(buddy.email);
    }
    console.log(mybuddies.results);
}