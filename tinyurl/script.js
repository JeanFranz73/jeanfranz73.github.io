function link() {

    document.getElementById("result").value = "Loading..."
    document.getElementById("result").classList.remove("is-invalid")
    document.getElementById("btn-copy").setAttribute("disabled", "true")

    let url = document.getElementById("link").value
    let request = new XMLHttpRequest()

    request.open('GET', `https://tinyurl.com/api-create.php?url=${url}`, true)
    request.send()

    request.onreadystatechange = function () {
        if (request.status === 200) {
            document.getElementById("result").value = request.response

            document.getElementById("result").classList.remove("is-invalid")
            document.getElementById("result").removeAttribute("disabled")
            document.getElementById("btn-copy").removeAttribute("disabled")

        } else {
            document.getElementById("result").classList.add("is-invalid")
            document.getElementById("result").setAttribute("disabled", "true")
            document.getElementById("btn-copy").setAttribute("disabled", "true")
            document.getElementById("result").value = "Unexpected error, try again"
        }
    }
}

function copy() {
    let copyText = document.getElementById("result")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
}