// 快捷键

interface keyIF{
    [propname:string]:()=>any
}

export const keyList:keyIF = ({
    'CommandOrControl+Y':textShortcut
})

// test快捷方式
function textShortcut (){
    console.log('test')
}

