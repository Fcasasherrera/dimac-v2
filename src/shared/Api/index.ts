import axios from 'axios';
let baseUrl = 'http://api.opalosoft.com/public/v1.0/dimac/'
let loginUrl = 'http://api.opalosoft.com/public/v1.0/login/login'
import Store from "react-native-fs-store";

const Storage = new Store('default');

export const logOut = async () => {
    await Storage.clear();
    return 'success';
}
export const getCurrent = async (redirect:any) => {
    let use_id = await Storage.getItem('use_id');
    if (use_id !== undefined) {
        redirect(use_id);
    }
}

export const loginApi = async (data) => {
    return new Promise((resolve, reject) => {

        axios.post(loginUrl, data)
            .then(async (res: any) => {
                // console.log('res', res.data);
                if (!res.data.access_token_users) {
                    resolve('error')
                } else {
                    await Storage.setItem('numeroEmpleado', res.data.access_token_users.numeroEmpleado);
                    await Storage.setItem('use_id', res.data.access_token_users.use_id);
                    await Storage.setItem('access_token_users', res.data.access_token_users);
                    resolve(res.data.access_token_users);
                }
                
            })
            .catch((err) => {
                console.log('Error grom', err)
                reject(err)
            });
    })
}


const ResourceData = (uri, data, type) => {
    
    return new Promise((resolve, reject) => {

        axios.[type](uri, data)
            .then((res) => {
                // console.log(res.data.result);
                resolve(res.data.result)
            })
            .catch((err) => {
                console.log('Error grom', err)
                reject(err)
            });
    })
}

export const postAlert = async () => {
    const use_id = await Storage.getItem('use_id');
    let newData = {
        id_usuario: use_id,
        numeroTelefono: '2222222222'
    }
    return ResourceData(baseUrl + 'boton_panico', newData, 'post')
}

/* chats */
export const postOnLoadChat = async () => {
    const use_id = await Storage.getItem('use_id');
    let newData = {
        id_usuario: use_id,
    }
    let response:any = ResourceData(baseUrl + 'entrandoChat', newData, 'post')
    await Storage.setItem('id_chat', response.id_chat);
    return response;
}
export const postCheckChat = async (id_chat) => {
    let newData = {
        id_chat: id_chat,
    }
    return ResourceData(baseUrl + 'consultarConverSacion', newData, 'post')
}
export const postSendMessage = async (id_chat, message) => {
    let newData = {
        id_chat: id_chat,
        comentarios: message
    }
    return ResourceData(baseUrl + 'mandarTextoChat', newData, 'post')
}
/* end chats */

export const postPayrolls = async () => {
    const numeroEmpleado = await Storage.getItem('numeroEmpleado');
    let newData = {
        numeroEmpleado: numeroEmpleado,
    }
    return ResourceData(baseUrl + 'recibos_nominas', newData, 'post')
}
export const postCourses = async () => ResourceData(baseUrl + 'videos', {}, 'post')
export const postNotifications = async () => ResourceData(baseUrl + 'alertasenviadas', {}, 'post')

