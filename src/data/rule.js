export default {
    rules: {
        "\\n": "",
        "\\s+": " ",
        "width": "WIDTH",
        "height": "HEIGHT",
        "style": "STYLE"
    },
    format(value) {
        for (var reg in this.rules) {
            value = value.replace(new RegExp(reg, "gi"), this.rules[reg])
        }
        return value
    }
}