import axios from "axios";

const toggleSpinner = () => {
    const spinner = document.getElementById('spinner');
    spinner.classList.toggle('hidden');
};

const showAlert = (message, type = 'success') => {
    const alert = document.getElementById('alert');
    const alertButton = document.getElementById('alert-button');
    const alertMessage = document.getElementById('alert-message');
    alertMessage.innerText = message;
    if (type === 'success') {
        alertButton.classList.remove('bg-red-700', 'hover:bg-red-950');
        alertButton.classList.add('bg-emerald-700', 'hover:bg-emerald-950');
    } else {
        alertButton.classList.remove('bg-emerald-700', 'hover:bg-emerald-950');
        alertButton.classList.add('bg-red-700', 'hover:bg-red-950');
    }
    alert.classList.toggle('hidden');
}

export async function handleCreate(e) {
    toggleSpinner();
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
        const data = Object.fromEntries(formData.entries());
        axios
            .post(e.target.action, data,{
                headers: {
                    'Content-Type': 'multipart/form-data'
                }            
            })
            .then(function (response) {
                showAlert(response.statusText);
                /* console.log("Todo en orden para Create");
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText); */
            })
            .catch(function (error) {
                if (error.response) {
                    // La respuesta fue hecha y el servidor respondió con un código de estado
                    // que esta fuera del rango de 2xx
                    showAlert(error.response.statusText, 'error');
                    console.error(error.response.data);
                    console.error(error.response.status);
                    console.error(error.response.statusText);
                    //console.error(error.response.config);
                    //console.error(error.response.headers);
                    //console.error(error.response.request);
                } else if (error.request) {
                    // La petición fue hecha pero no se recibió respuesta
                    // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
                    // http.ClientRequest en node.js
                    showAlert(error.request.statusText, 'error');
                    console.error(error.request.data);
                    console.error(error.request.status);
                    console.error(error.request.statusText);
                    //console.error(error.request.config);
                    //console.error(error.request.headers);
                    //console.error(error.request.request);
                } else {
                    // Algo paso al preparar la petición que lanzo un Error
                    showAlert(error.message, 'error');
                    console.log("Error", error.message);
                }
            }).finally(() => {
                toggleSpinner();
            });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Ocurrió un error: ", error.message);
        }
        toggleSpinner();
        showAlert('Ha ocurrido un error inesperado', 'error');
    }
};

export function handleDelete(e) {
    toggleSpinner();
    e.preventDefault();
    const formData = new FormData(e.target);
    const id = formData.get("id");
    formData.delete("id");
    try {
        axios
            .delete(`${e.target.action}/${id}`)
            .then(function (response) {
                showAlert(response.statusText);
                /* console.log("Todo en orden para Delete");
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText); */
            })
            .catch(function (error) {
                if (error.response) {
                    // La respuesta fue hecha y el servidor respondió con un código de estado
                    // que esta fuera del rango de 2xx
                    showAlert(error.response.statusText, 'error');
                    console.error(error.response.data);
                    console.error(error.response.status);
                    console.error(error.response.statusText);
                    //console.error(error.response.config);
                    //console.error(error.response.headers);
                    //console.error(error.response.request);
                } else if (error.request) {
                    // La petición fue hecha pero no se recibió respuesta
                    // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
                    // http.ClientRequest en node.js
                    showAlert(error.request.statusText, 'error');
                    console.error(error.request.data);
                    console.error(error.request.status);
                    console.error(error.request.statusText);
                    //console.error(error.request.config);
                    //console.error(error.request.headers);
                    //console.error(error.request.request);
                } else {
                    // Algo paso al preparar la petición que lanzo un Error
                    showAlert(error.message, 'error');
                    console.log("Error", error.message);
                }
            }).finally(() => {
                toggleSpinner();
            });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Ocurrió un error: ", error.message);
        } else {
            console.error(error);
        }
        toggleSpinner();
        showAlert('Ha ocurrido un error inesperado', 'error');
    }
};

export const handleFind = async (endpoint) => {
    try {
        return await axios.get(endpoint)
            .then((response) => {
                return response;
            })
            .catch((error) => {
                if (error.response) {
                    console.error(error.response.data);
                    console.error(error.response.status);
                    console.error(error.response.statusText);
                    return error.response;
                } else if (error.request) {
                    console.error(error.request.data);
                    console.error(error.request.status);
                    console.error(error.request.statusText);
                    return error.request;
                } else {
                    console.error("Error", error.message);
                    return error;
                }
            });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Ocurrió un error: ", error.message);
        } else {
            console.error(error);
        }
        return error;
    }
};

export function handleUpdate(e) {
    toggleSpinner();
    e.preventDefault();
    let formData = new FormData(e.target);
    const id = formData.get("id");
    formData.delete("id");
    try {
        const data = Object.fromEntries(formData.entries());
        axios
            .put(`${e.target.action}/${id}`, data)
            .then(function (response) {
                showAlert(response.statusText);
                /* console.log("Todo en orden para Update");
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText); */
            })
            .catch(function (error) {
                if (error.response) {
                    // La respuesta fue hecha y el servidor respondió con un código de estado
                    // que esta fuera del rango de 2xx
                    showAlert(error.response.statusText, 'error');
                    console.error(error.response.data);
                    console.error(error.response.status);
                    console.error(error.response.statusText);
                    //console.error(error.response.config);
                    //console.error(error.response.headers);
                    //console.error(error.response.request);
                } else if (error.request) {
                    // La petición fue hecha pero no se recibió respuesta
                    // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
                    // http.ClientRequest en node.js
                    showAlert(error.request.statusText, 'error');
                    console.error(error.request.data);
                    console.error(error.request.status);
                    console.error(error.request.statusText);
                    //console.error(error.request.config);
                    //console.error(error.request.headers);
                    //console.error(error.request.request);
                } else {
                    // Algo paso al preparar la petición que lanzo un Error
                    showAlert(error.message, 'error');
                    console.error("Error", error.message);
                }
            }).finally(() => {
                toggleSpinner();
            });
    } catch (error) {
        if (error instanceof Error) {
            console.error("Ocurrió un error: ", error.message);
        } else {
            console.error(error);
        }
        toggleSpinner();
        showAlert('Ha ocurrido un error inesperado', 'error');
    }
};