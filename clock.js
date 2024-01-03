function updateTime()
{
 //get current date
	let d = new Date;
	let date = d.getDate();
	document.getElementById("m_dd").innerText = date;
	
//Get day
	let weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
	let day = d.getDay();
	if(day == 0)
	{
		document.getElementById("m_sun").innerText = weekday[day];
		document.getElementById("m_sun").style.backgroundColor = 'red';
	}
	
	else if(day == 1)
	{
		document.getElementById("m_MON").innerText = weekday[day];
		document.getElementById("m_MON").style.backgroundColor = 'red';
	}
	
	else if(day == 2)
	{
		document.getElementById("m_tue").innerText = weekday[day];
		document.getElementById("m_tue").style.backgroundColor = 'red';
	}
	
	else if(day == 3)
	{
		document.getElementById("m_wed").innerText = weekday[day];
		document.getElementById("m_wed").style.backgroundColor = 'red';
	}
	
	else if(day == 4)
	{
		document.getElementById("m_thu").innerText = weekday[day];
		document.getElementById("m_thu").style.backgroundColor = 'red';
	}
	
	else if(day == 5)
	{
		document.getElementById("m_fri").innerText = weekday[day];
		document.getElementById("m_fri").style.backgroundColor = 'red';
	}
	
	else if(day == 6)
	{
		document.getElementById("m_sat").innerText = weekday[day];
		document.getElementById("m_sat").style.backgroundColor = 'red';
	}
	
	
//Get month change into normal time and update AM and PM

	let month = d.getMonth();
	month++;
	document.getElementById("m_mm").innerText = month;
	
	let year = d.getFullYear();
	document.getElementById("m_yy").innerText = year;
	
	let m= "AM";
	let hours = d.getHours();
		if(hours == 0)
		{
			hours=12;
			document.getElementById("m_am").style.backgroundColor = 'red';
		}
		else if(hours > 12)
		{
			hours = hours - 12;
			document.getElementById("m_pm").style.backgroundColor = 'red';
		}
	document.getElementById("m_hh").innerText = hours;
	
	let min = d.getMinutes();
	document.getElementById("m_m").innerText = min;
	
	let seconds = d.getSeconds();
	document.getElementById("m_ss").innerText = seconds;
}

updateTime();
setInterval(updateTime, 1000);
