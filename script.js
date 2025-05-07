function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    const meridian = (hours >= 12) ? "PM" : "AM"; 
   hours = (hours % 12) || 12; 
    const minutes = now.getMinutes().toString().padStart(2, '0');   
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours} : ${minutes} : ${seconds} ${meridian}`;
    const date = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('date').textContent = date;
    document.getElementById('clock').textContent = time;
}

updateClock();
setInterval(updateClock, 1000);