var top_imeage = [
    
    {
    image_url:
       " https://assets.pharmeasy.in/apothecary/images/medicine_ff.webp?dim=256x0 ",
      name: "Covid essentials",
      offer: "UPTO 20% OFF",
    },
    {
      image_url:
       " https://assets.pharmeasy.in/apothecary/images/labtest_ff.webp?dim=256x0 ",
      name: "Lab Tests",
      offer: "UPTO 70% OFF",
      
      
    },
    {
        image_url:
       " https://assets.pharmeasy.in/apothecary/images/healthcare_ff.webp?dim=256x0",
        name: "Helthcare",
        offer: "UPTO 60% OFF",
      
        
      },
      {
        image_url:
          "https://assets.pharmeasy.in/apothecary/images/health_blogs_ff.webp?dim=256x0",
        name: "Health Blogs",
        
        
      },
      {
        image_url:
          "	https://assets.pharmeasy.in/apothecary/images/plus_ff.webp?dim=256x0",
        name: "plus",
        offer: "SAVE 5% EXTRA",
        
      },
      {
        image_url:
          "https://assets.pharmeasy.in/apothecary/images/offers_ff.webp?dim=256x0",
        name: "Offer",
        offer: "",

        
      },
      {
        image_url:
          "https://assets.pharmeasy.in/apothecary/images/offers_1_ff.webp?dim=256x0",
        name: "Surgeries",
        offer: "",
        
      },
      {
        image_url:
          "https://assets.pharmeasy.in/apothecary/images/value_store.png?dim=256x0",
        name: "value Store",  
        offer:" UPTO 50% OFF",
   },
]
displayImg();
    var slide= [
        {
            image_url:
            "https://cdn01.pharmeasy.in/dam/banner/banner/833b0458766-HP.jpg",
            
        },
        {
            image_url:
            "https://cdn01.pharmeasy.in/dam/banner/banner/093f30fa096-revisedgrand1000.jpg",
            
        },
        {
            image_url:
            "https://cdn01.pharmeasy.in/dam/banner/banner/c0034c14fe6-634X274.jpg",
            
        },
    ]
    middisplay();
function displayImg (){
    top_imeage.map(function(elem){
        var div = document.createElement("div");
        var images = document.createElement("img");
        images.setAttribute("src", elem.image_url);
      
        images.setAttribute("alt", elem.id);
        images.setAttribute("id","img")
        var tag_name = document.createElement("div");
         tag_name.innerText = elem.name
         tag_name.setAttribute("id", "title")
        var dist = document.createElement("div");
        dist.innerText =elem. offer;
        dist.style.color="orange"
        dist.style.fontSize="12px"
        dist.style.textAlign="center"

         
   
    div.append(images, tag_name, dist);
    document.querySelector("#top").append(div);
    
    })

}
function middisplay(){
    slide.map(function(elem){
        var div = document.createElement("div");
        var sld = document.createElement("img");
        sld.setAttribute("src", elem.image_url);
        sld.setAttribute("alt", elem.id);
        sld.setAttribute("id", "b_img");
        div.append(sld);
        document.querySelector("#banner").append(div);
    })
}
// slder property part 
