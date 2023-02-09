const d = document,
$main = d.querySelector("main"),
$files = d.getElementById("files");

const uploader = (file) => {
    console.log(file);

    const formData = new FormData();
    formData.append("file", file);

    const res = fetch("assets/uploader.php", {
            method: "POST",
            //headers: {"enc-type": "multipart/form-data"},
            body: formData
        })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => {
        console.log(json)
    })
    .catch(err =>{
        let message = err.statusText || "Ocurrión un error";
        console.error(`Error ${err.status}: ${message}`);
    })
}

const progressUpload = (file) => {
    const $progress = d.createElement("progress"),
        $span = d.createElement("span");

    $progress.value = 0
    $progress.max = 100

    $main.insertAdjacentElement("beforeend", $progress);
    $main.insertAdjacentElement("beforeend", $span);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("progress", e => {
        //console.log('filereaderevent', e);
        let progress = parseInt((e.loaded * 100) / e.total);
        $progress.value = progress;
        $span.innerHTML = `<b>${file.name} - ${progress}%</b>`
    })

    fileReader.addEventListener("loadend", e => {
        uploader(file);
        setTimeout(() => {
            $main.removeChild($progress)
            $main.removeChild($span)
            $files.value = "";
        }, 3000);
    })
}

d.addEventListener("change", e => {
    if(e.target === $files){
        console.log(e.target.files)

        const files = Array.from(e.target.files);

        files.forEach(file => progressUpload(file));
    }
})