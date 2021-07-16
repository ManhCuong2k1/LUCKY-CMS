export const checkType = (type) => {
    let message = '';
    switch (type) {
        case 'keno':
            message = 'KENO';
            break;
        case 'power':
            message = 'POWER';
            break;
        case 'mega':
            message = 'MEGA';
            break;
        case 'plus3d':
            message = 'PUSH 3D';
            break;
        case '3d':
            message = '3D';
            break;
        case '4d':
            message = '4D';
            break;
        default:
            message = '';
            break;
    }
    return message;
};

export const checkStatus = (status) => {
    let message = '';
    switch (status) {
        case 'delay':
            message = 'Chờ in vé';
            break;
        case 'printed':
            message = 'Đã in vé bởi Admin';
            break;
        // case 'mega':
        //     message = 'MEGA';
        //     break;
        // case 'plus3d':
        //     message = 'PUSH 3D';
        //     break;
        // case '3d':
        //     message = '3D';
        //     break;
        // case '4d':
        //     message = '4D';
        //     break;
        default:
            message = '';
            break;
    }
    return message;
};
