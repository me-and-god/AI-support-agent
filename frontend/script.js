const API_BASE = "http://localhost:8000";

async function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    const formData = new FormData();
    formData.append("file",file);

    await fetch(`${API_BASE}/upload/`, {
        method:"POST",
        body:formData
    });

    alert("File upload!");
}

async function sendQuery() {
    const query = document.getElementById("query").value;
    const res = await fetch(`${API_BASE}/chat/`,{
        method:"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({ query: query })
    });

    const data = await res.json();
    console.log(data);

    document.getElementById("response").innerText =
        "Answer:\n" + data.answer +
        "\n\nSources:\n" +
        data.sources.map(s => s.text).join("\n---\n");
}