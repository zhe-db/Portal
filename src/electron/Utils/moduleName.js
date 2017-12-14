import path from 'path';

const moduleName = (filePath) => {
    return path.basename(filePath, '.js');
};

export default moduleName;
