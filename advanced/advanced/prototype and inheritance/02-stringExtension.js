(function stringExtension() {

    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this
        }
        return this.toString()
    }
    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str
        }
        return this.toString()
    }
    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        }
        return false;
    }
    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (this.includes(' ')) {
            let lastSpaceIndex = this.length;
            do {
                lastSpaceIndex = this.lastIndexOf(' ', lastSpaceIndex - 1);
            } while (lastSpaceIndex !== -1 && lastSpaceIndex + 3 > n)
            return `${this.slice(0, lastSpaceIndex)}...`;
        }

        if (n > 3) {
            let string = `${this.slice(0, n - 3)}...`;
            return string;
        }
        return '.'.repeat(n);
    };
    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i.toString()}}`, params[i])
        }
        return str
    }
})()