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
        case 'max3dplus':
            message = 'MAX 3D PLUSH';
            break;
        case 'max3d':
            message = 'MAX3D';
            break;
        case 'max4d':
            message = 'MAX4D';
            break;
        case 'compute123':
            message = 'Điện toán 1-2-3';
            break;
        case 'compute636':
            message = 'Điện toán 6-3-6';
            break;
        case 'godofwealth':
            message = 'Thần tài 4';
            break;
        case 'loto234':
            message = 'Loto 2-3-4';
            break;
        case 'loto2':
            message = 'Loto 2 số';
            break;
        case 'loto3':
            message = 'Loto 3 số';
            break;
        case 'loto5':
            message = 'Loto 5 số';
            break;
        case 'kienthiet':
            message = 'Kiến thiết';
            break;
        default:
            message = '';
            break;
    }
    return message;
};

export const checkStatus = (status, result) => {
    let message = '';
    switch (status) {
        case 'delay':
            message = 'Chờ in vé';
            break;
        case 'printed':
            message = 'Đã in vé';
            break;
        case 'drawned':
            if (result === 'TRÚNG GIẢI') {
                message = 'Trúng giải';
            } else {
                message = 'Đã xổ';
            }
            break;
        case 'canceled':
            message = 'Đã hủy';
            break;
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

export const statusUser = (status) => {
    let message = '';
    switch (status) {
        case 'working':
            message = 'Đang hoạt động';
            break;
        case 'pending':
            message = 'Chờ duyệt';
            break;
        case 'blocked':
            message = 'Tạm khóa';
            break;
        default:
            message = '';
            break;
    }
    return message;
};

export const checkGender = (gender) => {
    let message = '';
    switch (gender) {
        case 'male':
            message = 'Nam';
            break;
        case 'female':
            message = 'Nữ';
            break;
        default:
            message = 'Khác';
            break;
    }
    return message;
};

export const statusExchange = (status) => {
    let message = '';
    switch (status) {
        case 'success':
            message = 'Đã đổi thưởng';
            break;
        case 'delay':
            message = 'Chờ đổi thưởng';
            break;
        default:
            message = 'Khác';
            break;
    }
    return message;
};

export const checkKey = (key) => {
    let message = '';
    switch (key) {
        case 'exchange_local_min':
            message = 'Rút ví LUCKY';
            break;
        case 'exchange_momo_min':
            message = 'Rút ví MOMO';
            break;
        case 'exchange_vnpay_min':
            message = 'Rút ví VNPAY';
            break;
        case 'exchange_bank_min':
            message = 'Rút TK Bank';
            break;
        case 'recharge_momo_min':
            message = 'Nạp MOMO';
            break;
        case 'recharge_vnpay_min':
            message = 'Nạp VNPAY';
            break;
        case 'exchange_local_max':
            message = 'Rút ví LUCKY';
            break;
        case 'exchange_momo_max':
            message = 'Rút ví MOMO';
            break;
        case 'exchange_vnpay_max':
            message = 'Rút ví VNPAY';
            break;
        case 'exchange_bank_max':
            message = 'Rút TK Bank';
            break;
        case 'recharge_momo_max':
            message = 'Nạp MOMO';
            break;
        case 'recharge_vnpay_max':
            message = 'Nạp VNPAY';
            break;
        case 'ticket_storage_fee':
            message = '% Phí lưu vé';
            break;
        case 'recharge_momo_status':
            message = 'Nạp MOMO';
            break;
        case 'recharge_vnpay_status':
            message = 'Nạp VNPAY';
            break;
        case 'recharge_bank_status':
            message = 'Nạp TK Bank';
            break;
        default:
            message = 'Khác';
            break;
    }
    return message;
};
