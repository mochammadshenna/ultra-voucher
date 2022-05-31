function matchWord(str) {
    let tempObj = {}
    let tempArr = []
    str.forEach(word => {
        tempArr = word.split("")
  
        temp = tempArr.sort()
  
        if (!tempObj[temp]) tempObj[temp] = []
        tempObj[temp].push(word)
  
    })
    let result = []
    let keys = Object.keys(tempObj)
    keys.forEach(key => {
        result.push(tempObj[key])
    })
    return result
  }
  
  console.log(matchWord(['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map']));
  