import path from 'path';

export default function(source) {
    var callback = this.async();
    var headerPath = path.resolve('header.js');

    this.addDependency(headerPath);

    fs.readFile(headerPath, 'utf-8', function(err, header) {
        if(err) return callback(err);
        //这里的 callback 相当于异步版的 return
        callback(null, header + "\n" + source);
    });
};