export function formatDate(time, type = 'YYYY-MM-DD') { //
  const y = formatNumber(time.getFullYear())
  const m = formatNumber(time.getMonth() + 1)
  const d = formatNumber(time.getDate())
  const h = formatNumber(time.getHours())
  const mm = formatNumber(time.getMinutes())
  const s = formatNumber(time.getSeconds())
  if (type === 'YYYY-MM-DD HH-MM-SS') {
    return `${y}-${m}-${d} ${h}:${mm}:${s}`
  } else if (type === 'YYYY-MM-DD') {
    return `${y}-${m}-${d}`
  } else if (type === 'YYYY-MM') {
    return `${y}-${m}`
  } else if (type === 'HH-MM-SS') {
    return `${h}:${mm}:${s}`
  } else if (type === 'HH') {
    return `${h}`
  }
}

// 格式化数字 '1' => '01'
function formatNumber(num) {
  let isNumber = isType('Number')
  if (!isNumber(num)) return
  return num >= 10 ? String(num) : '0' + String(num)
}

// 判断数据类型
function isType(type) {
  return (arg) => {
    return Object.prototype.toString.call(arg) === `[object ${type}]`
  }
}

// 生成三十天时间数组
export function lastMonth(date) {
  let res = []
  for(var i = 0;i<30;i++){
    res.unshift(
      {
        time: formatDate(new Date(new Date(date)
        .setDate(new Date(date).getDate() + i)), 'YYYY-MM-DD'),
        count: 0
      }
    )
  }
  return res
}

// 格式化性别
export function formatSex(val) {
  return val === '0' ? '男👨' : val === '1' ? '女👩' : '未知'
}


export function msToDay(ms, type='DD') {  
  const days    = ms / 1000 / 60 / 60 / 24
  const daysRound = Math.floor(days)
  const hours = ms / 1000 / 60 / 60 - (24 * daysRound)
  const hoursRound = Math.floor(hours)
  // const minutes = ms / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound)
  // const minutesRound = Math.floor(minutes)
  // const seconds = ms / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound)
  if (type === 'DD') {
    return `${daysRound}天`
  } else if (type === 'DD-HH') {
    return `${daysRound}天${hoursRound}小时`
  }
}

// 全屏展示
export function entryFullScreen() {
  const doc = document.documentElement
  if (doc.requestFullScreen) {
    return doc.requestFullScreen()
  } else if (doc.mozRequestFullScreen) {
    return doc.mozRequestFullScreen()
  } else if (doc.webkitRequestFullScreen) {
    return doc.webkitRequestFullScreen()
  }
}

// 取消全屏
export function exitFullScreen() {
  const doc = document
  if (doc.exitFullscreen) {
    return doc.exitFullscreen()
  } else if (doc.mozCancelFullScreen) {
    return doc.mozCancelFullScreen()
  } else if (doc.webkitCancelFullScreen) {
    return doc.webkitCancelFullScreen()
  }
}
