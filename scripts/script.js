async function getData(url)
    {
        let res = await fetch(url)
        let data = await res.json();
        return data
    }

    function append(data)
    {
        let container = document.getElementById('cont')
        data.forEach(element => {
            let div = document.createElement('div');
            let image = document.createElement('img'); 
            let name = document.createElement('p') 
            let des = document.createElement('div') 
            let btn = document.createElement('button')
            btn.innerText = 'PLACE ORDER'
            btn.style.marginTop = '20px'
            btn.style.backgroundColor = 'green'
            btn.style.color ='white'
            btn.onclick = ()=>
            {
                localStorage.setItem('foodCart',JSON.stringify([element]))
                window.location.href = 'cart.html'
            }

            image.src = element.strCategoryThumb;
            name.textContent = element.strCategory;
            des.textContent = element.strCategoryDescription;
            div.append(image,name,des,btn)
            container.appendChild(div)
            
        });
    }
   function refer()
   {
       window.location.href = 'index.html'
   }
export {getData ,append,refer}
    