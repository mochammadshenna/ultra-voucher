function matchWord(str) {
    let obj = {}
    let result = []

    str.forEach(word => {
        let arr = word.split("").sort()
        if (!obj[arr]) obj[arr] = []
        obj[arr].push(word)
    })

    Object.keys(obj).forEach(key => {
        result.push(obj[key])
    })
    return result
  }
  
  console.log(matchWord(['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']));
  