let commands = require("commands");
let shadow = null;

function copyShadow(selection) {
    shadow = selection.items[0].shadow;
}

function pasteShadow(selection) {
    for (let i = 0; i < selection.items.length; i++) {
        if (selection.items[i].children && selection.items[i].children.length) {
            commands.ungroup();
            for (let j = 0; j < selection.items.length; j++) {
                if (selection.items[i + j].children && selection.items[i + j].children.length) {
                    commands.ungroup();
                    selection.items[i + j].shadow = shadow;
                    commands.group();
                } else {
                    selection.items[i + j].shadow = shadow;
                }
            }
            commands.group();
        } else {
            selection.items[i].shadow = shadow;
        }
    }
}

module.exports = {
    commands: {
        copyShadow: copyShadow,
        pasteShadow: pasteShadow
    }
};

