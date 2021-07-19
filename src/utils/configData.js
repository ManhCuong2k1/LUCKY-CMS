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

export const checkName = (name) => {
    let message = '';
    switch (name) {
        case 'chanle_chansm':
            message = '( Chẵn lẻ ) - Chẵn nhỏ';
            break;
        case 'chanle_lesm':
            message = '( Chẵn lẻ ) - Lẻ nhỏ';
            break;
        case 'chanle_chanlg':
            message = '( Chẵn lẻ ) - Chẵn lớn';
            break;
        case 'chanle_lelg':
            message = '( Chẵn lẻ ) - Lẻ lớn';
            break;
        case 'chanle_hoa':
            message = '( Chẵn lẻ ) - Hòa';
            break;
        case 'lonnho_lon':
            message = '( Lớn nhỏ ) - Lớn';
            break;
        case 'lonnho_hoa':
            message = '( Lớn nhỏ ) - Hòa';
            break;
        case 'lonnho_nho':
            message = '( Lớn nhỏ ) - Nhỏ';
            break;
        default:
            message = '';
            break;
    }
    return message;
};
