export const formatDate = (date) => {
    const dateFormat = new Date(date);
    const isoDate = dateFormat.toISOString();
    return `${isoDate.substr(0, 10)} ${isoDate.substr(11, 8)}`;
};
