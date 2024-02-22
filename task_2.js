let defaults = {
    mode: "test",
    debugLevel: "error",
    logFolder: "root"
}

let userSetting = {
    mode: "production",
    debugLevel: "trace"
}
// first 

function mergeSettings(defaults, userSetting) {
    return { ...defaults, ...userSetting };
}
// second
function mergeSettings(defaults, userSetting) {
    return Object.assign({}, defaults, userSetting);
}
//third
function mergeSettings(defaults, userSetting) {
    let merged = {};
    for (const i in defaults) {
      merged[i] = userSetting.hasOwnProperty(i) ? userSetting[i] : defaults[i];
    }
    return merged;
}

let mergedSettings = mergeSettings(defaults, userSetting);
console.log(mergedSettings);


