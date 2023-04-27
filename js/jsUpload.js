//upload the file
let file = document.getElementById('upload');
let buttons = document.querySelectorAll('.mind');
let progress = document.querySelector('progress');
let p_i = document.querySelector('.progress-indicator');
let load = 0;
let proces = "";

file.oninput = () => {
    let filename = file.files[0].name;
    let extension = filename.split('.').pop();
    let filesize = file.files[0].size;

    if (filesize <= 1000000) {
        filesize = (filesize / 1000).toFixed(2) + 'kb';
    }
    if (filesize == 1000000 || filesize <= 1000000000) {
        filesize = (filesize / 1000000).toFixed(2) + 'mb';
    }
    if (filesize == 1000000000 || filesize <= 1000000000000) {
        filesize = (filesize / 1000000000).toFixed(2) + 'gb';
    }
    document.querySelector('label').innerText = filename;
    document.querySelector('.ex').innerText = extension;
    document.querySelector('.size').innerText = filesize;
    getFile(filename)
}

let upload = () => {
    if (load >= 100) {
        clearInterval(proces);
        p_i.innerHTML = '100%' + ' ' + 'Yükleme Tamamlandı';
        document.querySelector('.mind.active').classList.remove('active');
    } else {
        load++;
        progress.value = load;
        p_i.innerHTML = load + '%' + ' ' + 'Yükleniyor ';
    }
}

function getFile(fileName) {
    if (fileName) {
        document.querySelector('.pr').style.display = "block";
        load = 0;
        progress.value = 0;
        p_i.innerText = '';
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].onclick = function (e) {
                e.preventDefault();
                this.classList.add('active');
                this.nextElementSibling.style.visibility = 'visible';
                proces = setInterval(upload, 100);
            }
        }

        // Cancel button functionality
        let cancelBtn = document.querySelector('.cancle');
        cancelBtn.onclick = function (e) {
            e.preventDefault();
            clearInterval(proces);
            load = 0;
            progress.value = 0;
            p_i.innerHTML = 'Upload cancelled';
            document.querySelector('.mind.active').classList.remove('active');
            document.querySelector('.pr').style.display = "none";
        }
    }
}