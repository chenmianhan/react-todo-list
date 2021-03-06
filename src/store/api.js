import axios from "axios";
//const URL = ' https://5e9ec500fb467500166c4658.mockapi.io/todos'
const URL = 'http://localhost:8888/todos'
export function getTodoList() {
    return axios({
        url: URL,
        method: 'get'
    })
}

export function deleteTodoList(id) {
    return axios({
        url: URL + '/' + id,
        method: 'delete'

    })
}
export function postTodoList(data){
    return axios({
        url:URL,
        method :'post',
        data:data
    })
}
export function patchTodoList(data){
    return axios({
        url:URL+'/'+data.id,
        method :'patch',
        data:data
    })
}
