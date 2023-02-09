const d = document;

export default function galleryFilter(filter, imgsGallery){

    const $filter = d.getElementById(filter),
          $imgsGallery = d.querySelectorAll(imgsGallery),
          $btnClean = d.querySelector(".boxSearch .material-symbols-outlined");
          
    $filter.addEventListener("keyup",  (e) => {

        let search = $filter.value;

        $imgsGallery.forEach((e)=>{
            if (search === "")e.parentElement.classList.remove("hide");
            let imgGalleryAlt = e.alt.toLowerCase();
        
            if (imgGalleryAlt.includes(search)){
                e.parentElement.classList.remove("hide");
            }else {
                e.parentElement.classList.add("hide");
            }
        })
        
    })

    $btnClean.addEventListener("click", () => {

        $imgsGallery.forEach((e)=>{
            $filter.value = "";
            e.parentElement.classList.remove("hide");
        })
        
    })
    

}