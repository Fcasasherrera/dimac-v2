import axios from 'axios';
let url = 'https://cuceimobile.tech/Escuela/datosudeg.php'
let urlLocal = 'https://proyectoreactprogramacionweb.000webhostapp.com/altaCitas.php'

export const loginUDG = ({user, pass}) => {
    url += `?codigo=${user}&nip=${pass}`
    return new Promise<>((resolve, reject) => {
        axios.get(url)
            .then(res => {
                if (res.data === 0) {
                    resolve('err');
                }
                let response = {
                    name: res.data.split(',')[2],
                    codigo: res.data.split(',')[1],
                    carrera: res.data.split(',')[4],
                }
                resolve(response)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export const insertCite = ({ dayWeek, month, day, hour, code, name, carreer }) => {
    urlLocal += `?diasemana=${dayWeek}&mes=${month}&dia=${day}&hora=${hour}&codigo=${code}&nombre=${name}&carrera=${carreer}`
    return new Promise<>((resolve, reject) => {
        axios.get(urlLocal)
            .then(res => {
                if (res.data === 0) {
                    resolve('err');
                }
                resolve(res.data)
            })
            .catch(err => {
                reject(err)
            })
    })
}