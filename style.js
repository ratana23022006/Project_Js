const items = {
    item1: [
        "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2Fi_Phone_1280x853px_15_Pro_2_cf647d9dbd.png&w=3840&q=75",
        "100.34 $",
        "IPhone 16Pro max",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
        "Reviews (24)"
    ],
    item2: [
        "https://static.vecteezy.com/system/resources/previews/047/459/317/non_2x/digital-camera-isolated-on-transparent-background-free-png.png",
        "740.00 $",
        "Summer Addides",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
        "Reviews (84)"
    ],
    item3: [
        "https://electroworld.abenson.com/media/catalog/product/1/7/172885_2020.jpg",
        "140.00 $",
        "Smart Watch News",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
        "Reviews (44)"
    ],
}

const btn1 = document.getElementById('btn1');
btn1.innerHTML="";
const keys = Object.keys(items);

for(let i=0;i<keys.length;i++){
    btn1.innerHTML+=`
        <div id="btn1" class="box-1">
            <div class="box-img">
                <img 
                src="${items[keys[i]][0]}"
                 alt="">
            </div>
            <div class="box-txt">
                <div class="btn">
                    <div class="star">
                        <i style="color: orange;" class="fa-solid fa-star"></i>
                        <i style="color: orange;" class="fa-solid fa-star"></i>
                        <i style="color: orange;" class="fa-solid fa-star"></i>
                        <i style="color: gray;" class="fa-solid fa-star"></i>
                        <i style="color: gray;" class="fa-solid fa-star"></i>
                    </div>
                    <div class="sell">
                        <span>${items[keys[i]][1]}</span>
                    </div>
                </div>
                <h1>${items[keys[i]][2]}</h1>
                <p>${items[keys[i]][3]}</p>
                <p style="margin-top: 30px; font-size: 22px; color: gray;">${items[keys[i]][4]}</p>
            </div>
        </div>
    `;
}