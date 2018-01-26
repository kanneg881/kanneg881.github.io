var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        document.getElementById("ajax").innerHTML =
            this.responseText;
    }
};
xhttp.open("GET", "ajax_info.php", true);
xhttp.send();